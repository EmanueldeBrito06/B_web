import { Clock, Calendar, CheckCircle, BookOpen } from 'lucide-react';
import { HitoryContainer, HitoryList, Status } from "./styles";
export function History() {
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
                    <tbody>
                        <tr>
                            <td>Estudar React</td>
                            <td>25 minutos</td>
                            <td>20/06/2024</td>
                            <td>
                                <Status statusColor="green">Concluído</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Estudar React</td>
                            <td>25 minutos</td>
                            <td>20/06/2024</td>
                            <td>
                                <Status statusColor="green">Concluído</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Estudar React</td>
                            <td>25 minutos</td>
                            <td>20/06/2024</td>
                            <td>
                                <Status statusColor="green">Andamento</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Estudar React</td>
                            <td>25 minutos</td>
                            <td>20/06/2024</td>
                            <td>
                                <Status statusColor="red">Enterrado</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Estudar React</td>
                            <td>25 minutos</td>
                            <td>20/06/2024</td>
                            <td>
                                <Status statusColor="yellow">Andamento</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Estudar React</td>
                            <td>25 minutos</td>
                            <td>20/06/2024</td>
                            <td>
                                <Status statusColor="red">Enterrado</Status>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </HitoryList>
        </HitoryContainer >

    )
}