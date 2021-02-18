import React, { FC } from 'react'
import { Container } from './styles'

interface IProps {
    rowIndex: number
    colIndex: number
}

const Block: FC<IProps> = ({ rowIndex, colIndex}) => {
    return(
        <Container data-cy={`block-${rowIndex}-${colIndex}`}> 
            {/* | {rowIndex} 
            {colIndex} | */}
        </Container>
    )
}

export default Block