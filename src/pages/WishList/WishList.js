import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineHeartBroken } from "react-icons/md";
import { removeFromWishlist } from '../../redux/slices/wishlistSlice';
import {Link} from "react-router-dom"
import "./wishlist.css";

const WishList = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);

  const handleRemoveFromWishlist = (gameId) => {
    dispatch(removeFromWishlist(gameId));
  };

  return (
    <div className='wishlist-container'>
      <p className='wishlist-text'>WishList</p>
      <div className="wishlist-games">
        {wishlist && wishlist.length > 0 ? (
          wishlist.map((game) => (
            <div key={game.id} className="game-card-in-wishlist">
            <Link to={`/game/${game.id}`} className='game-link'>
              <img src={game.background_image} alt={game.name} className="game-image-in-wishlist" />
              <p className="game-name-in-wishlist">{game.name}</p>
            </Link>
              <div className='remove-to-wishlist' onClick={() => handleRemoveFromWishlist(game.id)}><MdOutlineHeartBroken /></div>
            </div>
          ))
        ) : (
          <p className='no-game'>No games in wishlist.</p>
        )}
      </div>
    </div>
  );
}

export default WishList;
