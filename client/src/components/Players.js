import React from 'react';
import PlayerCard from './PlayerCard';

const Players = ({ playerData }) => {

    return(
        <div className="players">
            {playerData.map((player) => {
                return <PlayerCard key={player.id} player={player} />
            })}
        </div>
    )
}

export default Players;