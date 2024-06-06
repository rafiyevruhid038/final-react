import React from 'react';
import { MdOutlineHeartBroken } from "react-icons/md";
import "./wishlist.css";

const WishList = ({ wishlist, setWishlist }) => {

    const removeFromWishlist = (game) => {
        setWishlist(prevWishlist => prevWishlist.filter(item => item.id !== game.id));
    };

    return (
        <div className='wishlist-container'>
            <p>WishList</p>
            <div className="wishlist-games">
                {wishlist && wishlist.length > 0 ? (
                    wishlist.map((game) => (
                        <div key={game.id} className="game-card-in-wishlist">
                            <p className="game-name">{game.name}</p>
                            <img src={game.background_image} alt={game.name} className="game-image" />
                            <div className='remove-to-wishlist' onClick={() => removeFromWishlist(game)}><MdOutlineHeartBroken /></div>
                        </div>
                    ))
                ) : (
                    <p>No games in wishlist.</p>
                )}
            </div>
        </div>
    );
}

export default WishList;
