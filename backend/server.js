import express from 'express'
import dotenv from 'dotenv' 

const app = express();
dotenv.config()

//routes
app.get('/',(req,res) => {
    res.send('Hello World!')
})

//server
const PORT = process.env.PORT || 8080
app.listen(`${PORT}`,()=>{
    console.log(`Server running on port ${process.env.PORT}`)
})
