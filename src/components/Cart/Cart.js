import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../redux/slices/cartSlice';
import { Link } from 'react-router-dom';
import './cart.css';

const Cart = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.items);

    const handleRemoveFromCart = (gameId) => {
        dispatch(removeFromCart(gameId));
    };

    const calculateTotalPrice = () => {
        return (items.length * 12.99).toFixed(2);
    };

    return (
        <div className='cart-container'>
            <p className='cart-text'>Basket</p>
            <div className="cart-games">
                {items && items.length > 0 ? (
                    items.map((game) => (
                        <div key={game.id} className="games-in-basket">
                            <Link to={`/game/${game.id}`} className='game-link-in-cart'>
                                <p className="game-name-in-cart">{game.name}</p>
                                <img src={game.background_image} alt={game.name} className="game-image-in-cart" />
                            </Link>
                            <div className='price'><p>$12.99</p></div>
                            <button className='remove-from-cart' onClick={() => handleRemoveFromCart(game.id)}>Remove</button>
                        </div>
                    ))
                ) : (
                    <p className='no-game'>No games in cart.</p>
                )}
            </div>
            {items.length > 0 && (
                <div className='cart-summary'>
                    <button className='payment'>Continue to payment</button>
                    <p className='total-price'>Total: ${calculateTotalPrice()}</p>
                </div>
            )}
        </div>
    );
}

export default Cart;
