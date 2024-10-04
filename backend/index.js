const express = require("express");
const cors = require("cors");
const mongodbToConnect = require("./srcs/db/db");


mongodbToConnect();
const app = express();
const port = 7000;

app.use(express.json());
app.use(cors());


app.use('/api/v1/user', require('./srcs/routes/auth.route'));
app.use('/api/v1/notes', require('./srcs/routes/notes.route'));

app.listen(port,() => {
    console.log(`Server is started at http://localhost:${port}`);
})
