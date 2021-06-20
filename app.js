const express=require('express')
const mongoose = require('mongoose')
const app = express()
const url='mongodb://localhost/saithi'
mongoose.connect(url,{useNewUrlParser:true},{useUnifiedTopology:true})
const con=mongoose.connection

con.on('open',()=>{
    console.log('connected......')
})

app.use(express.json())

const techierouter = require('./routers/techies')
app.use('/techies',techierouter)

app.listen(9000,()=>{
    console.log('server started')
})