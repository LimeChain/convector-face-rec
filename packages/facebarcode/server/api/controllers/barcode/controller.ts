import { Request, Response } from 'express';
import { BarcodeController } from '../../../smartContractControllers';
import { SHA3 } from 'sha3';


export class Controller {
  async all(req: Request, res: Response): Promise<void> {
    const barcodeController = await BarcodeController.init()
    const allImages = await barcodeController.getAllImages()
    res.json(allImages)
  }

  async byBarcode(req: Request, res: Response): Promise<void> {
    const barcodeController = await BarcodeController.init()
    const barcode = req.params.barcode;
    console.log(barcode)
    const result = await barcodeController.getImageByBarcode(barcode)
    res.json(result)
  }

  async save(req: Request, res: Response): Promise<void> {

    const barcodeController = await BarcodeController.init()
    const image = req.body.image;
    const hash = new SHA3(512);

    hash.update(image);
    const r = hash.digest('hex');
    const b = await barcodeController.create(image, r)
    res.json(b)
  }
}
export default new Controller();
