
import { GRID, NUMBERS } from 'typings'
import { shuffle, isInRow, isInCol, isInSubgrid, identifySubgrid, checkGridFull } from 'utils'

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 * A backtracking/recursive function to check all possible
 * combinations of numbers until a solution is found.
 * @param grid  9x9 Sudoku grid
 */

function fillGrid(grid: GRID) {
    let row = 0;
    let col = 0;
    for (let i = 0; i < 81; i++) {
        row = Math.floor(i/9);
        col = i % 9
        
        if (grid[row][col] === 0) {
            // shuffle to generate random puzzle
            shuffle(numbers)

            for (let value of numbers) {
                // check for duplicate in grid row, grid row, subgrid
                if (!isInRow({grid, row, value})) {
                    if (!isInCol({grid, col, value })) {
                        const subgrid = identifySubgrid({grid, row, col})
                        if (!isInSubgrid({subgrid, value})) {
                            // if no duplicate, set value
                            grid[row][col] = value

                            // check if grid is full; if full, stop and return true
                            // if not, recursively run fillGrid on current grid
                            if (checkGridFull(grid)) return true
                            else if (fillGrid(grid)) return true
                        }
                    }
                }
            }

            break
        }
    }
    grid[row][col] = 0;
}

export default fillGrid 