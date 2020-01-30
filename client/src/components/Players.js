import React from 'react';
import PlayerCard from './PlayerCard';

const Players = ({ playerData }) => {

    return(
        <div className="players">
            {/* map over player data to create individual player cards */}
            {playerData.map((player) => {
                return <PlayerCard key={player.id} player={player} />
            })}
        </div>
    )
}

export default Players;