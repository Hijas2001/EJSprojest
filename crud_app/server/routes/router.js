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
router.get('/search', services.search_user);

//Api
router.post('/api/users',controller.create);
router.get('/api/users',controller.find);
router.put('/api/users/:id',controller.update);
router.delete('/api/users/:id',controller.delete);


router.get('/api/users/search', controller.search);


module.exports=router;

