import axios from "axios";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function SignUp() {
    const { user, setUser } = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const navigate = useNavigate();

    function sendUser(e){
        e.preventDefault();
        console.log(user);
    }

    return (
        <Main>
            <h1>MyWallet</h1>
            <forms onSubmit={(e) => {sendUser(e)}}>
                <input
                    type="text"
                    placeholder="Nome"
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
                <input
                    type="email"
                    placeholder="Email"
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
                <input
                    type="password"
                    placeholder="Confirme a senha"
                    value={user.confirmPassword}
                    onChange={(e) =>
                        setUser({ ...user, confirmPassword: e.target.value })
                    }
                />
                <button type="submit">Cadastrar</button>
            </forms>
            <Link to="/Login" />
        </Main>
    );
}

const Main = styled.main``;

export default SignUp;
