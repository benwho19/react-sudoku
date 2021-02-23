import { Action, AnyAction } from 'redux'
import * as types from './types'
import { CELL_COORD } from 'typings'

export const createGrid = (): Action => ({
    type: types.CREATE_GRID
})

export const selectCell = (coords: CELL_COORD): AnyAction => ({
    coords, 
    type: types.SELECT_CELL
})