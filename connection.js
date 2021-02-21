const mongoose = require('mongoose');

//mongoose for deal the mongodb

mongoose.connect('mongodb://localhost:27017/FinalProject', {useNewUrlParser: true, useUnifiedTopology: true},function(err){
        if(!err)
        {
            console.log("MongoDB connection created Successfully");
        }
        else
        {
            console.log("MongoDB connection Failed");
        }
});

module.exports =  mongoose;
