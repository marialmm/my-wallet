import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import styled from "styled-components";

import UserContext from "../Assets/context/userContext";

function EditTransaction() {
    const navigate = useNavigate();

    const token = localStorage.getItem("token");
    const { idTransaction } = useParams();
    const { user } = useContext(UserContext);

    const transaction = user.transactions.filter(
        (transaction) => transaction.id === idTransaction
    );
    const [editedTransaction, setEditedTransaction] = useState({
        id: transaction[0].id,
        description: transaction[0].description,
        value: transaction[0].value,
        type: transaction[0].type,
    });

    let type_ptbr;

    if (transaction[0].type === "income") {
        type_ptbr = "Entrada";
    } else if (transaction[0].type === "expense") {
        type_ptbr = "Saída";
    }

    function sendInputData(e) {
        e.preventDefault();
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };
        const promise = axios.put(
            `http://localhost:5000/transactions/${idTransaction}`,
            editedTransaction,
            config
        );
        promise.then((res) => {
            navigate("/home");
        });
        promise.catch((err) => {
            console.log(`${err.response.status} - ${err.response.statusText}`);
            alert("Um erro aconteceu, tente novamente");
            navigate("/home");
        });
    }

    return (
        <Main>
            <h1>Editar {type_ptbr}</h1>
            <form onSubmit={(e) => sendInputData(e)}>
                <input
                    type="number"
                    placeholder="Valor"
                    value={editedTransaction.value}
                    onChange={(e) =>
                        setEditedTransaction({
                            ...editedTransaction,
                            value: parseInt(e.target.value),
                        })
                    }
                    required
                />
                <input
                    type="text"
                    placeholder="Descrição"
                    value={editedTransaction.description}
                    onChange={(e) =>
                        setEditedTransaction({
                            ...editedTransaction,
                            description: e.target.value,
                        })
                    }
                    required
                />
                <button type="submit">Atualizar {type_ptbr}</button>
            </form>
        </Main>
    );
}

const Main = styled.main`
    padding-top: 25px;

    form {
        margin-top: 40px;
        display: flex;
        flex-direction: column;
    }
`;

export default EditTransaction;
