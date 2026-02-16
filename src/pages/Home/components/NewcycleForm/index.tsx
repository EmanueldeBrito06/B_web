import { FormContainer, TaskInput, MinutesAmountInput } from "./styled";
import { useContext } from 'react'
import { CycleContext } from '../../../../contexts/CyclesContext';
import { useFormContext } from 'react-hook-form'

export function NewCycleForm() {
    const { activeCycle } = useContext(CycleContext);
    const { register } = useFormContext();



    return (
        <FormContainer>
            <label htmlFor="">Agora Vou Cofar em</label>
            <TaskInput
                id="task"
                list="task-suggestions"
                placeholder="Ate ao momento vou me cofar em..."
                disabled={!!activeCycle}
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

            <label htmlFor="minutesAmount">
                Duração
                <MinutesAmountInput
                    type="number"
                    id="minutesAmount"
                    step={5}
                    min={5}
                    max={100}
                    defaultValue={25}
                    disabled={!!activeCycle}
                    {...register('minutesAmount', { valueAsNumber: true })}
                />
                minutos
            </label>

        </FormContainer>
    )
}