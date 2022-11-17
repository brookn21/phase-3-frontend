import React, {useEffect, useState} from "react";
import ListPlayers from "./ListPlayers"

function HomePage(){
    const url = "http://localhost:9292/"

    const [players, setPlayers] = useState([])

    useEffect(()=> fetchPlayers,[])

    function fetchPlayers(){
        fetch(url + "players")
        .then(resp => resp.json())
        .then(setPlayers)
    }
    
    return(
        <ListPlayers players = {players}/>
    )
}

export default HomePage;