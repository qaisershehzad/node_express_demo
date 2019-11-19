const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'Handling Get Orders'
    })
});

router.post('/',(req,res,next)=>{
    res.status(200).json({
        message:'Handling POST Orders'
    })
});

router.get('/:orderId',(req,res,next)=>{
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

router.patch('/:orderId',(req,res,next)=>{
    res.status(200).json({
        message:'Patch Handling POST'
    })
});

router.delete('/:orderId',(req,res,next)=>{
    res.status(200).json({
        message:'Delete request POST'
    })
});
module.exports = router;