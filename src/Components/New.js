import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

function New() {
    const { type } = useParams();
    const [newTransaction, setNewTransaction] = useState({
        value: "",
        description: "",
        type: type,
    });

    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    let type_ptbr;

    if (type === "income") {
        type_ptbr = "Entrada";
    } else if (type === "expense") {
        type_ptbr = "Saída";
    }

    function sendInputData(e) {
        e.preventDefault();
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };
        const promise = axios.post("http://localhost:5000/transactions", newTransaction, config);
        promise.then((res) => {
            navigate("/home");
            console.log(newTransaction);
        });
        promise.catch((err) => {
            console.log(`${err.response.status} - ${err.response.statusText}`);
            alert("Um erro aconteceu, tente novamente");
            navigate("/");
        });
    }

    return (
        <Main>
            <h1>Nova {type_ptbr}</h1>
            <form onSubmit={(e) => sendInputData(e)}>
                <input
                    type="number"
                    placeholder="Valor"
                    value={newTransaction.value}
                    onChange={(e) =>
                        setNewTransaction({ ...newTransaction, value: parseInt(e.target.value) })
                    }
                    required
                />
                <input
                    type="text"
                    placeholder="Descrição"
                    value={newTransaction.description}
                    onChange={(e) =>
                        setNewTransaction({
                            ...newTransaction,
                            description: e.target.value,
                        })
                    }
                    required
                />
                <button type="submit">Salvar {type_ptbr}</button>
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

export default New;
