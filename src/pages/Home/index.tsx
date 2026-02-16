import { Play } from 'lucide-react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { useContext } from 'react';
import { CountDown } from './components/Countdown';

import { NewCycleForm } from './components/NewcycleForm';
import { HomeContainer, StartButtonContainer, StopButtonContainer } from './styles';
import { HandPalm } from 'phosphor-react';
import { CycleContext } from '../../contexts/CyclesContext';



type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    minutesAmount: zod
        .number()
        .min(5, 'O ciclo precisa ser de no mínimo 5 minutos')
        .max(60, 'O ciclo precisa ser de no máximo 60 minutos'),
});


export function Home() {
    const { activeCycle, createNewCycle, InterruptCurrentCycle } = useContext(CycleContext);


    //O hook useForm é utilizado para criar um formulário controlado, onde newCycleFrom é o objeto que contém os métodos e propriedades para lidar com o formulário. O resolver zodResolver(newCycleFormValidationSchema) é usado para integrar a validação do Zod ao formulário, garantindo que os dados inseridos pelo usuário sejam validados de acordo com as regras definidas no newCycleFormValidationSchema. O defaultValues define os valores iniciais dos campos do formulário, neste caso, uma string vazia para 'task' e 0 para 'minutesAmount'.    
    const newCycleFrom = useForm({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,
        }
    });

    const { handleSubmit, watch, reset } = newCycleFrom;

    function handleCreateNewCycle (data: NewCycleFormData) {
       createNewCycle(data)
       reset()
    }

    const task = watch('task'); //watch é uma função fornecida pelo react-hook-form que permite monitorar o valor de um campo específico do formulário. Neste caso, ele está monitorando o campo 'task', que é o nome do campo de entrada para a tarefa. O valor atual desse campo será armazenado na variável task, e sempre que o usuário digitar algo nesse campo, a variável task será atualizada com o novo valor. Isso é útil para habilitar ou desabilitar o botão de envio com base na presença de texto no campo de tarefa.
    const isSubmitDisabled = !task; //Essa linha define a variável isSubmitDisabled como true se a variável task estiver vazia (ou seja, se o usuário não tiver digitado nada no campo de tarefa) e como false caso contrário. Isso é usado para controlar se o botão de envio do formulário deve estar habilitado ou desabilitado. Se task for uma string vazia, isSubmitDisabled será true, o que desabilitará o botão de envio, impedindo que o usuário envie um ciclo sem especificar uma tarefa. Se task tiver algum valor (ou seja, se o usuário tiver digitado algo), isSubmitDisabled será false, permitindo que o botão de envio seja clicável.




    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">


                <FormProvider {...newCycleFrom}>
                    <NewCycleForm />
                </FormProvider>
                <CountDown />


                {activeCycle ? (
                    <StopButtonContainer type="button" onClick={InterruptCurrentCycle}>
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