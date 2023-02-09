import React, { useContext } from 'react';

import AddToCollectionButton from './AddToCollectionButton';
import { AppContext } from './context/AppContext';
import RemoveFromCollectionButton from './RemoveFromCollectionButton';

const CollectionToggle = ({ game }) => {
  const { isInCollection } = useContext(AppContext);
  return (
    <div>
      {isInCollection(game.id) ? (
        <RemoveFromCollectionButton game={game}>
          <div className='button-text'>Collection</div>
        </RemoveFromCollectionButton>
      ) : (
        <AddToCollectionButton game={game}>
          <div className='button-text'>Collection</div>
        </AddToCollectionButton>
      )}
    </div>
  );
};

export default CollectionToggle;
