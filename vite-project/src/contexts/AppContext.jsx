//o context deve gerenciar os estados (?) nesse caso as funções de adicionar e remor tarefas



import { createContext, useEffect, useState } from 'react';

import { api } from '../services/api'


export const AppContext = createContext({});

export const  AppContextProvider = (props) => {
    const { children } = props;

    const [criador, setCriador] = useState('Bistafa');

    const [tarefas, setTarefas] = useState([]);

    const [loadingCriar, setLoadingCriar] = useState(false);
    const [loadingEditar, setLoadingEditar] = useState(false);
    const [loadingDeletar, setLoadingDeletar] = useState(null);
    const [loadingCarregar, setLoadingCarregar] = useState(null);

    const carregarTarefas = async () => {

        setLoadingCarregar(true);

        const { data = [] } = await api.get('/tarefas')
        setTarefas([
            ...data,
        ]);

        setLoadingCarregar(false);
    };

    const adicionarTarefa = async (nomeTarefa) => {

        setLoadingCriar(true);

        const { data : tarefa } = await api.post('/tarefas', {
            nome: nomeTarefa,
        });

        setTarefas(estadoAtual => {
            return [
                ...estadoAtual,
                tarefa,
            ];
        
        });

        setLoadingCriar(false);
    }

    const removerTarefa = async (idTarefa) => {

        setLoadingDeletar(idTarefa);

        await api.delete(`tarefas/${idTarefa}`);

        setTarefas(estadoAtual => {
            const tarefasAtualizadas = estadoAtual.filter(tarefa => tarefa.id != idTarefa);

            return[
                ...tarefasAtualizadas,
            ];
        });     
        setLoadingDeletar(null);    
    };

    const editarTarefa = async (idTarefa, nomeTarefa) => {

        setLoadingEditar(idTarefa);

        const {data: tarefatarefaAtualizada} = await api.put(`tarefas/${idTarefa}`,{
            nome: nomeTarefa,
        });

        setTarefas(estadoAtual =>{
            const tarefasAtualizadas = estadoAtual.map(tarefa => {
                return tarefa.id == idTarefa ? {
                    ...tarefa,
                    nome: tarefatarefaAtualizada.nome,
                } : tarefa;
            });

            return [
                ...tarefasAtualizadas,
            ];
        });

        setLoadingEditar(null);
    };

    useEffect(() =>{     //primeiro valor que o useEffect rece é a função que será executada e o segundo é um array de dependencias que ele vai observar
        carregarTarefas();
    },[])
    
    return (
        <AppContext.Provider value={{
            criador,
            tarefas,
            adicionarTarefa,
            removerTarefa,
            editarTarefa,
            loadingCarregar,
            loadingCriar,
            loadingDeletar,
            loadingEditar,
            }}>
            { children }
        </AppContext.Provider>
    );
};

