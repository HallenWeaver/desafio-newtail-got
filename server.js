import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/houseRoutes';

/* Connection Constants */
const PORT = 8080;
const MONGO_URL = `mongodb://hw:${encodeURIComponent('#27HW_arm')}@localhost:27017/admin`;
const AUTH = { useNewUrlParser: true, useUnifiedTopology: true}

/* Application Setup*/
const app = express();

/* Mongoose Setup */
mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URL, AUTH);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

routes(app);

module.exports = app.listen(PORT, () => {
    console.log("Setup is up and running!");
})