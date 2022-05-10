import axios from "axios";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import {
    RiLogoutBoxRLine,
    RiAddCircleLine,
    RiIndeterminateCircleLine,
} from "react-icons/ri";
import { useEffect, useContext, useState } from "react";

import UserContext from "./../Assets/context/userContext";
import Transaction from "./Transaction";

function Home() {
    const token = localStorage.getItem("token");
    const { user, setUser } = useContext(UserContext);
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };

    let total = 0;

    const navigate = useNavigate();
    
    if (user.transactions) {
        user.transactions.forEach((transaction) => {
            if (transaction.type === "income") {
                total += transaction.value;
            } else if (transaction.type === "expense") {
                total -= transaction.value;
            }
        });
    }

    useEffect(() => {
        const promise = axios.get("http://localhost:5000/transactions", config);
        promise.then((res) => {
            setUser(res.data);
        });
        promise.catch((err) => {
            console.log(`${err.response.status} - ${err.response.statusText}`);
            alert("Um erro aconteceu, tente novamente");
            navigate("/");
        });
    }, []);

    function logout(){
        const promise = axios.delete("http://localhost:5000/logout", config);
        promise.then(res =>{
            localStorage.removeItem("token");
            setUser({});
            navigate("/");
        });
        promise.catch((err) => {
            console.log(`${err.response.status} - ${err.response.statusText}`);
            alert("Um erro aconteceu, tente novamente");
            navigate("/");
        });
    }

    return user.name ? (
        <Main color={total > 0 ? "income" : "expense"}>
            <aside>
                <h1>Olá, {user.name}</h1>
                <RiLogoutBoxRLine onClick={logout} />
            </aside>
            {user.transactions.length > 0 ? (
                <section>
                    <div>
                        {user.transactions.map((transaction) => {
                            return <Transaction transaction={transaction} />
                        })}
                    </div>
                    <p>
                        SALDO <span>{total.toFixed(2)}</span>
                    </p>
                </section>
            ) : (
                <section class="empty">
                    <p>Não há registros de entrada ou saída</p>
                </section>
            )}

            <div>
                <Link to="/new/income">
                    <button>
                        <RiAddCircleLine />
                        <p>Nova entrada</p>
                    </button>
                </Link>
                <Link to="/new/expense">
                    <button>
                        <RiIndeterminateCircleLine />
                        <p>Nova saída</p>
                    </button>
                </Link>
            </div>
        </Main>
    ) : (
        <> </>
    );
}

const Main = styled.main`
    aside {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 78px;
    }

    aside svg {
        font-size: 25px;
        color: #FFFFFF;
    }

    section {
        margin-bottom: 13px;
        padding: 23px 12px;
        height: calc(100vh - 225px);
        background-color: #ffffff;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    section.empty {
        justify-content: center;
        align-items: center;
        padding: 0px 73px;
    }

    .empty p {
        font-size: 20px;
        line-height: 23px;
        color: var(--grey);
        text-align: center;
    }

    section > p {
        display: flex;
        justify-content: space-between;
        font-weight: 700;
    }

    section > p span {
        color: var(--${(props) => props.color});
        font-weight: 400;
    }

    section > div{
        flex-direction: column;
    }

    div {
        display: flex;
        justify-content: space-between;
        gap: 15px;
    }

    div > a {
        width: 100%;
    }

    div button {
        height: 114px;
        font-size: 17px;
        margin: 0;
        max-width: none;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        padding: 10px;
    }

    div button svg {
        font-size: 25px;
    }

    div button p {
        width: 64px;
        text-align: initial;
    }
`;

export default Home;
