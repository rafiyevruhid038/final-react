// import React from 'react'

// import { useState, useEffect } from 'react';

// const News = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const url = 'https://mmo-games.p.rapidapi.com/game?id=452';
//     const options = {
//       method: 'GET',
//       headers: {
//         'X-RapidAPI-Key': '9baa15c9efmshb726273c97bd83cp19e58ejsn25471dcf1f81',
//         'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
//       }
//     };

//     const fetchData = async () => {
//       try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       <h1>News</h1>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// };
// export default News