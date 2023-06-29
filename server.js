
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require('cookie-parser');
require("./server/config/mongoose.config");
require('dotenv').config()
console.log(process.env.SECRET_KEY);


app.use(cookieParser());
app.use(cors({ credentials: true, allowedHeaders: 'X-Requested-With, Content-Type, Authorization',origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
const routes = require("./server/routes/dance.routes");
require('./server/routes/user.route')(app);
routes(app);


app.listen(8080, () => {
  console.log("You are now listening at port 8080");
});
