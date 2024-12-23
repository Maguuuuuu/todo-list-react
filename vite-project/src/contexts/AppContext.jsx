//o context deve gerenciar os estados (?) nesse caso as funções de adicionar e remor tarefas



import { createContext, useState } from 'react';


export const AppContext = createContext({});

export const  AppContextProvider = (props) => {
    const { children } = props;

    const [criador, setCriador] = useState('Bistafa');

    const [tarefas, setTarefas] = useState([     //primeiro valor: estado de tarefas, segundo: função para atualizar a lista de tarefas; como padrao no segundo valor usar 'set' + nome do estado;para saber que esta função altera aquele estado 
            { id: 1, nome: 'Item 1'},  
            { id: 2, nome: 'Item 2'},
            { id: 3, nome: 'Item 3'},
        ]);

    const adicionarTarefa = (nomeTarefa) => {
        setTarefas(estadoAtual => {
            const tarefa = {
                id: estadoAtual.length + 1,
                nome: nomeTarefa,
            };
            
            return [
                ...estadoAtual,
                tarefa,
            ];
        
        });
        }

    const removerTarefa = (idTarefa) => {
        setTarefas(estadoAtual => {
            const tarefasAtualizadas = estadoAtual.filter(tarefa => tarefa.id != idTarefa);

            return[
                ...tarefasAtualizadas,
            ];

        });

            
    };

    const excluirTarefaEditada = (idTarefa) => {
        setTarefas (estadoAtual => {
            const tarefasEditadasExcluidas = estadoAtual.filter(tarefa => tarefa.id != idTarefa);
            
            return[
                ...tarefasEditadasExcluidas,
            ]
        });
    };

    return (
        <AppContext.Provider value={{
            criador,
            tarefas,
            adicionarTarefa,
            removerTarefa,
            excluirTarefaEditada,
            }}>
            { children }
        </AppContext.Provider>
    );
};

