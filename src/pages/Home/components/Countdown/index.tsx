import { useContext } from 'react'
import { useEffect} from 'react';
import { differenceInSeconds } from 'date-fns';
import { CountdownContainer, Separator } from "./styled"
import { CycleContext } from '../../../../contexts/CyclesContext';


//Essa função é responsável por exibir a contagem regressiva do ciclo ativo. Ela utiliza o contexto CycleContext para acessar informações sobre o ciclo ativo, como a quantidade total de segundos, os segundos passados e as funções para marcar o ciclo como concluído e atualizar os segundos passados. A função também utiliza o hook useEffect para configurar um intervalo que atualiza a contagem regressiva a cada segundo, verificando se o ciclo foi concluído ou não. Além disso, ela formata os minutos e segundos para exibição na interface do usuário.
export function CountDown() {
    const { activeCycle,
            activeCycleId,
            markCurrentCycleAsFinished,
            secondsPassed,
            setAmountSecondsPassed, } = useContext(CycleContext);

//Essa linha calcula o total de segundos para o ciclo ativo. Se houver um ciclo ativo, ele multiplica a quantidade de minutos do ciclo por 60 para obter o total de segundos. Caso contrário, se não houver um ciclo ativo, o total de segundos é definido como 0. Essa variável é usada posteriormente para calcular o tempo restante e para determinar quando o ciclo deve ser marcado como concluído.     
    const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
     useEffect(() => {
        let interval: number | NodeJS.Timeout ;
 
        if  (activeCycle) {
            interval = setInterval(() => {
            const secondsPassed = differenceInSeconds(
                new Date(), 
            activeCycle.startDate,
        )
        if (secondsPassed >= totalSeconds) {
           markCurrentCycleAsFinished();
            setAmountSecondsPassed(totalSeconds);
            clearInterval(interval);
        } else {
            setAmountSecondsPassed(secondsPassed);
        }
          }, 1000);
        }

        return () => {
            clearInterval(interval);
        }
    }, [activeCycle, activeCycleId, totalSeconds, markCurrentCycleAsFinished, setAmountSecondsPassed]);

    const currentSeconds = activeCycle ? totalSeconds - secondsPassed : 0;

    const minutesAmount = Math.floor(currentSeconds / 60);
    const secondsAmount = currentSeconds % 60;

    const minutes = String(minutesAmount).padStart(2, '0');
    const seconds = String(secondsAmount).padStart(2, '0');

//Essa função é responsável por atualizar o título da página com o tempo restante do ciclo ativo. Ela é executada sempre que os valores de minutes, seconds ou activeCycle mudam. Se houver um ciclo ativo, o título da página será atualizado para mostrar o tempo restante e a tarefa associada ao ciclo. Caso contrário, o título será definido como 'Timer'. Isso permite que o usuário veja rapidamente quanto tempo falta para o ciclo terminar, mesmo quando não está olhando diretamente para a aplicação.      
     useEffect(() => {
        if (activeCycle) {
            document.title = `${minutes}:${seconds} - ${activeCycle.task}`;
        } else {
            document.title = 'Timer';
        }
    }, [minutes, seconds, activeCycle]);


    return (
        <CountdownContainer>
            <span>{minutes[0]}</span>
            <span>{minutes[1]}</span>
            <Separator>:</Separator>
            <span>{seconds[0]}</span>
            <span>{seconds[1]}</span>
        </CountdownContainer>
    )

}