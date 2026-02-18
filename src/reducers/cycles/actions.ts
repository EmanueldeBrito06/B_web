export interface Cycle {
    id: string;
    task: string;
    minutesAmount: number;
    isActive: boolean;
    startDate: Date;
    interruptedDate?: Date;
    finishedDate?: Date
}

export enum ActionTypes{
    ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
    INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
    MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
}

export function addNewCycleAction(newCycle: Cycle ) {
    return {
         type: ActionTypes.ADD_NEW_CYCLE,
          payload: {
         newCycle
        }
      }
}
export function InterruptCurrentCycleAction() {
    return {
         type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
    }
}

export function markCurrentCycleAsFinisheAction() {
    return {
         type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
    }
}
