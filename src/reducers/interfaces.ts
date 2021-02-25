import { GRID, CELL_COORD } from 'typings'

export interface IReducer {
    
    selectedCell?: CELL_COORD
    solvedGrid?: GRID
    challengeGrid?: GRID
    workingGrid?: GRID

}