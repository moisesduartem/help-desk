import styled from "styled-components";

export const Container = styled.header`
    position: fixed;
    top:0;
    left: 0;
    background-color: var(--lighter-info);
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px 0px;
    align-items: center;
    font-size: 0.8rem;

    * {
        color: var(--light);
    }

    a {
        font-weight: 500;
        font-size: 0.9rem;
        text-decoration: none;
    }

    span:first-child {
        padding-left: 1.2rem;
    }

    @media (max-width: 425px) {
        span:first-child {
            display: none;
        }

        a {
            padding-left: 1.2rem;
        }
    }

    a:last-child {
        font-weight: 300;
        color: var(--gray);
        cursor: pointer;
        padding-right: 1.2rem;
    }
`;