// pages/index.js
import React, { useState, useEffect } from 'react';
import { BigQuery } from '@google-cloud/bigquery';

const Home = () => {
    const [TextToDisplay, setMessage] = useState('');

    useEffect(() => {
        const bigquery = new BigQuery();
        const query = 'SELECT TextToDisplay FROM plasma-column-417516.reactConnectivity.HelloWorld LIMIT 1';
        bigquery.query(query).then(([rows]) => {
            if (rows.length > 0) {
                setMessage(rows[0].TextToDisplay);
            }
        });
    }, []);

    return (
        <div>
            <h1>Home</h1>
            <p>{TextToDisplay}</p>
        </div>
    );
};

export default Home;