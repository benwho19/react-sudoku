import React, { FC, Children, useEffect, useCallback } from 'react'
import { Container, Row } from './styles'
import Block from './block'
import { useDispatch, useSelector } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'
import { createGrid, fillCell, IReducer, selectCell } from 'reducers'
import { INDEX, CELL_COORD, NUMBERS, N, GRID } from 'typings'
import useMousetrap  from 'react-hook-mousetrap'


interface IState {
    selectedCell ?: CELL_COORD
    selectedValue: N
    solvedGrid?: GRID
}

const Grid: FC = () => {

    const state = useSelector<IReducer, IState>(
        ({selectedCell, workingGrid, solvedGrid }) => ({ 
        selectedCell,
        selectedValue: 
            workingGrid && selectedCell ? workingGrid[selectedCell[0]][selectedCell[1]] : 0,
        solvedGrid,
    }))
    const dispatch = useDispatch<Dispatch<AnyAction>>()
    const create = useCallback(() => dispatch(createGrid()), [dispatch])

    const fill = useCallback(
        (n: NUMBERS) => {
            if (state.selectedCell && state.selectedValue === 0) {
                dispatch(fillCell(n, state.selectedCell))
            }

        }, [dispatch, state.selectedCell, state.selectedValue]
    )

    
    useEffect(() => {
        if (!state.solvedGrid) create()
    }, [create, state.solvedGrid])

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

    useMousetrap('1', () => fill(1))
    useMousetrap('2', () => fill(2))
    useMousetrap('3', () => fill(3))
    useMousetrap('4', () => fill(4))
    useMousetrap('5', () => fill(5))
    useMousetrap('6', () => fill(6))
    useMousetrap('7', () => fill(7))
    useMousetrap('8', () => fill(8))
    useMousetrap('9', () => fill(9))

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