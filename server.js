const express = require("express")
const dbConnect = require("./db/connection")

const app = express()
const cors = require("cors")
app.use(cors())
app.use(express.json())

//initializers
require("dotenv").config();
dbConnect();

//apis
app.use('/api/blogs', require('./apis/blogs'))


app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})
