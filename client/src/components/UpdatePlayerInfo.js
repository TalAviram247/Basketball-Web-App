import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function UpdatePlayerInfo(props) {
  const [player, setPlayer] = useState({
    name: '',
    current_team: '',
    points_avg: '',
    assists_avg: '',
    rebounds_avg: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8082/api/players/${id}`);
        const playerData = response.data;

        setPlayer({
          name: playerData.name,
          current_team: playerData.current_team,
          points_avg: playerData.points_avg.toString(),    // Convert to string
          assists_avg: playerData.assists_avg.toString(),  // Convert to string
          rebounds_avg: playerData.rebounds_avg.toString() // Convert to string
        });
      } catch (error) {
        console.log('Error from UpdatePlayerInfo');
      }
    };

    fetchData();
  }, [id]);

  const onChange = (e) => {
    setPlayer({ ...player, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: player.name,
      current_team: player.current_team,
      points_avg: parseFloat(player.points_avg),
      assists_avg: parseFloat(player.assists_avg),
      rebounds_avg: parseFloat(player.rebounds_avg)
    };

    try {
      await axios.put(`http://localhost:8082/api/players/${id}`, data);
      navigate(`/show-player/${id}`);
    } catch (error) {
      console.log('Error in UpdatePlayerInfo!');
    }
  };

  return (
    <div className='UpdatePlayerInfo'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Player List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit Player</h1>
            <p className='lead text-center'>Update Player's Info</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
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
              <label htmlFor='current_team'>Current Team</label>
              <input
                type='text'
                placeholder='Current Team'
                name='current_team'
                className='form-control'
                value={player.current_team}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='points_avg'>Points Per Game</label>
              <input
                type='text'
                placeholder='Points Per Game'
                name='points_avg'
                className='form-control'
                value={player.points_avg}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='assists_avg'>Assists Per Game</label>
              <input
                type='text'
                placeholder='Assists Per Game'
                name='assists_avg'
                className='form-control'
                value={player.assists_avg}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='rebounds_avg'>Rebounds Per Game</label>
              <input
                type='text'
                placeholder='Rebounds Per Game'
                name='rebounds_avg'
                className='form-control'
                value={player.rebounds_avg}
                onChange={onChange}
              />
            </div>
            <br />

            <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
            >
              Update Player
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdatePlayerInfo;
