import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../Images/warrenIcon.png"
import { DivHeader } from "./Header.styles"

const Header = () => {
    return (
        <DivHeader>
            <Link to="/">
                <img src={Logo} alt="Icone Warren na header"></img>
            </Link>

            <div>
                <Link to="Home">
                    <p>Home</p>
                </Link>

                <Link to="/transactions">
                    <p>Transações</p>
                </Link>
            </div>
        </DivHeader>
    )
}

export default Header;