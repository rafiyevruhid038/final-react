import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGameDetail, fetchScreenshots } from '../../redux/slices/gamesSlice';
import { addToWishlist } from '../../redux/slices/wishlistSlice';
import { addToCart } from '../../redux/slices/cartSlice';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import './game-detail.css';


const GameDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { selectedGame, screenshots, status } = useSelector((state) => state.games);
    const [imageIndex, setImageIndex] = useState(0);
    const [gameGenres, setGameGenres] = useState([]);

    useEffect(() => {
        dispatch(fetchGameDetail(id));
    }, [id, dispatch]);

    useEffect(() => {
        if (selectedGame) {
            dispatch(fetchScreenshots(id));
            const genres = selectedGame.genres.map(genre => genre.name);
            setGameGenres(genres);
        }
    }, [selectedGame, dispatch, id]);

    const handleAddToWishlist = (game) => {
        dispatch(addToWishlist(game));
    };

    const handleAddToCart = (game) => {
        dispatch(addToCart(game)); 
    };

    const nextImage = () => {
        setImageIndex((prevIndex) => (prevIndex + 1) % screenshots.length);
    };

    const previousImage = () => {
        setImageIndex((prevIndex) => (prevIndex - 1 + screenshots.length) % screenshots.length);
    };

    if (status === 'loading') {
        return <div className="loader"></div>;
    }

    if (!selectedGame) {
        return <div>No game found.</div>;
    }

    return (
        <div className="game-detail-container">
            <div className='game-poster'>
                <p className='selected-game-name'>{selectedGame && selectedGame.name ? selectedGame.name : 'No Data of the Game'}</p>
                <div className='rating-with-star'>
                    <div className='rating-bar' style={{ width: `${(selectedGame.rating / 5) * 100}%` }}></div>
                    <div className='stars'>
                        {[...Array(5)].map((_, index) => (
                            <span key={index} className={index < Math.floor(selectedGame.rating) ? "star filled" : (selectedGame.rating % 1 !== 0 && index === Math.floor(selectedGame.rating)) ? "star half-filled" : "star"}>&#9733;</span>
                        ))}
                    </div>
                </div>
                <div className='setImageButtons'>
                    <button onClick={previousImage}><FaAngleLeft /></button>
                    <button onClick={nextImage}><FaAngleRight /></button>
                </div>
                {screenshots.length > 0 ? (
                    <img src={screenshots[imageIndex].image} alt={selectedGame.name} className="game-image" />
                ) : (
                    <div className='game-image'>No Image</div>
                )}
            </div>
            <div className='game-features'>
                <p className='about'>About</p>
                <p className='description'>{selectedGame.description_raw}</p>
                <p>Publisher: {selectedGame && selectedGame.publishers && selectedGame.publishers.length > 0 ? selectedGame.publishers[0].name : 'No publisher data'}</p>
                <p>Platforms: {selectedGame.platforms.map((platform) => platform.platform.name).join(', ')}</p>
                <p>Rating: {selectedGame.rating}</p>
                <p>Genres: {gameGenres.join(', ')}</p>
                <p>Last Update: {selectedGame.updated}</p>
                <a href={selectedGame.website} target='_blank' rel='noopener noreferrer'>The official website</a>
            </div>
            <div className='add-buttons'>
                <button onClick={() => handleAddToWishlist(selectedGame)}>Add to Wishlist</button>
                <button onClick={() => handleAddToCart(selectedGame)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default GameDetail;
