import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/auth';
import { useShowPassword } from '../../hooks/useShowPassword';
import { Button, Checkbox, Column, Input } from '../../styles';
import { AppName, FormControl, PageContainer } from './styles';

function Login(props) {

    const initialCheckboxValue = false;

    const { passwordInputType, handleShowPassword } = useShowPassword(initialCheckboxValue);

    const [form, setForm] = useState({ email: '', password: '' });

    const handleInputChange = e => setForm(prevState => ({ ...prevState, [e.target.name]: e.target.value }));

    const { signIn } = useAuth();

    function handleLogin(e) {
        e.preventDefault();
        signIn(form?.email, form?.password);
    }

    return (
        <PageContainer>
            <Column>
                <AppName>App Help Desk</AppName>
                <form onSubmit={handleLogin}>
                    <label>Email</label>
                    <Input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
                        required
                    />
                    <label>Senha</label>
                    <Input
                        type={passwordInputType}
                        name="password"
                        value={form.password}
                        onChange={handleInputChange}
                        required
                    />
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