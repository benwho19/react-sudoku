import React, { FC, useCallback } from 'react'
import { NUMBERS, CELL_COORD, N } from 'typings'
import { Button } from 'components'

import { useDispatch, useSelector } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'
import { fillCell, IReducer } from 'reducers'

interface IProps {
    value: NUMBERS
}

interface IState {
    selectedCell?: CELL_COORD 
    selectedValue: N
}

const NumberButton: FC<IProps> = ({ value }) => {

    const state = useSelector<IReducer, IState>(
        ({ selectedCell, workingGrid }) => ({
            selectedCell,
            selectedValue:
                workingGrid && selectedCell ? 
                    workingGrid[selectedCell[0]][selectedCell[1]]
                    : 0,
    }))

    const dispatch = useDispatch<Dispatch<AnyAction>>()

    const fill = useCallback(() => {
        if (state.selectedCell && state.selectedValue === 0)
            dispatch(fillCell(value, state.selectedCell))
    }, [dispatch, value, state.selectedCell, state.selectedValue])
    
    return (
        <Button onClick={fill}> {value} </Button>
    )
}

export default NumberButton