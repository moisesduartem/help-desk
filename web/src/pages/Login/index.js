import React from 'react';
import { Button, Checkbox, Column, Input } from '../../styles';
import { AppName, FormControl, PageContainer } from './styles';

function Login(props) {
    return (
        <PageContainer>
            <Column>
                <AppName>App Help Desk</AppName>
                <form>
                    <label>Email</label>
                    <Input type="email" name="email" required />
                    <label>Senha</label>
                    <Input type={"password"} name="password" required />
                    <FormControl>
                        <Checkbox id="showPassword" />
                        <label>Mostrar senha?</label>
                    </FormControl>
                    <Button>Entrar</Button>
                </form>
                <a href="#">Esqueceu sua senha?</a>
            </Column>
        </PageContainer>
    );
}

export default Login;