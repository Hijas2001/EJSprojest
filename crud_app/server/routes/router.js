const express=require("express");
const router = express.Router()

const services  = require('../services/render')
const controller=require('../controller/controller')

// Define a route
/**
 * @discription root route
 * @method Get /
 */
router.get('/', services.homeRouter);

/**
 * @discription for add user
 * @method Get / add_user
 */
router.get('/add-user',services.add_use);

/**
 * @discription for update user
 * @method Get / update_user
 */
router.get('/update-user', services.update_user);

//Api
router.post('/api/users',controller.create);
router.get('/api/users',controller.find);
router.search('/api/users',controller.search);
router.put('/api/users/:id',controller.update);
router.delete('/api/users/:id',controller.delete);



module.exports=router;

