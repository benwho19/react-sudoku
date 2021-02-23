import React, { FC, Children, useEffect, useCallback } from 'react'

import { Container, Row } from './styles'
import Block from './block'
import { useDispatch, useSelector } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'
import { createGrid, IReducer, selectCell } from 'reducers'
import { INDEX, CELL_COORD } from 'typings'
import useMousetrap  from 'react-hook-mousetrap'


interface IState {
    selectedCell ?: CELL_COORD
}

const Grid: FC = () => {

    const state = useSelector<IReducer, IState>( ({ selectedCell }) => ({ selectedCell })  )
    const dispatch = useDispatch<Dispatch<AnyAction>>()
    const create = useCallback(() => dispatch(createGrid()), [dispatch])

    useEffect(() => {
        create()
    }, [create])

    function moveUp() {
        if (state.selectedCell && state.selectedCell[0] > 0) {
            dispatch(
                selectCell([
                    (state.selectedCell[0] - 1) as INDEX,
                    state.selectedCell[1]
                ])
            )
        }
    }

    function moveDown() {
        if (state.selectedCell && state.selectedCell[0] < 8) {
            dispatch(
                selectCell([
                    (state.selectedCell[0] + 1) as INDEX,
                    state.selectedCell[1]
                ])
            )
        }
    }

    function moveLeft() {
        if (state.selectedCell && state.selectedCell[1] > 0) {
            dispatch(
                selectCell([
                    state.selectedCell[0], 
                    (state.selectedCell[1] - 1) as INDEX
                ])
            )
        }
    }

    function moveRight() {
        if (state.selectedCell && state.selectedCell[1] < 8) {
            dispatch(
                selectCell([
                    state.selectedCell[0], 
                    (state.selectedCell[1] + 1) as INDEX
                ])
            )
        }
    }

    useMousetrap('up', moveUp)
    useMousetrap('down', moveDown)
    useMousetrap('left', moveLeft)
    useMousetrap('right', moveRight)

    return(
        <Container data-cy="grid-container">
            {Children.toArray(
                [...Array(9)].map((_, rowIndex) => (
                    <Row data-cy="grid-row-container">
                        {Children.toArray(
                            [...Array(9)].map((_, colIndex) =>
                            <Block 
                                rowIndex={rowIndex as INDEX} 
                                colIndex={colIndex as INDEX}
                            />
                        ))}
                    </Row>
                ))
            )}
        </Container>
    )
}

export default Grid