// pages/api/bigquery.js
import { BigQuery } from '@google-cloud/bigquery';

const bigquery = new BigQuery({ keyFilename: keyFile });
export default async (req, res) => {
    // Create a BigQuery client
    const keyFile = "plasma-column-417516-72b33eadb4ba.json";
    const bigquery = new BigQuery({ keyFilename: keyFile });

    // Your BigQuery query
    const query = 'SELECT * FROM plasma-column-417516.reactConnectivity.HelloWorld LIMIT 1';

    try {
        // Run the query
        const [rows] = await bigquery.query(query);

        // Send the response
        res.status(200).json(rows);
    } catch (error) {
        // Handle errors
        console.error('Error fetching data from BigQuery:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};