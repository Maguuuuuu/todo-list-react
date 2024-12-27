
import { Botao, CampoTexto, Loading, TIPO_BOTAO } from '../../../components';
import style from './ListaTarefasItem.module.css';
import { useAppContext } from '../../../hooks';
import { useState } from 'react';



const ListaTarefasItem = (props) => {
    const {id, nome} = props;

    const {loadingEditar, loadingDeletar, removerTarefa, editarTarefa} = useAppContext();

    const [estaEditando, setEstaEditando] = useState(false);

    const onBlurTarefa = (event) => {
        const nomeTarefa = event.currentTarget.value;

        editarTarefa(id, nomeTarefa);

        setEstaEditando(false);
    };
   
    const loadingEstaEDitando = loadingEditar == id;
    const loadingEstaDeletando = loadingDeletar == id;

    return (
        <li className={style.ListaTarefasItem}>
            {loadingEstaEDitando || estaEditando && (
                <CampoTexto
                    defaultValue={nome}
                    onBlur={onBlurTarefa} 
                    autofocous = "true"
                />
            )}
            {!loadingEstaEDitando && !estaEditando && (
                <span onDoubleClick={() => setEstaEditando(true)}>{nome}</span>
            )}

            {loadingEstaEDitando && (
                <Loading/>
            )}

            <Botao 
                texto={loadingEstaEDitando ? <Loading/>: '-'} 
                tipo={TIPO_BOTAO.SECUNDARIO}
                onClick={() => removerTarefa(id)}
            />         
        </li>    
    )
};

export {ListaTarefasItem};