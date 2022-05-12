const express = require('express');
const router = express.Router();

const {
    insertRequest,
    getAllRequests,
    deleteRequest,
    inProcess,
    done,
    getRequest,
    getCheckPage,
    getInfoUser,
    getLoginPage,
    login
} = require('../controllers/controller');

router.post('/', insertRequest);
router.get('/check', getAllRequests);
router.delete('/check/:id', deleteRequest);
router.post('/in_process/:id', inProcess);
router.post('/done/:id', done);
router.post('/check_phone', getRequest);
router.get('/check_phone', getCheckPage);
router.get('/info_user', getInfoUser);
router.get('/login', getLoginPage);
router.post('/login', login);

module.exports = router;