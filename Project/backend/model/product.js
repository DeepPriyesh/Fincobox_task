import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';


const productSchema = mongoose.Schema({
    productName: String,
    inventory : Number,
    price : Number,
    pickUpAdress_pincode : Number
    
});


autoIncrement.initialize(mongoose.connection);

productSchema.plugin(autoIncrement.plugin, 'product');
// we need to turn it into a model
const product = mongoose.model('product', productSchema);

export default product;