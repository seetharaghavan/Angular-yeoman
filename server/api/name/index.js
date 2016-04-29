var express = require( 'express' );

var router = express.Router();
var nameController = require('../name/name.controller.js');

router.get( '/api/names', nameController.create );
router.post('/api/names', nameController.list); 


module.exports = router;
