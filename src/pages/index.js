// pages/index.js
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Assuming App.js is located in the same directory as index.js


const Home = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/api/bigquery')
            .then(response => response.json())
            .then(data => {
                // Extract the "TextToDisplay" value from each item and create a new array with only those values
                const cleanData = data.map(item => item.TextToDisplay);
                setData(cleanData);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);


    return (
        <div>
            <h1>Home</h1>
            <p>{data}</p>
        </div>
    );
};

export default Home;

