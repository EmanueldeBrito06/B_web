import { Play } from 'lucide-react';
import { useForm } from 'react-hook-form';

import { HomeContainer, 
    FormContainer, 
    CountdownContainer, 
    Separator, 
    ButtonContainer, 
    TaskInput, 
    MinutesAmountInput 
} from './styles';

export function Home() {
    const { register, handleSubmit, watch } = useForm<FormData>();

    function handleFormSubmit(data: FormData) {
        console.log(data);
    }

    const task = watch("task");
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
                        {...register("task")}
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
                            {...register("minutesAmount", { valueAsNumber: true })}
                        />
                        minutos
                    </label>

                </FormContainer>

                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountdownContainer>

                <ButtonContainer disabled={isSubmitDisabled} type="submit">
                    <Play size={24} />
                    Começar
                </ButtonContainer>

            </form>
        </HomeContainer>
    )
}