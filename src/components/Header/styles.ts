import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100%;    
    height: 5rem;           

    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
    display: flex;
    width: 3rem;
    height: 2rem;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;    
    
    a {
        color: ${(props) => props.theme["gray-300"]};
        transition: color 0.2s; 
        &:hover {
            color: ${(props) => props.theme["gray-100"]};
        }
    }
`;  

