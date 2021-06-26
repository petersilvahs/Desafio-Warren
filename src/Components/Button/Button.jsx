import React from "react";

import DivButton from "./Button.styles";

const Button = ({ contents }) => {
    return (
        <DivButton>
            <button>{contents}</button>
        </DivButton>
    );
};

export default Button;