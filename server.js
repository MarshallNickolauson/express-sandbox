import express from 'express';
import path from 'path';
import posts from './routes/posts.js';
import loggerMiddleware from './middleware/loggerMiddleware.js';
import errorHandler from './middleware/errorMiddleware.js';
import notFoundMiddleware from './middleware/notFoundMiddlware.js'
const port = process.env.PORT || 8000;

const app = express();

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger middleware
app.use(loggerMiddleware);

// Routes
app.use('/api/posts', posts);

// Error handler
app.use(notFoundMiddleware);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));