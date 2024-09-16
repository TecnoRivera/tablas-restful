var express = require('express');
var router = express.Router();
const controller = require('../controllers/users');

router.post('/', controller.create);

router.get('/:n1/:n2', controller.index);

router.put('/', controller.replace);

router.patch('/', controller.update);

router.delete('/:n1/:n2', controller.destroy);

module.exports = router;
