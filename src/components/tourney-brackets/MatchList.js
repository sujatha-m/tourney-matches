import React from 'react';
import Match from './Match';

function MatchList(props) {
    const matchData = Object.values(props);
    const parsedMatches = matchData.map(match => <Match key={match.matchNumber} {...match} />);
    return(
        <section className="PlayerList MatchList">
        <h1>Match list</h1>
        {/* <Match players={oneMatch.players} winner={oneMatch.winner} scoreDifference={oneMatch.scoreDifference} /> */}
        {parsedMatches}
        </section>
      
    )
}

export default MatchList;