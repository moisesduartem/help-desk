import styled from "styled-components";

export const PageContainer = styled.div`
    background-color: var(--light);
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        margin: 1rem 0;
        color: var(--primary);
    }

    form {

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1.7rem;
        margin: 4px;
        height: 16rem;
        background-color: var(--dark);
        border-radius: 6px;
        width: 18rem;

        input:not([type=checkbox]) {
            width: 96%;
        }

        label {
            color: var(--light);
            font-weight: 300;
            text-align: left;
            margin: 10px auto;
            width: 100%;
        }
    }
`;

export const FormControl = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    padding: 10px 0px;
    font-size: 0.8rem;
`;

export const AppName = styled.h3`
    margin: 2rem 0;
    width: 70%;
    text-align: center;
`;