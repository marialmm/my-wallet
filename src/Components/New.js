import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

function New() {
    const { type } = useParams();
    const [newEntry, setNewEntry] = useState({
        value: "",
        description: "",
        type: type,
    });

    const navigate = useNavigate();

    let type_ptbr;

    if (type === "income") {
        type_ptbr = "Entrada";
    } else if (type === "expense") {
        type_ptbr = "Saída";
    }

    function sendInputData(e) {
        e.preventDefault();
        console.log(newEntry);
        navigate("/home");
    }

    return (
        <Main>
            <h1>Nova {type_ptbr}</h1>
            <form onSubmit={(e) => sendInputData(e)}>
                <input
                    type="number"
                    placeholder="Valor"
                    value={newEntry.value}
                    onChange={(e) =>
                        setNewEntry({ ...newEntry, value: e.target.value })
                    }
                    required
                />
                <input
                    type="text"
                    placeholder="Descrição"
                    value={newEntry.description}
                    onChange={(e) =>
                        setNewEntry({
                            ...newEntry,
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
    }
`;

export default New;
