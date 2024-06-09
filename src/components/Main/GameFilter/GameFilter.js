import React, { useState, useEffect } from 'react';
import './game-filter.css'; // Stil dosyasını import edin

const GameFilter = ({ onFilterChange }) => {
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [isFilterVisible, setIsFilterVisible] = useState(false);

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        setSelectedGenres((prevSelectedGenres) => {
            if (checked) {
                return [...prevSelectedGenres, value];
            } else {
                return prevSelectedGenres.filter((genre) => genre !== value);
            }
        });
    };

    useEffect(() => {
        onFilterChange(selectedGenres);
    }, [selectedGenres, onFilterChange]);

    const toggleFilterVisibility = () => {
        setIsFilterVisible(!isFilterVisible);
    };

    return (
        <div className='filter-container'>
            <button onClick={toggleFilterVisibility} className='filter-button'>
                {isFilterVisible ? 'Hide Filters' : 'Show Filters'}
            </button>
            {isFilterVisible && (
                <div className='checkbox-container'>
                    <label>Genres</label>
                    {['action', 'adventure', 'role-playing-games-rpg', 'simulation', 'strategy', 'sports', 'puzzle', 'racing', 'shooter', 'indie', 'platformer', 'fighting'].map(genre => (
                        <label key={genre}><input type="checkbox" value={genre} onChange={handleCheckboxChange} checked={selectedGenres.includes(genre)} /> {genre[0].toUpperCase() + genre.slice(1)}</label>
                    ))}
                </div>
            )}
        </div>
    );
}

export default GameFilter;
