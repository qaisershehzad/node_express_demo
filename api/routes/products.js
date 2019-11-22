const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'Handling Get'
    })
});

router.post('/',(req,res,next)=>{
    res.status(200).json({
        message:'Handling POST'
    })
});

router.get('/:productId',(req,res,next)=>{
    const id = req.params.productId;
    if (id === 'special'){
        res.status(200).json({
            message:'Handling Get',
            id:id
        })
    }else{
        res.status(200).json({
            message:'You passed an id'
        })
    }
    
});

router.patch('/:productId',(req,res,next)=>{
    res.status(200).json({
        message:'Patch Handling POST'
    })
});

router.delete('/:productId',(req,res,next)=>{
    res.status(200).json({
        message:'Delete request POST'
    })
});
module.exports = router;