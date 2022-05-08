import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {
    const [ user, setUser ] = useState({
        email: "",
        password: "",
    });

    function sendInputData(e){
        e.preventDefault();
        console.log(user);
    }

    return (
        <Main>
            <h1>MyWallet</h1>
            <form
            onSubmit={(e) => sendInputData(e)}
            >
                <input
                    type="email"
                    placeholder="E-mail"
                    value={user.email}
                    onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                    }
                    required
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={user.password}
                    onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                    }
                    required
                />
                <button type="submit">Entrar</button>
            </form>

            <Link to="SingUp">Primeira Vez? Cadastre-se</Link>
        </Main>
    );
}

const Main = styled.main`
    padding: 0px 25px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-family: "Saira Stencil One", cursive;
        color: #ffffff;
        font-size: 32px;
        line-height: 50px;
        margin: 160px 0px 24px;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    button {
        background-color: var(--ligth-purple);
        border: none;
        width: 100%;
        height: 46px;
        color: #ffffff;
        font-weight: 700;
        font-size: 20px;
        margin-bottom: 36px;
    }
`;
export default Login;
