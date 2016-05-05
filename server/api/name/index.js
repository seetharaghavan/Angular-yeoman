'use strict';
var express = require( 'express' );
var router = express.Router();
var nameController = require('../name/name.controller');

router.post( '/add', nameController.create );
router.get('/list', nameController.list);


module.exports = router;
