const server = require('express');
const { BigQuery } = require('@google-cloud/bigquery');

const router = server.Router();
const bigquery = new BigQuery();
const app = express();
const port = 3002; //

router.post('/api/addPerson', async (req, res) => {
    try {
        const { firstName, lastName, email, address, profession, salary, phoneNumber } = req.body;
        const datasetId = 'plasma-column-417516.reactConnectivity.Person';
        const tableId = 'person';

        // Create a new row with the person data
        const rows = [{
            firstName,
            lastName,
            email,
            address,
            profession,
            salary,
            phoneNumber
        }];

        // Insert the row into the person table
        await bigquery.dataset(datasetId).table(tableId).insert(rows);

        res.status(201).json({ message: 'Person added successfully' });
    } catch (error) {
        console.error('Error adding person:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

module.exports = router;
