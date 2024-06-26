import express from 'express';
import { promises as fs } from 'fs';

const app = express();
app.use(cors());
const PORT = 3000;

// Endpoint to read and send JSON file content
app.get('/socks', async (_req, res) => {
    try {
        const data = await fs.readFile('../data/socks.json', 'utf8');
        const jsonObj = JSON.parse(data);
        res.json(jsonObj);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Hmmm, something smells... No socks for you! ☹");
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
app.post('/socks/search', async (req, res) => {
    try {
        const { color } = req.body;
        // Assuming you have a MongoDB model named 'Sock' and you want to find socks by color
        const socks = await Sock.find({ color });

        res.json(socks);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send('Hmm, something doesn\'t smell right... Error searching for socks');
    }
});


app.delete('/socks/:id', async (req, res) => {
    try {
        const { id } = req.params;
        // Assuming you have a MongoDB model named 'Sock' and you want to delete a sock by its ID
        await Sock.findByIdAndDelete(id);

        res.send('Sock deleted successfully');
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send('Hmm, something doesn\'t smell right... Error deleting sock');
    }
});

app.post('/socks', async (req, res) => {
    try {
        const { userId, sockDetails, additionalFeatures, addedTimestamp } = req.body;
        // Assuming you have a MongoDB model named 'Sock' and you want to add a new sock
        const newSock = new Sock({
            userId,
            sockDetails,
            additionalFeatures,
            addedTimestamp,
        });

        await newSock.save();

        res.send('Sock added successfully');
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send('Hmm, something doesn\'t smell right... Error adding sock');
    }
});
