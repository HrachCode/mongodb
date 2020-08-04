const express = require('express')
const remove = express.Router()
const Item = require('../models/addFilmItem')


remove.post('/',(req,res)=>{
    Item.findByIdAndDelete(req.body.id).then(data=>{
        res.status(202).json({message:'OK'})
    })
    .catch(err=>{
        console.log(err);
        res.status(400).json({err:'ERROR'})
    })
})


module.exports = remove;