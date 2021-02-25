import React, { FC,  useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Action, Dispatch } from 'redux'

import { Button } from 'components'
import { createGrid } from 'reducers'

const NewgameButton: FC = () => {

    const dispatch = useDispatch<Dispatch<Action>>()

    const createNewGrid = useCallback(
        () => {
            if(window.confirm('Are you sure you want to start a new game?'))
                dispatch(createGrid())
        },
        [dispatch])

    return <Button onClick={createNewGrid}>  New game </Button>

}

export default NewgameButton