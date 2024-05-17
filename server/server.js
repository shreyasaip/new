const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3002;
const  cors = require('cors');

const uri = 'mongodb://localhost:27017/new'; 
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:3000'}));

const connectToDB = async () => {
    await client.connect();
    console.log('Connected to MongoDB');
};

const db = client.db();
app.get('/three', async (req, res) => {
  const collection = db.collection('notesApp');
    const threeTodos = await collection.find().sort({ updatedAt: -1 }).toArray();
    res.json(threeTodos);
});

connectToDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}).catch((error) => {
    console.error('Failed to connect to MongoDB', error);
});