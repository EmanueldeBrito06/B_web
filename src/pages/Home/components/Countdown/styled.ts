import styled from 'styled-components';


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
        border: 2px solid ${(props) => props.theme['gray-700']};
        font-weight: bold;
        
    }
`;

/* Separator Styles */
export const Separator = styled.div`
    padding: 2rem 0;
    color: ${(props) => props.theme['blue-500']};

    width: 4rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
`;