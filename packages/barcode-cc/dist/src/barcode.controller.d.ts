import { ConvectorController } from '@worldsibu/convector-core-controller';
import { Barcode } from './barcode.model';
export declare class BarcodeController extends ConvectorController {
    create(image: string, barcode: string): Promise<Barcode>;
    getImageByBarcode(barcode: string): Promise<Barcode>;
    getAllImages(): Promise<Barcode[]>;
}
