import React, { useContext, useState } from "react";
import { GlobalContext } from "../../Global/Global";

import Modal from "../Modal/Modal.styles";
import DataCont from "./Data.styles";

import moment from "moment";
import "moment/locale/pt-br";


const Data = () => {
    const [selected, setSelected] = useState({});

    const global = useContext(GlobalContext);

    const handleClick = (transaction) => {
        setSelected(transaction);
    };

    const handle = (str) => {
        if (typeof str !== "string") {
            return "";
        }
        return str.charAt(0).toUpperCase() + str.substr(1);
    };

    const filteredTitle = global.answer.filter((value) => {
        if (global.searchTime === "") {
            return value;
        } else if (
            value.title.toLowerCase().includes(global.searchTime.toLowerCase())
        ) {
            return value;
        } else {
            return null;
        }
    });

    const filteredStatus = global.answer.filter((value) => {
        if (global.preferences === "") {
            return value;
        } else if (value.status.includes(global.preferences)) {
            return value;
        } else {
            return null;
        }
    });

    const formatingCoin = (numero) => {
        numero = numero.toFixed(2).split(".");
        numero[0] = "R$ " + numero[0].split(/(?=(?:...)*$)/).join(".");
        return numero.join(",");
    };

    return (
        <DataCont>
            <table className="table table-responsive">
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Descrição</th>
                        <th>Status</th>
                        <th>Valor</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {global.searchTime !== ""
                        ? filteredTitle.map((transaction) => (
                            <tr
                                key={transaction.id}
                                onClick={() => {
                                    handleClick(transaction);
                                    global.handleModal();
                                }}
                            >
                                <td>{transaction.title}</td>
                                <td>{handle(transaction.description)}</td>
                                <td>{handle(transaction.status)}</td>
                                <td>{formatingCoin(transaction.amount)}</td>
                                <td>{moment(transaction.date).format("L")}</td>
                            </tr>
                        ))
                        : filteredStatus.map((transaction) => (
                            <tr
                                key={transaction.id}
                                onClick={() => {
                                    handleClick(transaction);
                                    global.handleModal();
                                }}
                            >
                                <td>{transaction.title}</td>
                                <td>{handle(transaction.description)}</td>
                                <td>{handle(transaction.status)}</td>
                                <td>{formatingCoin(transaction.amount)}</td>
                                <td>{moment(transaction.date).format("L")}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
            {global.modalAnswer ? (
                <Modal
                    dataFrom={selected.from}
                    dataTo={selected.to}
                    dataStatus={selected.status}
                    dataTitle={selected.title}
                />
            ) : null}
        </DataCont>
    );
};

export default Data;