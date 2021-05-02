const express = require('express');
const router = express.Router();
const controller = require('../controllers/HorseController')

router.get('/', controller.get);
router.get('/:id', controller.getById);
router.get('/name/:name', controller.getByName);
router.get('/parent/:name', controller.getByParents);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

module.exports = router;