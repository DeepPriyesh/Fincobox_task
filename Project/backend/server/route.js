import express from 'express';
import { addBuyer,addProduct,addPincodeService,addorder } from '../controller/user-controller.js';

const router = express.Router();


router.post('/addBuyer', addBuyer);
router.post('/addProduct', addProduct);
router.post('/pincodeService', addPincodeService);
router.post('/addOrder', addorder);


export default router;
