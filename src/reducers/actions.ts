import { Action, AnyAction } from 'redux'
import * as types from './types'
import { CELL_COORD, NUMBERS } from 'typings'

export const createGrid = (): Action => ({
    type: types.CREATE_GRID
})

export const selectCell = (coords: CELL_COORD): AnyAction => ({
    coords, 
    type: types.SELECT_CELL
})

export const fillCell = (value: NUMBERS, coords: CELL_COORD) : AnyAction => ({
    coords,
    type: types.FILL_CELL,
    value,
})