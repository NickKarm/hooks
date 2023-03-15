import { array } from "prop-types";
import React, { useEffect, useState } from "react";
import CollapseWrapper from "../common/collapse";
const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <Component>
                <div className="mt-1">Компонент списка</div>
                <div>Компонент списка</div>
            </Component>
        </CollapseWrapper>
    );
};

const Component = ({ children }) => {
    return React.Children.map(children, (child) => {
        const idx = (children.indexOf(child) + 1).toString() + " ";
        const config = {
            ...child.props,
            children: idx + child.props.children
        };
        console.log(child.props, "config", config);
        return React.cloneElement(child, config);
    });
};

export default ChildrenExercise;
