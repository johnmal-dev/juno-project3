import React, { useContext } from 'react';
import WishlistCard from './WishlistCard';
import { AppContext } from './context/AppContext';

const WishlistDisplay = () => {
  const { wishlist } = useContext(AppContext);
  return (
    <div className='wishlist-display text-center'>
      <div className='container'>
        <h2>Wishlist</h2>
        <div className='wishlist-list'>
          {wishlist.length > 0 &&
            wishlist.map((game) => {
              return (
                <WishlistCard
                  game={game}
                  key={game.key}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default WishlistDisplay;
