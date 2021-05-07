const express = require('express');
const router = express.Router();
const controller = require('../controllers/HorseController')
const authenticateJWT = require('../security/authenticateJWT');


router.route('/')
    .get(authenticateJWT, controller.get)
    .post(authenticateJWT, controller.post);

router.route('/:id').
    get(authenticateJWT, controller.getById).
    put(authenticateJWT, controller.put).
    delete(authenticateJWT, controller.delete);

router.route('/name/:name').
    get(authenticateJWT, controller.getByName);

router.route('/parent/:name').
    get(authenticateJWT, controller.getByParents);

module.exports = router;