
import { Botao } from '../../Botao';
import style from './ListaTarefasItem.module.css';
import { TIPO_BOTAO } from '../../Botao';
import { useAppContext } from '../../../hooks';


const ListaTarefasItem = (props) => {
    const {id, nome} = props;

    const {removerTarefa, excluirTarefaEditada} = useAppContext();

   

    return (
        <li 
            className={style.ListaTarefasItem}
            onDoubleClick={() => excluirTarefaEditada(id)}

        >
            {nome}
            <Botao 
                texto="-" 
                tipo={TIPO_BOTAO.SECUNDARIO}
                onClick={() => removerTarefa(id)}
            />  
                
        </li>
        
        
    )
};

export {ListaTarefasItem};