import axios from "axios";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {useState} from "react";

function SignUp(){
    const {user, setUser} = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    return(
        <Main>
            <h1>MyWallet</h1>
            <forms>
                <input type="text" placeholder="Nome" value={user.name} />
                <input type="email" placeholder="Email" value={user.email} />
                <input type="password" placeholder="Senha" value={user.password}  />
                <input type="password" placeholder="Confirme a senha" value={user.confirmPassword} />
                <button type="submit">Cadastrar</button>
            </forms>
            <Link to="/Login" />
        </Main>
    )
}

const Main = styled.main`
`

export default SignUp;