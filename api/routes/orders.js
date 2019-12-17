const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Order = require('../models/order');
const Product = require('../models/product');

//Handle incoming GET request to /orders
router.get('/', (req, res, next) => {
  Order.find()
    .select('product quantity _id')
    .populate('product', 'name price')
    .exec()
    .then(docs => {
      res.status(200).json({
        count: docs.length,
        orders: docs.map(doc => {
          return {
            _id: doc._id,
            product: doc.product,
            quantity: doc.quantity,
            require: {
              type: 'GET',
              url: 'http://localhost:3000/orders/' + doc._id,
            },
          };
        }),
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err,
      });
    });
});

router.post('/', (req, res, next) => {
  Product.findById(req.body.productId)
    .then(product => {
      if (!product) {
        return res.status(404).json({
          message: 'Product not found',
        });
      }
      const order = new Order({
        _id: mongoose.Types.ObjectId(),
        quantity: req.body.quantity,
        product: req.body.productId,
      });
      order.save();
    })
    .then(result => {
      res.status(201).json({
        message: 'Order created',
        orderCreated: result,
        request: {
          type: 'GET',
          url: 'http://localhost:3000/orders/',
        },
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err,
      });
    });
});

router.get('/:orderId', (req, res, next) => {
  const id = req.params.orderId;
  Order.findById(id)
    .populate('product', 'name price')
    .exec()
    .then(order => {
      if (!order) {
        return res.status(404).json({
          message: 'Order not found',
        });
      }
      res.status(200).json({
        order: order,
        request: {
          type: 'GET',
          url: 'http://localhost:3000/orders/',
        },
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err,
      });
    });
});

router.patch('/:orderId', (req, res, next) => {
  res.status(200).json({
    message: 'Patch Handling POST',
  });
});

router.delete('/:orderId', (req, res, next) => {
  const id = req.params.orderId;
  Order.remove({ _id: id })
    .exec()
    .then(order => {
      res.status(200).json({
        message: 'order deleted',
        request: {
          type: 'POST',
          url: 'http://localhost:3000/orders/',
          body: { productId: 'ID', quantity: 'Number' },
        },
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err,
      });
    });
});
module.exports = router;
