import axios from "axios";
import styled from "styled-components";
import {Link} from "react-router-dom";

function Login() {
    return (
        <Main>
            <h1>MyWallet</h1>
            <forms>
                <input type="eemail" placeholder="E-mail" />
                <input type="password" placeholder="Senha" />
                <button type="submit">Entrar</button>
            </forms>

            <Link to="SingUp">Primeira Vez? Cadastre-se</Link>
        </Main>
    );
}

const Main = styled.main``;
export default Login;
