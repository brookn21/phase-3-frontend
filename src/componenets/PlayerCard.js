import React from "react";

function PlayerCard (props){
    const { player } = props
    return(
        <div>
            <img src={player.img_url} width = "200px" height="250px"/>
            <h2>{player.name}</h2>
            <p>{player.age}</p>
            <h4>{player.position}</h4>
            <h4>{player.team.team_name}</h4>
            <h4>{player.country.name}</h4>
        </div>
    )
}

export default PlayerCard;