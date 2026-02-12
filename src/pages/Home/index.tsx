import { Play } from 'lucide-react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { createContext, useState } from 'react';
import { CountDown } from './components/Countdown';

import { NewCycleForm } from './components/NewcycleForm';
import { HomeContainer, StartButtonContainer, StopButtonContainer } from './styles';
import { HandPalm } from 'phosphor-react';


type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    minutesAmount: zod
        .number()
        .min(5, 'O ciclo precisa ser de no mínimo 5 minutos')
        .max(60, 'O ciclo precisa ser de no máximo 60 minutos'),
});


interface Cycle {
    id: string;
    task: string;
    minutesAmount: number;
    isActive: boolean;
    startDate: Date;
    interruptedDate?: Date;
}

interface CycleContextType {
    activeCycle: Cycle | undefined;
    activeCycleId: string | null;
    secondsPassed: number;
    markCurrentCycleAsFinished: () => void;
    setAmountSecondsPassed: (seconds: number) => void;
}

export const CycleContext = createContext({} as CycleContextType);

export function Home() {

    const [cycles, setCycles] = useState<Cycle[]>([]);
    const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
    const [secondsPassed, setSecondsPassed] = useState(0);
    
//O hook useForm é utilizado para criar um formulário controlado, onde newCycleFrom é o objeto que contém os métodos e propriedades para lidar com o formulário. O resolver zodResolver(newCycleFormValidationSchema) é usado para integrar a validação do Zod ao formulário, garantindo que os dados inseridos pelo usuário sejam validados de acordo com as regras definidas no newCycleFormValidationSchema. O defaultValues define os valores iniciais dos campos do formulário, neste caso, uma string vazia para 'task' e 0 para 'minutesAmount'.    
    const newCycleFrom = useForm({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,
        }
    });
const { handleSubmit, watch, reset } = newCycleFrom;

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
    function handleFormSubmit(data: NewCycleFormData) {
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

        reset();
    }

//responsável por lidar com a interrupção do ciclo atual. Ela atualiza o estado cycles para marcar o ciclo ativo como interrompido, definindo a propriedade interruptedDate do ciclo correspondente. Além disso, ela define activeCycleId como null para indicar que não há mais um ciclo ativo.    
    function handleInterruptCycle() {
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


    const task = watch('task'); //watch é uma função fornecida pelo react-hook-form que permite monitorar o valor de um campo específico do formulário. Neste caso, ele está monitorando o campo 'task', que é o nome do campo de entrada para a tarefa. O valor atual desse campo será armazenado na variável task, e sempre que o usuário digitar algo nesse campo, a variável task será atualizada com o novo valor. Isso é útil para habilitar ou desabilitar o botão de envio com base na presença de texto no campo de tarefa.
    const isSubmitDisabled = !task; //Essa linha define a variável isSubmitDisabled como true se a variável task estiver vazia (ou seja, se o usuário não tiver digitado nada no campo de tarefa) e como false caso contrário. Isso é usado para controlar se o botão de envio do formulário deve estar habilitado ou desabilitado. Se task for uma string vazia, isSubmitDisabled será true, o que desabilitará o botão de envio, impedindo que o usuário envie um ciclo sem especificar uma tarefa. Se task tiver algum valor (ou seja, se o usuário tiver digitado algo), isSubmitDisabled será false, permitindo que o botão de envio seja clicável.

    console.log(cycles);

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleFormSubmit)} action="">

                <CycleContext.Provider 
                 value={{ activeCycle,
                          activeCycleId, 
                          markCurrentCycleAsFinished, 
                          secondsPassed,
                          setAmountSecondsPassed
                        }}
                 >
                    <FormProvider {...newCycleFrom}>
                        <NewCycleForm />
                    </FormProvider>
                    <CountDown />
                </CycleContext.Provider>

                {activeCycle ? (
                    <StopButtonContainer type="button" onClick={handleInterruptCycle}>
                        <HandPalm size={24} />
                        Parar
                    </StopButtonContainer>
                ) : (
                    <StartButtonContainer type="submit" disabled={isSubmitDisabled}>
                        <Play size={24} />
                        Começar
                    </StartButtonContainer>
                )}
            </form>
        </HomeContainer>
    )
}