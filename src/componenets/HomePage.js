import React, {useEffect, useState} from "react";
import ListPlayers from "./ListPlayers"
import AddPlayer from "./AddPlayer";

function HomePage(){
    const url = "http://localhost:9292/"

    const [players, setPlayers] = useState([])
    const [leagues, setLeagues] = useState([])

    useEffect(()=> {
        fetchPlayers()
        fetchLeagues()
    },[])

    function fetchPlayers(){
        fetch(url + "players")
        .then(resp => resp.json())
        .then(setPlayers)
    }
    
    function fetchLeagues(){
    fetch(url + "leagues")
    .then(resp => resp.json())
    .then(setLeagues)
}

  function addForm(form){
    const newObj ={
        method: "POST",
        headers:{
          "Content-type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(form)
      }
      fetch(url + "players",newObj)
      .then( resp => resp.json())
      .then(newPlayer => setPlayers([...players,newPlayer]))
    }

    return(
        <div>
        <AddPlayer leagues ={leagues} addForm = {addForm}/>
        <ListPlayers players = {players}/>
        </div>
    )
}

export default HomePage;