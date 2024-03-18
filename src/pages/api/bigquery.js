// pages/api/bigquery.js
import { BigQuery } from '@google-cloud/bigquery';

export default async (req, res) => {
    // Create a BigQuery client
    const bigquery = new BigQuery();

    // Your BigQuery query
    const query = 'SELECT TextToDisplay FROM plasma-column-417516.reactConnectivity.HelloWorld WHERE TextToDisplayInt=1';

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