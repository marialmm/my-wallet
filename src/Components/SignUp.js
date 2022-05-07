import axios from "axios";
import styled from "styled-components";
import {Link} from "react-router-dom";

function SignUp(){
    return(
        <Main>
            <h1>MyWallet</h1>
            <forms>
                <input type="text" placeholder="Nome" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Senha" />
                <input type="password" placeholder="Confirme a senha" />
                <button type="submit">Cadastrar</button>
            </forms>
            <Link to="/Login" />
        </Main>
    )
}

const Main = styled.main`
`

export default SignUp;