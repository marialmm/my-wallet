import axios from "axios";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function SignUp() {
    const [ user, setUser ] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const navigate = useNavigate();

    function sendUser(e){
        console.log("Enviando")
        e.preventDefault();
        if(user.password !== user.confirmPassword){
            console.log("Senhas diferentes!");
            setUser({...user, password: "", confirmPassword: ""});
            return;
        }
        console.log(user);
    }

    return (
        <Main>
            <h1>MyWallet</h1>
            <form onSubmit={(e) => {sendUser(e)}}>
                <input
                    type="text"
                    placeholder="Nome"
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
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
                <input
                    type="password"
                    placeholder="Confirme a senha"
                    value={user.confirmPassword}
                    onChange={(e) =>
                        setUser({ ...user, confirmPassword: e.target.value })
                    }
                    required
                />
                <button type="submit">Cadastrar</button>
            </form>
            <Link to="/Login">Já tem uma conta? Entre agora!</Link>
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

export default SignUp;
