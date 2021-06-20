const mongoose=require('mongoose')

const techieSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    imagelink:{
        type:String
    }
})

module.exports=mongoose.model('Techie',techieSchema)