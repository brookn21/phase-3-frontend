import React from "react";
import PlayerCard from "./PlayerCard"

function ListPlayers(props){
    const { players } = props
    const showPlayers = players.map((player)=>
    <PlayerCard
    key = {player.id}
    player ={player}/>)
    return(
        <div>
            {showPlayers}
        </div>
    )
}

export default ListPlayers;