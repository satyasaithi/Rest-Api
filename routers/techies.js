const express=require('express')
const router=express.Router()
const Techie=require('../models/techie')

router.get('/',async(req,res)=>{
   
    try{
        const techies= await Techie.find()
        res.json(techies)
    }catch(err){
        res.send('Error' +err)
    }
})

router.get('/:id',async(req,res)=>{
   
    try{
        const techie= await Techie.findById(req.params.id)
        res.json(techie)
    }catch(err){
        res.send('Error' +err)
    }
})

router.post('/',async(req,res)=> {
    const techie=new Techie({
        title:req.body.title,
        message:req.body.message
       
    })
    try{
        const a1= await techie.save()
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})


router.patch('/:id',async(req,res)=>{
    try{
        const techie=await Techie.findById(req.params.id)
        techie.sub=req.body.sub
        const a1=await techie.save()
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        const techie=await Techie.findById(req.params.id)
        
        const a1=await techie.remove()
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})
module.exports=router