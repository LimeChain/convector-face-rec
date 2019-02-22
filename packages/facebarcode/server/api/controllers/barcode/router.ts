import express from 'express';
import controller from './controller'
export default express.Router()
    .post('/', controller.save)
    .get('/', controller.all)
    .get('/:barcode', controller.byBarcode);