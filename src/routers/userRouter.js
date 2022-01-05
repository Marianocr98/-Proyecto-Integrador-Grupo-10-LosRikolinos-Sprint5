const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const {body} = require('express-validator');



//Requiero userController
const userController = require('../controllers/userController');


//REQUIRIENDO Middlewares 
const logRegisterMiddleware = require('../middlewares/logRegisterMiddleware');

const multerUpFile = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validationForm');





//RUTAS HACIA EL CONTROLLER
router.get('/login', userController.login);
router.get('/register', userController.register);

//router.post('/access', userController.access);

//router.post('/save', userController.save);

/* Procesa el registro*/
router.post('/register', multerUpFile.single('avatar'),logRegisterMiddleware, validations, userController.processRegister);

router.get('/profile/:userId', userController.profile);


module.exports = router;