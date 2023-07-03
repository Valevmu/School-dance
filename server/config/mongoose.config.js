const mongoose = require("mongoose");
const uri = "mongodb+srv://motorLab:Isimu.2023@cluster0.7zstrj7.mongodb.net/?retryWrites=true&w=majority"

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("We are making some connections ninjas!"))
  .catch((err) => console.log("Somenthing went wrong", err));





