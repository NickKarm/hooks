import React from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const withPropsStyles = (Component) => (props) => {
    const isLogin = localStorage.getItem("auth");

    return (
        <CardWrapper>
            <Component {...props} name="new Name" />
        </CardWrapper>
    );
};

export default withPropsStyles;
