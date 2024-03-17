// pages/about.js
import React, { useState, useEffect } from 'react';

const About = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/api/bigquery')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>About</h1>
            {data && (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            )}
        </div>
    );
};

export default About;