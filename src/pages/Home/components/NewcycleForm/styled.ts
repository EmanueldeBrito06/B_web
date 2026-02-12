import styled from 'styled-components';

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
    border-bottom: 1px solid ${(props) => props.theme['gray-500']};
    color: ${(props) => props.theme['gray-100']};
    font-weight: bold;
    font-size: 1.125rem;
    padding: 0.5rem;
    text-align: center;

    &::placeholder {
        color: ${(props) => props.theme['gray-500']};
    }
    
    &:focus {
        outline: none;
        box-shadow: none;
        -webkit-box-shadow: none;
    }     
`;

export const TaskInput = styled(InputBase)`
    flex: 1;

    &::-webkit-calendar-picker-indicator {
        display: none !important;
    }
`;

export const MinutesAmountInput = styled(InputBase)`
    width: 4rem;

`;