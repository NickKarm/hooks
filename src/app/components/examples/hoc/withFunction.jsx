import React, { useState, useEffect } from "react";
import Card from "../../common/Card";

const withFunction = (Component) => (props) => {
    const [isAuth, SetIsAuth] = useState(localStorage.getItem("auth"));

    const onLogin = () => {
        SetIsAuth(localStorage.setItem("auth", "Ник"));
    };
    useEffect(() => {
        SetIsAuth(localStorage.getItem("auth"));
    }, [isAuth]);

    const onLogOut = () => {
        SetIsAuth(localStorage.removeItem("auth"));
    };

    return (
        <Card>
            {isAuth !== "undefined" && (
                <Component
                    {...props}
                    isAuth={isAuth}
                    onLogin={onLogin}
                    onLogOut={onLogOut}
                />
            )}
        </Card>
    );
};

export default withFunction;
