import {useParams, Link} from "react-router-dom";
import styled from "styled-components";

function New(){
    const {type} = useParams();
    return(
        <Main>
            <h1>Nova {type}</h1>
                <forms>
                    <input type="number" placeholder="valor"/>
                    <input type="text" placeholder="Descrição" />
                    <button type="submit">Salvar {type}</button>
                </forms>
        </Main>

    )
}

const Main = styled.main`

`

export default New;