import React from 'react';

const PlayerCard = ({ player }) => {
    return (
        <div className="player-card">
            <h3>{player.name}</h3>
            <p>{player.country}</p>
            <p>Searches: {player.searches}</p>            
        </div>
    )
}

export default PlayerCard;