import React from "react";
import Div from "./PreLoader.styles";
import logo from "../../Images/usericon.png";

export const PreLoader = () => {
    return (
        <Div>
            <img src={logo} alt="logo"></img>

            <div className="lds-facebook">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </Div>
    );
};