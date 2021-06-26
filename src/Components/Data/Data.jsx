import React, { useContext, useState } from "react";

import { Modal } from "../Modal/Modal.styles";
import Container from "./Data.styles";

import moment from "moment";
import "moment/locale/pt-br";

import { GlobalContext } from "../../Global/Global";

const MainContent = () => {
    const [selectedTransaction, setSelectedTransaction] = useState({});

    const global = useContext(GlobalContext);

    const handleClick = (transaction) => {
        setSelectedTransaction(transaction);
    };

    const capitalize = (str) => {
        if (typeof str !== "string") {
            return "";
        }
        return str.charAt(0).toUpperCase() + str.substr(1);
    };

    const filteredTitle = global.result.filter((value) => {
        if (global.searchTerm === "") {
            return value;
        } else if (
            value.title.toLowerCase().includes(global.searchTerm.toLowerCase())
        ) {
            return value;
        } else {
            return null;
        }
    });

    const filteredStatus = global.result.filter((value) => {
        if (global.option === "") {
            return value;
        } else if (value.status.includes(global.option)) {
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
        <Container>
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
                    {global.searchTerm !== ""
                        ? filteredTitle.map((transaction) => (
                            <tr
                                key={transaction.id}
                                onClick={() => {
                                    handleClick(transaction);
                                    global.handleModal();
                                }}
                            >
                                <td>{transaction.title}</td>
                                <td>{capitalize(transaction.description)}</td>
                                <td>{capitalize(transaction.status)}</td>
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
                                <td>{capitalize(transaction.description)}</td>
                                <td>{capitalize(transaction.status)}</td>
                                <td>{formatingCoin(transaction.amount)}</td>
                                <td>{moment(transaction.date).format("L")}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
            {global.isModalVisible ? (
                <Modal
                    dataFrom={selectedTransaction.from}
                    dataTo={selectedTransaction.to}
                    dataStatus={selectedTransaction.status}
                    dataTitle={selectedTransaction.title}
                />
            ) : null}
        </Container>
    );
};

export default MainContent;