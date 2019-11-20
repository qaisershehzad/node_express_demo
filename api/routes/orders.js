const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'Handling Get Orders'
    })
});

router.post('/',(req,res,next)=>{
    const order = {
        productId:req.body.productId,
        quantity:req.body.quantity
    };
    res.status(201).json({
        message:'Order created',
        order:order
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