// import axios from "axios";
import styled from "styled-components";
import {Link} from "react-router-dom";

function Home(){
    return(
        <Main>
            <aside>
                <h1>Olá, Fulano</h1>
                <Link to="/">Sair</Link>
            </aside>
            <section>
                <p>Não há registros de entrada ou saída</p>
            </section>
                <button>
                    <Link to="/new/income">
                        Nova entrada
                    </Link>
                </button>
                <button>
                    <Link to="/new/expense">
                        Nova saída
                    </Link>
                </button>
        </Main>
    )
}

const Main = styled.main`

`

export default Home;