import styled from "styled-components";

export const HomeContainer = styled.div`
    flex: 1;

    display: flex;              
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 20px;

    form {   
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3.5rem;
    }

`;

export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme['gray-100']};
    font-size: 1.125rem;
    font-weight: bold;
`;

export const InputBase = styled.input`
    background: transparent;
    border: none;
    border-bottom: 2px solid ${(props) => props.theme['gray-500']};
    color: ${(props) => props.theme['gray-100']};
    font-weight: bold;
    font-size: 1.125rem;
    padding: 0.5rem;
    text-align: center;

    &::placeholder {
        color: ${(props) => props.theme['gray-500']};
    }
     
`;

export const taskInput = styled(InputBase)`
    flex: 1;
    border: none;

`;
export const minutesAmountInput = styled(InputBase)`

`;


export const CountdownContainer = styled.div`
    font-family: 'Roboto Mono', monospace;
    font-size: 10rem;
    line-height: 8rem;
    color: ${(props) => props.theme['gray-100']};

    display: flex;
    gap: 1rem;

    span {
        background: ${(props) => props.theme['gray-700']};
        padding: 2rem 1rem;         
        border-radius: 8px;
    }
`;  

export const Separator = styled.div`
    padding: 2rem 0;
    color: ${(props) => props.theme['blue-500']};

    width: 4rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
`;

export const ButtonContainer = styled.button`
    width: 100%;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    background-color: ${(props) => props.theme['blue-500']};
    color: ${(props) => props.theme.white};
    font-weight: bold;
    border-radius: 8px;
    border: none;
    cursor: pointer;

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

    &:not(:disabled):hover {
        background-color: ${(props) => props.theme['blue-700']};
    }
`;