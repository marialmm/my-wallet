import axios from "axios";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function SignUp() {
    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const navigate = useNavigate();

    function sendUser(e) {
        e.preventDefault();
        if (newUser.password !== newUser.confirmPassword) {
            alert("Senhas diferentes!");
            setNewUser({ ...newUser, password: "", confirmPassword: "" });
            return;
        }
        delete newUser.confirmPassword;
        const promise = axios.post("http://localhost:5000/sign-up", newUser);
        promise.then(() => {
            navigate("/");
        });
        promise.catch((err) => {
            console.log(`${err.response.status} - ${err.response.statusText}`);
            alert("Um erro aconteceu, tente novamente");
        });
    }

    return (
        <Main>
            <h1>MyWallet</h1>
            <form
                onSubmit={(e) => {
                    sendUser(e);
                }}
            >
                <input
                    type="text"
                    placeholder="Nome"
                    value={newUser.name}
                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={newUser.email}
                    onChange={(e) =>
                        setNewUser({ ...newUser, email: e.target.value })
                    }
                    required
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={newUser.password}
                    onChange={(e) =>
                        setNewUser({ ...newUser, password: e.target.value })
                    }
                    required
                />
                <input
                    type="password"
                    placeholder="Confirme a senha"
                    value={newUser.confirmPassword}
                    onChange={(e) =>
                        setNewUser({ ...newUser, confirmPassword: e.target.value })
                    }
                    required
                />
                <button type="submit">Cadastrar</button>
            </form>
            <Link to="/">Já tem uma conta? Entre agora!</Link>
        </Main>
    );
}

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-family: "Saira Stencil One", cursive;
        color: #ffffff;
        font-size: 32px;
        line-height: 50px;
        margin: 95px 0px 24px;
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
