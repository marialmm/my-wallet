// import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RiLogoutBoxRLine, RiAddCircleLine, RiIndeterminateCircleLine } from "react-icons/ri";

function Home() {
    return (
        <Main color={"income"}>
            <aside>
                <h1>Olá, Fulano</h1>
                <Link to="/">
                    <RiLogoutBoxRLine />
                </Link>
            </aside>
            <section class="" >
                <Container class="expense" color={"expense"}>
                    <p><span>08/05</span> Almoço mãe</p>
                    <p class="value">39.90</p>
                </Container>
                <p>SALDO <span>39.90</span></p>
            </section>
            <div>
                <Link to="/new/income">
                    <button>
                        <RiAddCircleLine />
                        <p>Nova entrada</p>
                    </button>
                </Link>
                <Link to="/new/expense">
                    <button>
                        <RiIndeterminateCircleLine />
                        <p>Nova saída</p>
                    </button>
                </Link>
            </div>
        </Main>
    );
}

const Main = styled.main`
    aside {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 78px;
    }

    aside svg{
        font-size: 25px;
    }

    section{
        margin-bottom: 13px;
        padding: 23px 12px;
        height: calc(100vh - 225px);
        background-color: #FFFFFF;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    section.empty{
        justify-content: center;
        align-items: center;
        padding: 0px 73px;
    }

    .empty p{
        font-size: 20px;
        line-height: 23px;
        color: var(--grey);
        text-align: center;
    }

    section > p {
        display: flex;
        justify-content: space-between;
        font-weight: 700;
    }

    section > p span{
        color: var(--${props => props.color});
        font-weight: 400;
    }

    div{
        display: flex;
        justify-content: space-between;
        gap: 15px;
    }

    div > a{
        width:100%
    }

    div button {
        height: 114px;
        font-size: 17px;
        margin: 0;
        max-width: none;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        padding: 10px;
    }

    div button svg {
        font-size: 25px;
    }

    div button p {
        width: 64px;
        text-align: initial;
    }
`;

const Container = styled.div`
    p span{
        color: var(--ligth-grey);
        margin-right: 5px;
    }
    p.value{
        color: var(--${props => props.color});
    }
`;

export default Home;
