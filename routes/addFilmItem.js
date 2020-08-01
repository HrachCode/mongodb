const express = require('express')
const item = express.Router()
const Item = require('../models/addFilmItem')


item.post('/',(req,res)=>{
    const { description,rating,img,name } = req.body.user
    const additem = new Item({
        description,rating,img,name
    })
    additem.save().then(succsses=>{
        console.log('item saved');
        
    }).catch(err=>{console.log(err)})
    
    
})

item.post('/getitem',async (req,res)=>{
    try {
       await Item.findByIdAndDelete('5f23bfa13f78923977471e00')
        const data = await Item.find({})
        res.json(data)
    } catch (error) {
        console.log(error);
        
    }
})

module.exports = item;