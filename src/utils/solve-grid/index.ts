import global from 'global'
import { GRID, NUMBERS } from 'typings'
import { checkGridFull, identifySubgrid, isInCol, 
        isInRow, isInSubgrid } from 'utils'

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]


/**
 * A backtracking / recursive function to check all possible 
 * combinations of numbers until a solution is found
 * 
 * @param grid 9x9 Sudoku grid
 */

function solveGrid(grid:GRID) {
    let row = 0
    let col = 0

    for (let i = 0; i < 81; i++){
        row = Math.floor(i/9)
        col = i % 9

        if (grid[row][col] === 0) {
            for (let value of numbers) {
                if (!isInRow({grid, row, value}))
                    if (!isInCol({grid, col, value})){
                        const subgrid = identifySubgrid({grid, row, col})
                        if (!isInSubgrid({subgrid, value})) {
                            grid[row][col] = value
                            if (checkGridFull(grid)) {
                                global.counter++
                                break
                            } else if (solveGrid(grid)) return true
                        }
                    }
            }
            break
        }
    }

    grid[row][col] = 0

}

export default solveGrid