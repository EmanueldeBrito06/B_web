import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100%;    
    height: 4rem;           

    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        height: 3.5rem;
    }
    
    nav {
        display: flex;
        gap: 0.5rem;
        
        a {
            width: 3rem;
            height: 3rem;

            display: flex;
            align-items: center;
            justify-content: center;

            border-top-right-radius: 8px;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;

            color: ${(props) => props.theme['gray-100']};
            background-color: ${(props) => props.theme['gray-600']};

            transition: background-color 0.2s;
            
            &:hover {
                background-color: ${(props) => props.theme['blue-500']};
            }

            &.active {
                color: ${(props) => props.theme.white};
                background-color: ${(props) => props.theme['blue-700']};
            }
        }
    }

`;


   
