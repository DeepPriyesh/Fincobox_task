import Buyer from '../model/buyer.js';
import Product from '../model/product.js';
import Pincode from '../model/pincodeService.js';
import Order from '../model/order.js';

export const addBuyer = async (request, response) => {
    const buyer = request.body;
    
    const newBuyer = new Buyer(buyer);
    try{
        await newBuyer.save();
        response.status(201).json(newBuyer);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

export const addProduct = async (request, response) => {
    const product = request.body;
    
    const newProduct = new Product(product);
    try{
        await newProduct.save();
        response.status(201).json(newProduct._id);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

export const addPincodeService = async (request, response) => {
    const pincode = request.body;
    
    const newPincode = new Pincode(pincode);
    try{
        await newPincode.save();
        response.status(201).json(newPincode);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

export const addorder = async (request, response) => {
    const order = request.body;
    
    const orderQuantity = order.quantity;
    const availableQuantity =  await Product.findById(order.productId);   
     
    if(orderQuantity>availableQuantity.inventory)
    throw new Error("Order failed because product stock is insufficient")

    const buyer_details = await Buyer.findById(order.buyerId)
    const buyer_pincode = buyer_details.adress_pincode;

    const product_details = await Product.findById(order.buyerId)
    const product_pincode = product_details.pickUpAdress_pincode;

    const details = Pincode.find( {
        $and: [
           { $match: { sourcePincode : product_pincode } },
           { $match: { destinationPincode : buyer_pincode } }
        ]
     } )

     if(!details)
     throw new Error("Order failed because pincode is unserviceable");



    const newOrder = new Order(order);
    try{
        await newOrder.save();
        response.status(201).json(newOrder);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}