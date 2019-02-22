import * as yup from 'yup';
import {
  Controller,
  ConvectorController,
  Invokable,
  Param
} from '@worldsibu/convector-core-controller';

import { Barcode } from '../src/barcode.model';
import { ControllerAdapter } from '@worldsibu/convector-core-adapter';


export class BarcodeControllerClient extends ConvectorController {
  public name = 'barcode';

  constructor(public adapter: ControllerAdapter, public user?: string) {
    super()
  }

  
  public async create(
    
    image: string,
    
    barcode: string
  ): Promise<Barcode> {

          return await this.adapter.invoke(this.name, 'create', this.user, image, barcode);
        
  }

  
  public async getImageByBarcode(
    
    barcode: string
  ): Promise<Barcode> {

          return await this.adapter.invoke(this.name, 'getImageByBarcode', this.user, barcode);
        
  }


  
  public async getAllImages(): Promise<Barcode[]> {

          return await this.adapter.invoke(this.name, 'getAllImages', this.user, );
        
  }
}