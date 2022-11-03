import styled from 'styled-components';

export const Section = styled.section`
    width: 400px;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 10px;
    border-bottom: 10px solid #1886e0;
    margin-top: 15px;

    @media (max-width: 430px) {
        width: 300px;
    }
`;