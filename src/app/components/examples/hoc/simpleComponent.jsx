import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ isAuth, onLogin, onLogOut }) => {
    return (
        <>
            {!isAuth ? (
                <button className="btn btn-primary me-2" onClick={onLogin}>
                    Войти
                </button>
            ) : (
                <button className="btn btn-primary me-2" onClick={onLogOut}>
                    Выйти из системы
                </button>
            )}
        </>
    );
};
SimpleComponent.propTypes = {
    isAuth: PropTypes.string,
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func
};
export default SimpleComponent;
