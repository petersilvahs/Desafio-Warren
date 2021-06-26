import React, { createContext, useEffect, useState } from "react";
import axios from "axios";


export const GlobalContext = createContext();
export const Global = ({ children }) => {
    const [answer, setAnswer] = useState([]);
    const [modalAnswer, setModalAnswer] = useState(false);
    const [searchTime, setSearchTime] = useState("");
    const [preferences, setPreferences] = useState("");

    useEffect(() => {
        axios
            .get("https://warren-transactions-api.herokuapp.com/api/transactions")
            .then((response) => setAnswer(response.data));
    }, []);

    const handleModal = () => {
        setModalAnswer(!modalAnswer);
    };

    const onclose = () => {
        setModalAnswer(false);
    };

    return (
        <GlobalContext.Provider
            value={{
                answer,
                modalAnswer,
                setModalAnswer,
                handleModal,
                onclose,
                searchTime,
                setSearchTime,
                preferences,
                setPreferences,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default Global;