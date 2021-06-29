import React, { useEffect, useState } from "react";
import Section from "./ProgressBar.styles";

const ProgressBar = ({ done }) => {
    const [style, setStyle] = useState({});

    useEffect(() => {
        setTimeout(() => {
            const newStyle = {
                opacity: 1,
                width: `${done}`,
            };

            setStyle(newStyle);
        }, 500);
    }, [done]);

    return (
        <Section>
            <div className="progress">
                <div className="progress-done" style={style}>
                    <p>{done}</p>
                </div>
            </div>
            <div className="statusText">
                <h4 className="statusP">Solicitada</h4>
                <h4 className="statusP">Processando</h4>
                <h4 className="statusP">Concluída</h4>
            </div>
        </Section>
    );
};
export default ProgressBar;
