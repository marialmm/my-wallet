import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Transaction({ transaction, requestTransactions }) {
    const token = localStorage.getItem("token");
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };
    const navigate = useNavigate();

    function deleteTransaction() {
        const confirm = window.confirm(
            `Deseja mesmo apagar a transação ${transaction.description}?`
        );
        if (confirm) {
            const promise = axios.delete(
                `http://localhost:5000/transactions/${transaction.id}`,
                config
            );
            promise.then((res) => {
                requestTransactions();
            });
            promise.catch((err) => {
                console.log(
                    `${err.response.status} - ${err.response.statusText}`
                );
                alert("Um erro aconteceu, tente novamente");
                navigate("/home");
            });
        }
    }

    function editTransaction() {
        navigate(`/edit/${transaction.id}`);
    }

    return (
        <Container color={transaction.type}>
            <p>
                <span>{transaction.date}</span>{" "}
                <span onClick={editTransaction}>
                    {transaction.description}
                </span>
            </p>
            <p class="value">
                {transaction.value.toFixed(2)}{" "}
                <span onClick={deleteTransaction}>x</span>
            </p>
        </Container>
    );
}

const Container = styled.div`
    p span:first-child {
        color: var(--ligth-grey);
        margin-right: 5px;
    }
    p.value {
        color: var(--${(props) => props.color});
    }

    p.value span {
        margin-left: 11px;
    }
`;

export default Transaction;
