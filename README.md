# Fincobox_task
A Ecommerce Backend made in Javascript, Node.Js, Express.Js
# How to start

Open the file in the IDE , open the terminal , go to the "backend" folder 
Type npm start 

Backend will be deployed on localhost 8000 and here are the end points and request body examples,

1.Create Buyer (POST)
http://localhost:8000/addBuyer
{
    "name": "xyz",
    "adress_pincode" : 700093
}

2.Create Product (POST)
http://localhost:8000/addProduct
{
   "productName": "abc",
    "inventory" : 123,
    "price" : 100,
    "pickUpAdress_pincode" : 70093
}

3.Create Pincode Servicability (POST)
http://localhost:8000/pincodeService
{
   "sourcePincode": 700093,
    "destinationPincode" : 700094,
    paymentMode :"prepaid"
}

4.Create Order (POST)
http://localhost:8000/addOrder
{
    "buyerId": "0",
    "productId" : "0",
    "quantity" : 1,
    "paymentMode" : "prepaid"
}
