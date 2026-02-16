import { Clock, Calendar, CheckCircle, BookOpen } from 'lucide-react';
import { HitoryContainer, HitoryList, Status } from "./styles";
import { useContext } from 'react';
import { CycleContext } from '../../contexts/CyclesContext';
import { formatDistanceToNow } from 'date-fns';
import { ptBR }  from 'date-fns/locale/pt-BR';


export function History() {
    const { cycles } = useContext(CycleContext);


    return (
        <HitoryContainer >
            <h1>Meu Historicos</h1>
            <HitoryList>
                <table>
                    <thead>
                        <tr>
                            <th><BookOpen size={16} /> Tarefa </th>
                            <th><Clock size={16} /> Duração </th>
                            <th><Calendar size={16} /> Início </th>
                            <th><CheckCircle size={16} /> Status </th>
                        </tr>
                    </thead>
                    {cycles.map((cycle) => {
                        return (
                            <tbody>
                                <tr key={cycle.id}>
                                    <td>{cycle.task}</td>
                                    <td>{cycle.minutesAmount} minutos</td>
                                    <td>
                                        {formatDistanceToNow(cycle.startDate,
                                            { addSuffix: true,
                                                locale: ptBR })}
                                    </td>
                                    <td>
                                        {cycle.finishedDate && (
                                          <Status statusColor="green"> Concluido </Status>
                                        )}                                  
                                        
                                        {cycle.interruptedDate && (
                                            <Status statusColor="red">Interrompido</Status>
                                        )}                                  
                                        {!cycle.finishedDate && !cycle.interruptedDate && 
                                          <Status statusColor="yellow">Empogreço</Status>
                                        }                                  
                                    </td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
            </HitoryList>
        </HitoryContainer >

    )
}