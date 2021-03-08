import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Column, Input } from '../../styles';
import { AppName, FormControl, PageContainer } from './styles';


function useShowPassword(initialValue = false) {
    
    const [mustShowPassword, setMustShowPassword] = useState(initialValue);
    const [passwordInputType, setPasswordInputType] = useState("password");

    useEffect(() => {
        setPasswordInputType(mustShowPassword ? "text" : "password");
    }, [mustShowPassword]);

    const handleShowPassword = e => setMustShowPassword(!mustShowPassword);

    return { passwordInputType, handleShowPassword };
}

function Login(props) {

    const initialCheckboxValue = false;
    const { passwordInputType, handleShowPassword } = useShowPassword(initialCheckboxValue);

    return (
        <PageContainer>
            <Column>
                <AppName>App Help Desk</AppName>
                <form>
                    <label>Email</label>
                    <Input type="email" name="email" required />
                    <label>Senha</label>
                    <Input type={passwordInputType} name="password" required />
                    <FormControl>
                        <Checkbox id="showPassword" defaultChecked={initialCheckboxValue} onChange={handleShowPassword} />
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