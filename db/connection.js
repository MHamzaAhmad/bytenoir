const mongoose = require("mongoose")


const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}


const dbConnect = () => {
    try {
        const mongoURI = process.env.MONGODB_URI
        if(!mongoURI) {
            throw Error("MongoDB URI not found");
        }
        mongoose.connect(mongoURI, options).then(() => {
            console.log("MongoDB connected");
        })
    } catch (error) {
        console.error(error);
    }
}

module.exports = dbConnect
