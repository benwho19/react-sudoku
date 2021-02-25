import { GRID } from 'typings'
import global from 'global'
import { solveGrid, copyGrid } from 'utils'


/**
 * Removes numbers from a full grid to create a Sudoku puzzle
 * @param grid 9x9 Sudoku grid
 * @param attempts number of attempts to solve
 */


function removeNumbers(grid: GRID, attempts = 5): GRID {

    while (attempts > 0) {
        let row = getRandomIndex()
        let col = getRandomIndex()

        while(grid[row][col] === 0) {
            row = getRandomIndex()
            col = getRandomIndex()
        }

        const backup = grid[row][col]
        grid[row][col] = 0

        const gridCopy = copyGrid(grid)
        global.counter = 0
        solveGrid(gridCopy)

        if (global.counter !== 1) {
            grid[row][col] = backup
            attempts--
        }
    }
    return grid
}


function getRandomIndex() {
    return Math.floor(Math.random() * 9)
}



export default removeNumbers