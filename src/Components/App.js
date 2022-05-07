import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import New from "./New";
import SignUp from "./SignUp";
import GlobalStyle from "./../Assets/globalStyle/globalStyle";

function App(){
    <>
        <GlobalStyle />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={Login} />
                <Route path="/sign-up" element={SignUp} />
                <Route path="/home" element={Home} />
                <Route path="/new/:type" element={New} />
            </Routes>
        </BrowserRouter>
    </>
};

export default App;