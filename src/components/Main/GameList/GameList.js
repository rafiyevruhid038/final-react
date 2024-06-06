import React, { useEffect, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { FaRegHeart } from "react-icons/fa";
import './game-list.css'; 

const GameList = () => {
    const [gameData, setGameData] = useState([]);
    const [page, setPage] = useState(1);
    const [gameName, setGameName] = useState("");
    const [gameCount, setGameCount] = useState(0);

    let url = `https://api.rawg.io/api/games?key=0c19f259a8b84747bac453b4bd1bca6b&search=${gameName}&page=${page}`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                console.log(data.results);
                const sortedData = data.results.sort((a, b) => b.rating - a.rating);

                setGameCount(sortedData.length);
                setGameData(sortedData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [url]);

    const goToNextPage = () => {
        if (gameCount === 20) {
            setPage(page + 1);
        }
    };

    const goToPreviousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const handleSearch = (text) => {
        const trimmedText = text.trim();
        if (trimmedText) {
            setGameName(trimmedText);
        }
    };

    return (
        <div className='game-container'>
            <SearchBar onSearch={handleSearch} />
            <div className="game-list">
                {gameData.map((game) => (
                    <div key={game.id} className="game-card">
                        <p className="game-name">{game.name}</p>
                        <img src={game.background_image} alt={game.name} className="game-image" />
                        <div className='add-to-wishlist'><FaRegHeart /></div>
                    </div>
                ))}
            </div>
            <div className='next-prev-buttons'>
                <button onClick={goToPreviousPage}>Previous</button>
                <button onClick={goToNextPage}>Next</button>
            </div>
        </div>
    );
}

export default GameList;
