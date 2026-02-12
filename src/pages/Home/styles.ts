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




export const BaseButtonContainer = styled.button`
    width: 100%;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    
    color: ${(props) => props.theme.white};

    font-weight: bold;
    border-radius: 8px;
    border: none;
    cursor: pointer;

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

`;

export const StartButtonContainer = styled(BaseButtonContainer)`
background-color: ${(props) => props.theme['blue-500']};
  &:not(:disabled):hover {
        background-color: ${(props) => props.theme['blue-700']};
    }
`;

export const StopButtonContainer = styled(BaseButtonContainer)`
    background-color: ${(props) => props.theme['red-500']};

    &:not(:disabled):hover {
        background-color: ${(props) => props.theme['red-700']};
    }
`;