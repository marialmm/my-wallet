import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import Home from "./Home";
import Login from "./Login";
import NewTransaction from "./NewTransaction";
import SignUp from "./SignUp";
import EditTransaction from "./EditTransaction";
import GlobalStyle from "./../Assets/globalStyle/globalStyle";
import UserContext from "./../Assets/context/userContext";

function App() {
    const [user, setUser] = useState({});

    return (
        <UserContext.Provider
            value={{
                user,
                setUser
            }}
        >
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/new/:type" element={<NewTransaction />} />
                    <Route path="/edit/:idTransaction" element={<EditTransaction />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;
