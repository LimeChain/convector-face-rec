import { Application } from 'express';
import barcodeRouter from './api/controllers/barcode/router'
export default function routes(app: Application): void {
  app.use('/api/v1/barcode', barcodeRouter);
};