import React from 'react';
import Player from './Player';

function PlayerList(props) {
    const parsedPlayerData = Object.values(props);
    const parsedPlayers = parsedPlayerData.map(player => <Player key={player.gamerTag} {...player} />);

    return(
        <section className='PlayerList'>
            <h1>Current participating players</h1>
            {/* <Player gamerTag={onePlayer.gamerTag} firstName={onePlayer.firstName} lastName={onePlayer.lastName} wins={onePlayer.wins} /> */}
            {parsedPlayers}
        </section>
    )
}

export default PlayerList;