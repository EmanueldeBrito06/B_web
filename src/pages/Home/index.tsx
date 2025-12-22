import { Play } from 'lucide-react';
import { HomeContainer, FormContainer, CountdownContainer, Separator, ButtonContainer, TaskInput, MinutesAmountInput } from './styles';

export function Home() {
    return (
        <HomeContainer>
            <form action="">

                <FormContainer>
                    <label htmlFor="">Agora Vou Cofar em</label>
                    <TaskInput
                        id="task"
                        list="task-suggestions"
                        placeholder="Ate ao momento vou me cofar em..."
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

                <ButtonContainer disabled type="submit">
                    <Play size={24} />
                    Começar
                </ButtonContainer>

            </form>
        </HomeContainer>
    )
}