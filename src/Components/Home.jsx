import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HomeCard from './HomeCard';
import axios from 'axios';

const Home = () => {
  const [randomId, setRandomId] = useState(0);
  useEffect(() => {
    const getRandomGame = async () => {
      try {
        const res = await axios({
          method: 'get',
          url: 'https://api.boardgameatlas.com/api/search',
          responseType: 'json',
          params: {
            client_id: 'lmhaeyUdQ0',
            random: true,
          },
        });
        setRandomId(res.data.games[0].id);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomGame();
  }, []);
  return (
    <div className='home'>
      <div className='container'>
        <h2 className='text-center'>Welcome to Board Game Vault!</h2>
        <div className='cards'>
          <Link to='/search'>
            <HomeCard title='search' />
          </Link>
          <Link to='/collection'>
            <HomeCard title='collection' />
          </Link>
          <Link to='/wishlist'>
            <HomeCard title='wishlist' />
          </Link>
          <Link to={`/gameDetails/${randomId}`}>
            <HomeCard title='randomize' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
