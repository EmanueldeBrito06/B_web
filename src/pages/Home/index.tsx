import {  Play } from 'lucide-react';
import { HomeContainer, FormContainer, CountdownContainer, Separator, ButtonContainer  } from './styles';

export function Home() {
    return (
        <HomeContainer>
            <form action="">

                <FormContainer>
                    <label htmlFor="">Agora Vou Cofar em</label>
                    <input id="task" />
                    <label htmlFor="minutesAmount">Duração</label>
                    <input type="number" id="minutesAmount" />
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