import { GRID } from 'typings'


/**
 * A function to check if grid is full
 * @param grid  a 9x9 array of values from 0-9
 * 
 */

function checkGridFull(grid: GRID): boolean {
    for (let i=0; i<9; i++) {
        for (let j=0; j<9; j++) {
            if (grid[i][j] === 0) return false
        }
    }
    return true
}

export default checkGridFull