import express from 'express';
import db from "./config/Database.js";
import Users from "./models/UserModel.js";
const app = express();

try {
    await db.authenticate();
    console.log('Database connected ... ');
    await Users.sync();
} catch (error) {
    console.log(error);
}

app.listen(5000, () => console.log('Server started on port 5000'));