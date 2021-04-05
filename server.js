import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/houseRoutes';
import yenv from 'yenv';


/* Application Setup*/
const app = express();
const env = yenv('env.yaml', {env: 'development'});

/* Connection Constants */
const PORT = 8080;
const MONGO_URL = `mongodb://${env.MONGO_USERNAME}:${encodeURIComponent(env.MONGO_PASSWORD)}@${env.MONGO_ADDRESS}`;
const AUTH = { useNewUrlParser: true, useUnifiedTopology: true}


/* Mongoose Setup */
mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URL, AUTH);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

routes(app);

module.exports = app.listen(PORT, () => {
    console.log("Setup is up and running!");
})