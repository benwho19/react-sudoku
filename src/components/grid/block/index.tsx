import React, { FC } from 'react'
import { Container } from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { Dispatch, AnyAction } from 'redux'
import { IReducer, selectCell } from 'reducers'
import { INDEX, N } from 'typings'

interface IProps {
    rowIndex: INDEX
    colIndex: INDEX
}

interface IState {
    value: N
    isActive: boolean
    isPuzzle: boolean
}

const Block: FC<IProps> = ({ rowIndex, colIndex}) => {

    const state = useSelector<IReducer, IState>(({ workingGrid, selectedCell, challengeGrid })=> ({
        value: workingGrid ? workingGrid[rowIndex][colIndex]: 0,
        isActive: selectedCell ? selectedCell[0] === rowIndex && 
                                selectedCell[1] === colIndex
                               : false,
        isPuzzle: challengeGrid && challengeGrid[rowIndex][colIndex] !== 0 ? true: false 
    }))

    const dispatch = useDispatch<Dispatch<AnyAction>>()

    function handleClick() {
        if (!state.isActive) dispatch(selectCell([rowIndex, colIndex]))
    }

    return(
        <Container active={state.isActive} 
                    data-cy={`block-${rowIndex}-${colIndex}`} 
                    onClick={handleClick}
                    puzzle={state.isPuzzle}
                    > 
            {/* | {rowIndex} 
            {colIndex} | */}
            {state.value === 0 ? '': state.value}
        </Container>
    )
}

export default Block