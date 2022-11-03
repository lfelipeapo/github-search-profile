import styled from 'styled-components';

export const Section = styled.section`
    width: 400px;
    height: 400px;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 10px;
    border-bottom: 10px solid #1e88e5;
    margin-top: 15px;

    @media (max-width: 430px) {
        width: 300px;
    }
`;
export const FiltersContainer = styled.div`
    padding: 10px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Filters = styled.select`
    --select-border: #777;
    --select-focus: blue;
    --select-arrow: var(--select-border);
    select::-ms-expand {
        display: none;
    }
    width: 100%;
    min-width: 15ch;
    margin: 6px 10px;
    border: 1px solid var(--select-border);
    border-radius: 0.25em;
    padding: 0.25em 0.5em;
    font-size: 1rem;
    cursor: pointer;
    line-height: 1.1;
    background-color: #fff;
    background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
    cursor: inherit;
    line-height: inherit;
    option: {
        width: 100%;
        height: auto;
    }
`;

export const InputContainer = styled.div`
    padding: 10px 16px;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
        width: 30px;
        height: 30px;
        border-radius: 15px;
        border: none;
        background: #1e88e5;
        margin-left: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        transition: ease 0.3s;

        &:hover {
            transform: scale(1.05);
            transition: ease 0.3s;
            cursor: pointer;
        }
    }
`;

export const Input = styled.input`
    width: 200px;
    height: 30px;
    border-radius: 15px;
    border: none;
    padding: 0 16px;
    color: #444;
    transition: 0.4s ease;

    &:focus {
        outline: none;
        width: 220px;
        transition: 0.4s ease;
    }
`;

export const SearchButton = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 15px;
    border: none;
    background: #1e88e5;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    transition: ease 0.3s;

    &:hover {
        transform: scale(1.05);
        transition: ease 0.3s;
        cursor: pointer;
    }
`;
export const ClearFiltersButton = styled.button`
    width: 90px;
    height: 35px;
    border-radius: 5px;
    border: none;
    background: #1e88e5;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    transition: ease 0.3s;

    &:hover {
        transform: scale(1.05);
        transition: ease 0.3s;
        cursor: pointer;
    }
`;

export const Title = styled.h1`
    font-size: 20px;
    font-weight: 700;
    margin-top: 10px;
    color: #444;
    width: 100%;
    text-align: center;
    height: 30px;
`

export const ListOfFollowingsContainer = styled.h1`
    height: 350px;
    width: 100%;
    padding: 10px;
    overflow-y: scroll;
`


export const Following = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    height: 100px;
    column-gap: 15px;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    div:nth-of-type(2) {
        display: flex;
        flex-direction: column;
        width: 80%;
        height: auto;
    }
     div {
        width: fit-content;
        height: 60px;
    }

    img {
        width: 60px;
        height: 60px;
    }

    h2 {
        flex: 4;
        height: 100%;
        width: 100%;
        font-size: 15px;
        overflow: hidden;
        color: #444;
        margin-bottom: 5px;
    }

    p {
        flex: 5;
        font-size: 12px;
        font-weight: 400;
        color: #777;
        width: 100%;
        height: 10px;
        overflow: hidden;
        line-height: 1.3;
        margin-top: 10px;
    }
`;