import React, { useContext } from "react";
import { IconContext } from "react-icons/lib";
import { RiCloseCircleLine } from "react-icons/ri";

import Container from "../Modal/Modal.styles";
import ProgressBar from "../PreLoader/PreLoader";
import  GlobalContext  from "../../Global/Global";

export const Modal = ({ dataFrom, dataGoing, dataStatus, dataTitle }) => {
    const global = useContext(GlobalContext);

    const handleOutsideClick = (e) => {
        if (e.target.id === "modal") {
            return global.onclose();
        }
    };
    return (
        <Container id="modal" onClick={handleOutsideClick}>
            <div className="container">
                <div className="button">
                    <h1> {dataTitle} </h1>
                    <button onClick={() => global.handleModal()}>
                        <IconContext.Provider value={{ size: "1.5rem" }}>
                            <RiCloseCircleLine />
                        </IconContext.Provider>
                    </button>
                </div>
                {dataStatus === "processing" ? (
                    <ProgressBar done="50%" />
                ) : dataStatus === "created" ? (
                    <ProgressBar done="10%" />
                ) : (
                    <ProgressBar done="100%" />
                )}

                <div>
                    <h2>Transferindo do</h2>
                    <hr />
                    <p>{dataFrom}</p>
                    <h2>Para</h2>
                    <hr />
                    <p>{dataGoing}</p>
                </div>
            </div>
        </Container>
    );
};