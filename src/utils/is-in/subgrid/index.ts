import { NUMBERS, SUBGRID } from 'typings'

interface IInput {
    subgrid: SUBGRID
    value: NUMBERS
}

/**
 * returns true if value is already in current cell's subgrid
 * @param input Object containing a 3x3 subgrid and a value
 */

function isInSubgrid({subgrid, value}: IInput): boolean {
    return [...subgrid[0], ...subgrid[1], ...subgrid[2]].includes(value)
}

export default isInSubgrid
