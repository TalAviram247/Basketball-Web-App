import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const CreatePlayer = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [player, setPlayer] = useState({
    name: '',
    current_team: '',
    points_avg: '',
    assists_avg: '',
    rebounds_avg: '',
    
  });

  const onChange = (e) => {
    setPlayer({ ...player, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Convert entered values to floats
    const convertedPlayer = {
      ...player,
      points_avg: parseFloat(player.points_avg),
      assists_avg: parseFloat(player.assists_avg),
      rebounds_avg: parseFloat(player.rebounds_avg)
    };

    try {
      await axios.post('http://localhost:8082/api/Players', convertedPlayer);
      setPlayer({
        name: '',
        current_team: '',
        points_avg: '',
        assists_avg: '',
        rebounds_avg: ''
      });

      navigate('/');
    } catch (err) {
      console.log('Error in CreatePlayer!');
    }
  };

  return (
    <div className='CreatePlayer'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Player List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Add Player</h1>
            <p className='lead text-center'>Create new Player</p>

            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Name of the Player'
                  name='name'
                  className='form-control'
                  value={player.name}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Current Team'
                  name='current_team'
                  className='form-control'
                  value={player.current_team}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Points Per Game'
                  name='points_avg'
                  className='form-control'
                  value={player.points_avg}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Assists Per Game'
                  name='assists_avg'
                  className='form-control'
                  value={player.assists_avg}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Rebounds Per Game'
                  name='rebounds_avg'
                  className='form-control'
                  value={player.rebounds_avg}
                  onChange={onChange}
                />
              </div>
              

              <input
                type='submit'
                className='btn btn-outline-warning btn-block mt-4'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePlayer;