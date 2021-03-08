import React, { useEffect, useState } from 'react';

function useShowPassword(initialValue = false) {

    const [mustShowPassword, setMustShowPassword] = useState(initialValue);
    const [passwordInputType, setPasswordInputType] = useState("password");

    useEffect(() => {
        setPasswordInputType(mustShowPassword ? "text" : "password");
    }, [mustShowPassword]);

    const handleShowPassword = e => setMustShowPassword(!mustShowPassword);

    return { passwordInputType, handleShowPassword };
}

export { useShowPassword };