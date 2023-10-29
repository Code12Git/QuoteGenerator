import express from 'express';
import cors from 'cors';
import connection from './db/conn.js';
import dotenv from 'dotenv';
import quoteRoute from './routes/quote.route.js';
import authRoute from './routes/auth.route.js';

// Loading environment variables from the config file
dotenv.config({ path: './config.env' });

// Importing the database connection
connection();

// Creating an instance of the Express app
const app = express();

// Defining the port for the server to listen on
const port = process.env.PORT || 3000;

// Applying middleware
app.use(express.json());

// CORS

app.use(cors());

// Enabling Cross-Origin Resource Sharing (CORS)
app.use('/api/auth', authRoute);
app.use('/api/quote', quoteRoute);

// Testing route to check if the server is working
app.get('/', (req, res) => {
  res.status(200).json('Working!');
});

// Starting the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is up on PORT: ${port}`);
});
