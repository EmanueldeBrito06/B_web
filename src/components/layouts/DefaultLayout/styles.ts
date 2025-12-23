import styled from "styled-components";

export const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 76rem;
    height: calc(100vh - 10rem);
    margin: 3rem auto 0 auto;

    padding: 1.5rem;
    background: linear-gradient(to bottom, ${(props) => props.theme["gray-800"]} 0%, ${(props) => props.theme["gray-900"]} 100%);
    border-radius: 8px; 
 
`;