import { createContext, useState } from "react";


interface CreateCycleData {
    task: string;
    minutesAmount: number;
}

interface Cycle {
    id: string;
    task: string;
    minutesAmount: number;
    isActive: boolean;
    startDate: Date;
    interruptedDate?: Date;
    finishedDate?: Date
}


interface CycleContextType {
    cycles: Cycle[];
    activeCycle: Cycle | undefined;
    activeCycleId: string | null;
    secondsPassed: number;
    markCurrentCycleAsFinished: () => void;
    setAmountSecondsPassed: (seconds: number) => void;
    createNewCycle: (data: CreateCycleData) => void;
    InterruptCurrentCycle: () => void;
}

export const CycleContext = createContext({} as CycleContextType);

interface CycleContextChildrenProps {
    children: React.ReactNode;
}

export function CycleContextProvider({ children }: CycleContextChildrenProps) {
    const [cycles, setCycles] = useState<Cycle[]>([]);
    const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
    const [secondsPassed, setSecondsPassed] = useState(0);

    const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

    //Essa função é responsável por atualizar a quantidade de segundos passados no ciclo ativo. Ela recebe um número de segundos como argumento e atualiza o estado secondsPassed com esse valor. Essa função é usada para manter o controle do tempo decorrido durante um ciclo ativo, permitindo que o componente Countdown exiba o tempo restante corretamente.
    function setAmountSecondsPassed(seconds: number) {
        setSecondsPassed(seconds);
    }

//Marca o ciclo atual como finalizado, atualizando a propriedade finishedDate do ciclo correspondente no estado cycles. Ele utiliza a função setCycles para atualizar o estado, mapeando sobre os ciclos existentes e modificando apenas o ciclo que corresponde ao activeCycleId.
    function markCurrentCycleAsFinished() {
        setCycles((state) =>
            state.map((cycle) => {
                if (cycle.id === activeCycleId) {
                    return { ...cycle, finishedDate: new Date() };
                } else {
                    return cycle;
                }
            }),
        );
    }

    //Essa função é responsável por lidar com o envio do formulário para criar um novo ciclo. Ela recebe os dados do formulário, cria um novo ciclo com um ID único, adiciona esse ciclo ao estado cycles, define o activeCycleId para o ID do novo ciclo e reseta o formulário.
        function createNewCycle(data: CreateCycleData) {
            const id = String(new Date().getTime());
    
            const newCycle: Cycle = {
                id,
                task: data.task,
                minutesAmount: data.minutesAmount,
                isActive: true,
                startDate: new Date(),
            };
    
            setCycles((state) => [...state, newCycle]);
            setActiveCycleId(id);
            setSecondsPassed(0);
    
           // reset();
        }
    
    //responsável por lidar com a interrupção do ciclo atual. Ela atualiza o estado cycles para marcar o ciclo ativo como interrompido, definindo a propriedade interruptedDate do ciclo correspondente. Além disso, ela define activeCycleId como null para indicar que não há mais um ciclo ativo.    
        function InterruptCurrentCycle() {
            setCycles((cycle) =>
                cycle.map((cycle) => {
                    if (cycle.id === activeCycleId) {
                        return { ...cycle, interruptedDate: new Date() };
                    } else {
                        return cycle;
                    }
                }),
            );
            setActiveCycleId(null);
        }
    


    return (
        <CycleContext.Provider //O CycleContext.Provider é um componente que faz parte do sistema de contexto do React. Ele é usado para fornecer um valor de contexto para os componentes filhos que estão dentro dele. Nesse caso, o valor fornecido inclui informações sobre o ciclo ativo, o ID do ciclo ativo, a função para marcar o ciclo atual como finalizado, a quantidade de segundos passados e a função para definir a quantidade de segundos passados. Os componentes filhos, como NewCycleForm e CountDown, podem acessar esses valores usando o hook useContext(CycleContext) para obter as informações necessárias sobre o ciclo ativo e interagir com ele.
            value={{
                cycles,
                activeCycle,
                activeCycleId,
                markCurrentCycleAsFinished,
                secondsPassed,
                setAmountSecondsPassed,
                createNewCycle,
                InterruptCurrentCycle,
            }}
        >
            {children}
        </CycleContext.Provider>
    )
};