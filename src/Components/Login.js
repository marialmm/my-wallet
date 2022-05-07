import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {
    const { user, setUser } = useState({
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
            <forms onSubmit={(e) => sendInputData(e)} >
                <input
                    type="eemail"
                    placeholder="E-mail"
                    value={user.email}
                    onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                    }
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={user.password}
                    onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                    }
                />
                <button type="submit">Entrar</button>
            </forms>

            <Link to="SingUp">Primeira Vez? Cadastre-se</Link>
        </Main>
    );
}

const Main = styled.main``;
export default Login;
