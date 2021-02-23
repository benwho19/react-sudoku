import { GRID } from 'typings'


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

    }

    return grid
}


function getRandomIndex() {
    return Math.floor(Math.random() * 9)
}

export default removeNumbers