import styled from "styled-components";

export const HitoryContainer = styled.main`
   flex: 1;

    display: flex;              
    flex-direction: column;
    padding: 1.5rem;

    h1 {
        font-size: 1.5rem;
        color: ${(props) => props.theme['gray-100']};
    }
`;

export const HitoryList = styled.div`
    flex: 1;
    overflow: auto;
    margin-top: 2rem;

    table {
        width: 100%;
        border-collapse: collapse;
        min-width: 600px;

        th {
            background-color: ${(props) => props.theme['gray-600']};
            gap: 0.5rem;
            font-weight: 700;
            padding: 1rem;
            text-align: left;
            color: ${(props) => props.theme['gray-100']};
            font-size: 0.875rem;
            line-height: 1.6;
         

            svg {
                color: ${(props) => props.theme['blue-500']};
            }

            &:first-child {
                border-top-left-radius: 8px;
                padding-left: 1.5rem;
                
                align-items: center;    
            }

            &:last-child {
                border-top-right-radius: 8px;
                padding-right: 1.5rem;
                
                align-items: center;
            }

        }

        td {
            background-color: ${(props) => props.theme['gray-700']};
            border-top: 4px solid ${(props) => props.theme['gray-800']};
            padding: 1rem;
            text-align: left;
            font-size: 0.875rem;
            line-height: 1.6;
            width: 100%;

            &:first-child {
                width: 50%;
                padding-left: 1.5rem;
            }
                
            &:last-child {
                padding-right: 1.5rem;
            }
        }
    }
`;

const STATUS_COLORS = {
    yellow: 'yellow-500',
    green: 'green-500',
    red: 'red-500',
} as const;

interface StatusProps {
    statusColor: keyof typeof STATUS_COLORS; 
}


export const Status = styled.span<StatusProps>`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before {
        content: '';
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 9999px;
        background-color: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
    }

`;


