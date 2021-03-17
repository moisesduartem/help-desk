import styled from "styled-components";

export const List = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    a {
        text-align: center;
        font-weight: 500;
        padding: 1.4rem;
        margin-bottom: 1rem;
        border-radius: 4px;
        border: 1px solid var(--gray);
        background: var(--white);
        width: 90%;
        list-style: none;
        cursor: pointer;
        text-decoration: none;
        color: var(--lighter-info);
        transition: all .3s ease-in-out;

        display: flex;
        justify-content: space-between;
    }

    a svg {
        color: var(--gray);
    }

    a:hover svg {
        color: var(--darker-info);
        transition: all .3s ease-in-out;
    }

    a:hover svg {
        color: var(--lighter-info);
    }

    @media (min-width: 768px) {
        a {
            width: 480px;
        }
    }
`;