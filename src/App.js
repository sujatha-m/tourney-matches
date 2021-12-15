import './App.css';
import MatchList from './components/tourney-brackets/MatchList';
import PlayerList from './components/tourney-brackets/PlayerList';
import matchData from './data/matchData';
import playerData from './data/playerData';
import { preparePlayerData, addWinsToPlayers } from "./helpers/playerHelpers.js";

function App() {
  const playerDataArray = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData);
  return (
    <div className="App">
      <h1>Tourney Matches <span>Where Coding and Tournaments found their Match!</span></h1>
      <PlayerList {...parsedPlayerData}/>
      <MatchList {...matchData}/>
    </div>
  );
}

export default App;
