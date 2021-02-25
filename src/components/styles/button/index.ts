import styled, { css } from 'styled-components'

export const Button = styled.button` 
    ${({ theme }) => css`
        
        color: ${theme.colors.white};
        background-color: ${theme.colors.black};
        border: 2px solid ${theme.colors.black};
        border-radius: 4px;
        margin: 4px 2px;

        align-items: center;
        justify-content: center;
        
        display: flex;
        flex: 1;
        font-size: 16px;
        font-weight: bold;
        height: 40px;
        min-height: 40px;
        opacity: 0.9;
        padding: 0;
        transition: ${theme.transition};
        &:focus {
            border-color: ${theme.colors.blue};
            outline: none;
        }
        &:hover {
            opacity: 0.6;
        }
        cursor: pointer;
        
    `}

`