import express from 'express'
import http from 'http'
import dotenv from 'dotenv' 
import cors from 'cors'
import {Server} from 'socket.io'
import router from './router/router.js'

const app = express();
const httpServer = http.createServer(app)
const soketio = new Server(httpServer, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET','POST']
    }
})

dotenv.config()

app.use(express.urlencoded({extended: true }))
app.use(express.json())
app.use(cors())

//routes
app.use(router)

//soket connection
// io.on('connection',(soket) => {
//     console.log('we have a connection..!');

//     soket.on('disconnect',() => {
//         console.log('user left.!')
//     })
// })

//server
const PORT = process.env.PORT || 8080
app.listen(`${PORT}`,()=>{
    console.log(`Server running on port ${process.env.PORT}`)
})
