import { GRID, NUMBERS } from 'typings'

interface IInput {
    grid: GRID
    col: number
    value: NUMBERS
}

/**
 * returns true if value is already in a cell's col
 * @param input Object containing Sudoku 9x9 grid, col index, and value
 */

function isInCol({grid, col, value}: IInput): boolean {
    
    for (let i = 0; i < 9; i++) {
        if (value === grid[i][col]) return true
    }
    return false
}

export default isInCol