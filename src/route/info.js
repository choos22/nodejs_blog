import express from 'express';

import homeController from '../controller/homeController';

let router = express.Router();

const initWeb = (app) => {

    router.get('/product/:name', homeController.getInformation)
}

export default initWeb