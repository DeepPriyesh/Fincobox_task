import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';


const pincodeSchema = mongoose.Schema({
    sourcePincode: Number,
    destinationPincode : Number,
    paymentMode:{
        type:String,
        enum:["cod", "prepaid", "both"]
    }
});


// autoIncrement.initialize(mongoose.connection);

// pincodeSchema.plugin(autoIncrement.plugin, 'pincode');
// we need to turn it into a model
const pincode = mongoose.model('pincode', pincodeSchema);

export default pincode;