import { useState } from "react";

import { Botao } from "../Botao";

import { CampoTexto } from "../CampoTexto";

import style from './FormCriarTarefa.module.css';

import { useAppContext } from "../../hooks";
import { Loading } from "../Loading";

const FormCriarTarefa = () => {
const { adicionarTarefa, loadingCriar } = useAppContext();

    const [nomeTarefa, setNomeTarefa] = useState ('');  // o estado é deixar o valor do imput em branco 

    const onChangeNomeTarefa = (event) => {
        setNomeTarefa(event.currentTarget.value);
    };   //pelo o que eu estou tentando entender é aqui que pega o value da tarefa escrita no input
    

    const submeterFormulario = (event) => {
        event.preventDefault();   //impede a pagina de recarregar automaticamente

        if(!nomeTarefa){  //se o value do input nao existir nao faz nada
            return;
        }

    adicionarTarefa (nomeTarefa);       //mas se tiver um value usa a funçao adicionarTarefa

    setNomeTarefa('');  //limpa o input
    };
 
   
    return (
        <form className={style.FormCriarTarefa} onSubmit={submeterFormulario}>
            <CampoTexto 
                value={nomeTarefa} 
                onChange={onChangeNomeTarefa}
            />
            <Botao texto={loadingCriar ? <Loading/> : '+'}/>
 
        </form>
        
    );
};

export {FormCriarTarefa}
