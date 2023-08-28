import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const PlayerCard = (props) => {
  const player = props.player;

  return (
    <div className='card-container'>
      <img
        src='https://www.aier.org/wp-content/uploads/2020/09/basketball-800x508.jpg&nocache=1'
        alt='Players'
        height={200}
      />
      <div className='desc'>
        <h2>
          <Link to={`/show-Player/${player._id}`}>{player.name}</Link>
        </h2>
        <h3>{player.current_team}</h3>
        <p>{player.points_avg} PPG</p>
      </div>
    </div>
  );
};

export default PlayerCard;