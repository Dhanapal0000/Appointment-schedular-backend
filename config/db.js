
const mongoose = require('mongoose');

const db_uri = "mongodb+srv://dhanapal4550:M0Ix3IiH9Eot2lqz@cluster0.5qhxvee.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async ()=> {
    try{
        await mongoose.connect(db_uri,{
            useNewUrlParser:true,
            useUnifiedTopology:true});
        console.log("Db is connected");
    }
    catch(error){
        console.error("Db connection failed");
        process.exit(1);
    }
};

module.exports = connectDB