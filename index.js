import express from "express";
import bodyParser from 'body-parser';
// Import Routes
import usersRoutes from './routes/users.js'

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/users', usersRoutes);

app.get('/', (req, res) => {
    console.log('[TEST]!');
    res.send('Hi from our Home Page');
})

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))
