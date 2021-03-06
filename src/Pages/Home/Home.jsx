import React from "react";
import { Link } from "react-router-dom";

import Img from "../../Images/fotohome.png";
import { DivHome } from "./Home.styles";

const Home = () => {
    return (
        <DivHome>
            <div>
                <Link to="/transactions">
                </Link>
            </div>
            <Link to="/transactions">
                <img id="image" src={Img} alt="home para divulgação da marca, Warren." />
            </Link>
        </DivHome>
    )
}

export default Home;