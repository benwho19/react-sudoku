import { SUBGRID } from 'typings'

import isInSubgrid from './'

describe('isInSubgrid', () => {
    it('returns true when value exists in subgrid', () => {
        const subgrid: SUBGRID = [
            [1, 3, 4],
            [8, 2, 7],
            [6, 9, 5]
        ]
        expect(isInSubgrid({subgrid, value: 1})).toBeTruthy()
        expect(isInSubgrid({subgrid, value: 9})).toBeTruthy()
    })

    it('returns false when value does not exist in subgrid', () => {
        const subgrid: SUBGRID = [
            [0, 3, 4],
            [8, 2, 7],
            [6, 0, 5]
        ]
        expect(isInSubgrid({subgrid, value: 1})).toBeFalsy()
        expect(isInSubgrid({subgrid, value: 9})).toBeFalsy() 
    })
})
