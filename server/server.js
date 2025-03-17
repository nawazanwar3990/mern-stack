const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const roleRoutes = require('./routes/roleRoutes');
const permissionRoutes = require('./routes/permissionRoutes');
const connectDB = require('./db');

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

connectDB();

const PORT = process.env.PORT || 5000;
const BASE_URL = `http://localhost:${PORT}`;


// Base API router
const apiRouter = express.Router();
apiRouter.use('/roles', roleRoutes);
apiRouter.use('/permissions', permissionRoutes);
apiRouter.use('/users', userRoutes);

app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server running on ${BASE_URL}`);
});
