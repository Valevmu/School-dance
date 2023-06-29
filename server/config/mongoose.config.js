const mongoose = require("mongoose");
const User = require('../models/user.model')

mongoose
  .connect("mongodb://127.0.0.1/proyecto-final", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("We are making some connections ninjas!"))
  .catch((err) => console.log("Somenthing went wrong", err));





