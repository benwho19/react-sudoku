
import { GRID, NUMBERS } from 'typings'

interface IInput {
    grid: GRID
    row: number
    value: NUMBERS
}

/**
 * A function that returns true if value already being used in current grid row
 * @param input Object with 9x9 Sudoku grid, row index, and value
 */

function isInRow({ grid, row, value }: IInput): boolean {
    return grid[row].includes(value)
}

export default isInRow
