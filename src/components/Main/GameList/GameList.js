import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import { fetchGames, setGameName, fetchNextPage, fetchPrevPage, setFilters } from '../../../redux/slices/gamesSlice';
import { addToWishlist } from '../../../redux/slices/wishlistSlice';
import './game-list.css';
import GameFilter from '../GameFilter/GameFilter';

const GameList = () => {
    const dispatch = useDispatch();
    const { gameData, gameName, page, status, error, filters } = useSelector((state) => state.games);
    
    

    useEffect(() => {
        dispatch(fetchGames({ gameName, page, filters }));
    }, [gameName, page, filters, dispatch]);

    const handleSearch = (text) => {
        dispatch(setGameName(text.trim()));
    };

    const goToNextPage = () => {
        if (gameData.length === 20) {
            dispatch(fetchNextPage()); 
        }
    };
    
    const goToPreviousPage = () => {
        if (page > 1) {
            dispatch(fetchPrevPage()); 
        }
    };
    

    const handleAddToWishlist = (game) => {
        dispatch(addToWishlist(game));
    };

    const handleFilterChange = (selectedFilters) => {
        dispatch(setFilters(selectedFilters));
    };

    return (
        <div className='game-container'>
            <div className='game-filter-and-search'>
            <GameFilter onFilterChange={handleFilterChange} />
            <SearchBar onSearch={handleSearch} />
            </div>
            {status === 'loading' && <div className="loader"></div>}
            {status === 'failed' && <p>{error}</p>}
            <div className="game-list">
                {gameData.map((game) => (
                    <div key={game.id} className="game-card">
                        <Link to={`/game/${game.id}`} className='game-link'>
                            <div>
                                <img src={game.background_image} alt={game.name} className="game-image" />
                                <p className="game-name">{game.name}</p>
                                <p className='game-price'>12.99$</p>
                            </div>
                        </Link>
                        <div className='add-to-wishlist' onClick={() => handleAddToWishlist(game)}><FaRegHeart /></div>
                    </div>
                ))}
            </div>
            <div className='next-prev-buttons'>
                <button onClick={goToPreviousPage} disabled={page === 1} className='previous-button'>Previous</button>
                <button onClick={goToNextPage} className='next-button'>Next</button>
            </div>
        </div>
    );
}

export default GameList;
