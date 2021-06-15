const mongoose = require('mongoose');
const connection = "mongodb+srv://first_user:userPOCScand228@awesomecluster.awigi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(connection, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));