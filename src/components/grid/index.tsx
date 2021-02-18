import React, { FC, Children } from 'react'

import { Container, Row } from './styles'
import Block from './block'

const Grid: FC = () => {
    // other stuff on the way

    return(
        <Container data-cy="grid-container">
            {Children.toArray(
                [...Array(9)].map((_, rowIndex) => (
                    <Row data-cy="grid-row-container">
                        {Children.toArray(
                            [...Array(9)].map((_, colIndex) =>
                            <Block rowIndex={rowIndex} colIndex={colIndex}/>
                        ))}
                    </Row>
                ))
            )}
        </Container>
    )
}

export default Grid