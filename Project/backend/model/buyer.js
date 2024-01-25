import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';


const buyerSchema = mongoose.Schema({
    name: String,
    adress_pincode :Number ,
    
});


autoIncrement.initialize(mongoose.connection);

buyerSchema.plugin(autoIncrement.plugin, 'buyer');
// we need to turn it into a model
const buyer = mongoose.model('buyer', buyerSchema);

export default buyer;