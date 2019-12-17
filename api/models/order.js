const mongoose = require('mongoose');
const orderSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  product: { type: mongoose.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, default: 1 },
});

module.exports = mongoose.model('Order', orderSchema);
