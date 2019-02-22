import * as yup from 'yup';
import {
  Controller,
  ConvectorController,
  Invokable,
  Param
} from '@worldsibu/convector-core-controller';

import { Barcode } from './barcode.model';

@Controller('barcode')
export class BarcodeController extends ConvectorController {
  @Invokable()
  public async create(
    @Param(yup.string())
    image: string,
    @Param(yup.string())
    barcode: string
  ): Promise<Barcode> {
    const b = new Barcode({ id: barcode, image: image, creatorSignature: this.sender, created: new Date() })
    await b.save();
    return b
  }

  @Invokable()
  public async getImageByBarcode(
    @Param(yup.string())
    barcode: string
  ): Promise<Barcode> {
    return Barcode.getOne(barcode)
  }


  @Invokable()
  public async getAllImages(): Promise<Barcode[]> {
    return Barcode.getAll()
  }
}