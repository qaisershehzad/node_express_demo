const express = require('express');

const router = express.Router();

const mongoose = require('mongoose');

const Product = require('../models/product');

router.get('/', (req, res, next) => {
  Product.find()
    .select('name price _id')
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        products: docs,
      };
      res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.post('/', (req, res, next) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
  });
  product
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: 'Handling POST',
        createdProduct: result,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.get('/:productId', (req, res, next) => {
  const id = req.params.productId;
  try {
    Product.findById(id)
      .exec()
      .then(doc => {
        console.log(doc);
        if (doc) {
          res.status(200).json({
            message: 'Handling Get',
            data: doc,
          });
        } else {
          res.status(404).json({
            message: 'No valid data',
          });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
      });
  } catch (error) {
    // your catch block code goes here
    console.log(error);
  }
});

router.patch('/:productId', (req, res, next) => {
  res.status(200).json({
    message: 'Patch Handling POST',
  });
});

router.delete('/:productId', (req, res, next) => {
  res.status(200).json({
    message: 'Delete request POST',
  });
});
module.exports = router;
