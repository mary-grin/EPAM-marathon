const createPath = require('../helpers/createPath');
const Request = require('../modules/requests');

const handleError = (res, error) => {
    console.log(error);
    res.render(createPath('index'), {title: 'Error'});
};

const insertRequest = (req, res) => {
    const status = 'NEW';
    const {name, email, phone} = req.body;
    const request = new Request({name, email, phone, status});
    request
    .save()
    .then(res.render(createPath('success'), {title: 'Successfully', request}))
    .catch((error) => handleError(res, error));
};

const getAllRequests = (req, res) => {
    const title = 'Admin panel';
    Request
    .find()
    .then((requests) => res.render(createPath('check_request'), {requests, title}))
    .catch((error) => handleError(res, error));
};

const deleteRequest = (req, res) => {
    Request
    .findByIdAndDelete(req.params.id)
    .then(result => {
        res.sendStatus(200);
    })
    .catch((error) => handleError(res, error));
};

const inProcess = (req, res) => {
    const { id } = req.params;
    const status = 'IN PROCESS';
    Request
    .findByIdAndUpdate(id, {status})
    .then(result => {
        res.sendStatus(200);
    })
    .catch((error) => handleError(res, error));
};

const done = (req, res) => {
    const { id } = req.params;
    const status = 'DONE';
    Request
    .findByIdAndUpdate(id, {status})
    .then(result => {
        res.sendStatus(200);
    })
    .catch((error) => handleError(res, error));
};

const getRequest = (req, res) => {
    const title = 'Your request';
    const {phone} = req.body;
    Request
    .find({phone: phone})
    .then((requests) => res.render(createPath('info_user'), {requests, title}))
    .catch((error) => handleError(res, error));
};

const getCheckPage = (req, res) => {
    const title = 'Check request';
    res.render(createPath('check_phone'), {title});
};

const getInfoUser = (req, res) => {
    const title = 'Info request';
    Request
    .find()
    .then((requests) => res.render(createPath('info_user'), {requests, title}))
    .catch((error) => handleError(res, error));
};

const getLoginPage = (req, res) => {
    const title = 'Log in';
    res.render(createPath('login'), {title});
};

const login = (req, res) => {
    const title = 'Admin Panel';
    const _login = 'admin';
    const _password = 'admin';
    const {login, password} = req.body;
    if(_login === login && _password === password) {
        Request
        .find()
        .then((requests) => {
            res.render(createPath('check_request'), {title, requests});
        })
        .catch((error) => handleError(res, error));
    } else {
        res.render(createPath('login'), {title});
    } 
};

module.exports = {
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
};