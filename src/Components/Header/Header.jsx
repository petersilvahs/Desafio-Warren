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

            <div className="divB">
                <Link to="Home">
                    <button>Home</button>
                </Link>

                <Link to="/transactions">
                    <button>Transações</button>
                </Link>
            </div>
        </DivHeader>
    )
}

export default Header;