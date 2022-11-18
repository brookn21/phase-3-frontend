import React, { useState } from "react";

function AddPlayer(props) {
  const { addForm, leagues  } = props;

  const [name, setName] = useState("");
  const [age, setAge] = useState(undefined);
  const [position, setPosition] = useState("");
  const [country, setCountry] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [selectedLeague, setSelectedLeague] = useState("");
  const [team, setTeam] = useState("");

  //     t.integer "team_id"
  const leagueObject = leagues?.find((league) => league.name === selectedLeague)

//   const filteredTeams = filteredLeague?.teams.filter((team) => team.league === selectedLeague)
  const teamOptions = leagueObject?.teams.map((team) => <option>{team.team_name}</option>)
//   console.log(filteredTeams)
const teamId = leagueObject?.teams.find((selectTeam) => selectTeam.team_name === team)?.id




  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const newForm = {
          name: name,
          age: age,
          position: position,
          country: country,
          imgUrl: imgUrl,
          team_id: teamId
        };
        addForm(newForm);
        setName("");
        setAge(undefined);
        setPosition("");
        setCountry("")
        setImgUrl("")
        setTeam(undefined)
      }}
    >
        <label>Name:</label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label>Age:</label>
      <input
        type="number"
        name="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br />
      <label>Position:</label>
      <input
        type="text"
        name="position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />
      <br />
      <label>Country:</label>
      <input
        type="text"
        name="country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <br />
      <label>Iamge Url:</label>
      <input
        type="text"
        name="imgUrl"
        value={imgUrl}
        onChange={(e) => setImgUrl(e.target.value)}
      />
      <br />
      <br />
      <label>League:</label>
      <select onChange={(e) => setSelectedLeague(e.target.value)}>
        <option value="Select League">Select League</option>
        <option value="Premier League">Premier League</option>
        <option value="Bundesliga">Bundesliga</option>
        <option value="Ligue 1">Ligue 1</option>
        <option value="Serie A">Serie A</option>
        <option value="La Liga">La Liga</option>
      </select>
      <select onChange={(e)=> setTeam(e.target.value)}>
      <option value="">Select A Team</option>
      { selectedLeague ? teamOptions : null }
      </select>
      <br />
      <input type="submit" name="submit" />
    </form>
  );
}

export default AddPlayer;


