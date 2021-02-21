const express = require('express')
const Router = express.Router()
const multer = require('multer')

const filemodel = require('../app/api/model/filemodel');


const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/');
    },
    filename:(req,file,cb)=>{
        cb(null, "Image" + Date.now() + file.originalname);
    },
});

// https://www.youtube.com/watch?v=dapS3HkX3Wc


const upload = multer({storage:storage});

Router.post('/upload', upload.single("articalImage"),(req,res)=>{
    const newArti = new filemodel({
        title : req.body.title,
        standardprice : req.body.standardprice,
        speed : req.body.speed,
        longprice : req.body.longprice,
        perprice : req.body.perprice,
        acceleration : req.body.acceleration,
        range : req.body.range,
        purprice : req.body.purprice,
        articalImage : req.file.filename
        
    })

    newArti.save().then(()=>{
        res.send(newArti)
    }
    ).catch((err)=> res.status(400).json(err))
});

Router.get('/getImage',(req,res)=>{
     filemodel.find({}, function(err,result) {
         if(!err)
         {
             res.send(result)
         }
         else
         {
             res.send(err, "ERROR OCCURE")
         }
     })
});
Router.get('/single/:fileid',(req,res)=>{
    filemodel.findById({_id:req.params.fileid},(err,result)=>{
        res.send(result)
    })
})


module.exports=Router;