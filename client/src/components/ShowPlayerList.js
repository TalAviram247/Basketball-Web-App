import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PlayerCard from './PlayerCard';

function ShowPlayerList() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8082/api/Players');
        setPlayers(response.data);
      } catch (error) {
        console.log('Error from ShowPlayerList');
      }
    };

    fetchData();
  }, []);

  const playerList =
    players.length === 0
      ? 'there is no Player record!'
      : players.map((player, k) => <PlayerCard Player={player} key={k} />);

  return (
    <div className='ShowPlayerList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Players List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/create-player'
              className='btn btn-outline-warning float-right'
            >
              + Add New Player
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{playerList}</div>
      </div>
    </div>
  );
}

export default ShowPlayerList;