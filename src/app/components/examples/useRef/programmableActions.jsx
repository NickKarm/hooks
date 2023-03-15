import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const ProgrammableActionsExample = () => {
    const inputRef = useRef();
    const handleClick = () => {
        console.log(inputRef.current);
        inputRef.current.focus();
    };
    const handleWidth = () => {
        inputRef.current.style.width = "100px";
    };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider></Divider>
            <div className="mb-2">
                <label htmlFor="email" className="form-label">
                    Email
                </label>
                <input
                    ref={inputRef}
                    type="email"
                    className="form-control"
                    id="email"
                />
                <button className="btn btn-primary" onClick={handleClick}>
                    Кнопка
                </button>
                <button className="btn btn-secondary" onClick={handleWidth}>
                    Изменить ширину
                </button>
            </div>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
