import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';


const orderSchema = mongoose.Schema({
    buyerId: String,
    productId : String,
    quantity : Number,
    paymentMode : String
    
});


autoIncrement.initialize(mongoose.connection);

orderSchema.plugin(autoIncrement.plugin, 'order');
// we need to turn it into a model
const order = mongoose.model('order', orderSchema);

export default order;