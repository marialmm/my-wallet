import {useParams, Link} from "react-router-dom";
import styled from "styled-components";
import {useState} from "react";

function New(){
    const {type} = useParams();
    const {newEntry, setNewEntry} = useState({
        value: "",
        description: "",
        type: type
    });

    function sendInputData(e){
        e.preventDefault();
        console.log(newEntry);
    }

    return(
        <Main>
            <h1>Nova {type}</h1>
                <forms onSubmit={sendInputData(e)} >
                    <input type="number" placeholder="valor" value={newEntry.value} onChange={(e) => setNewEntry({...newEntry, value:e.target.value})} />
                    <input type="text" placeholder="Descrição" value={newEntry.description} onChange={(e) => setNewEntry({...newEntry, description:e.target.value})} />
                    <button type="submit">Salvar {type}</button>
                </forms>
        </Main>

    )
}

const Main = styled.main`

`

export default New;