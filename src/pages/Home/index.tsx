import { Play } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod'; 
import { useState } from 'react';

import { HomeContainer, 
    FormContainer, 
    CountdownContainer, 
    Separator, 
    ButtonContainer, 
    TaskInput, 
    MinutesAmountInput 
} from './styles';

const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    minutesAmount: zod
        .number()
        .min(5, 'O ciclo precisa ser de no mínimo 5 minutos')
        .max(60, 'O ciclo precisa ser de no máximo 60 minutos'),
});


type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

interface Cycle {
    id: string;
    task: string;
    minutesAmount: number;
    isActive: boolean;
}

export function Home() {

    const [cycles, setCycles] = useState<Cycle[]>([]); 
    const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
    const [secondsPassed, setSecondsPassed] = useState(0);

    const { register, handleSubmit, watch, reset } = useForm({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,
        }
    })

    function handleFormSubmit(data: NewCycleFormData) {
        const id = String(new Date().getTime());
        const newCycle: Cycle = {
            id,
            task: data.task,
            minutesAmount: data.minutesAmount,
            isActive: true,
        };

        setCycles((state) => [...state, newCycle]);
        setActiveCycleId(id);
        

        reset();
    }

    const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);


    const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
    const currentSeconds = activeCycle ? totalSeconds - secondsPassed : 0;

    const minutesAmount = Math.floor(currentSeconds / 60);
    const secondsAmount = currentSeconds % 60;

    const minutes = String(minutesAmount).padStart(2, '0');
    const seconds = String(secondsAmount).padStart(2, '0');

    console.log(activeCycle);


    const task = watch('task');
    const isSubmitDisabled = !task;

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleFormSubmit)} action="">

                <FormContainer>
                    <label htmlFor="">Agora Vou Cofar em</label>
                    <TaskInput
                        id="task"
                        list="task-suggestions"
                        placeholder="Ate ao momento vou me cofar em..."
                        {...register('task')}
                    />

                    <datalist id="task-suggestions">
                        <option value="Desenvolver funcionalidades"></option>
                        <option value="Revisar código"></option>
                        <option value="Testar aplicação"></option>
                        <option value="Estudar novas tecnologias"></option>
                        <option value="Planejar projeto"></option>
                        <option value="Corrigir bugs"></option>
                        <option value="Otimizar performance"></option>
                    </datalist>

                    <label htmlFor="minutesAmount">Duração
                        <MinutesAmountInput
                            type="number"
                            id="minutesAmount"
                            step={5}
                            min={5}
                            max={100}
                            defaultValue={25}
                            {...register('minutesAmount', { valueAsNumber: true })}
                        />
                        minutos
                    </label>

                </FormContainer>

                <CountdownContainer>
                    <span>{minutes[0]}</span>
                    <span>{minutes[1]}</span>
                    <Separator>:</Separator>
                    <span>{seconds[0]}</span>
                    <span>{seconds[1]}</span>
                </CountdownContainer>

                <ButtonContainer disabled={isSubmitDisabled} type="submit">
                    <Play size={24} />
                    Começar
                </ButtonContainer>

            </form>
        </HomeContainer>
    )
}