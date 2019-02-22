import { ConvectorModel } from '@worldsibu/convector-core-model';
export declare class Barcode extends ConvectorModel<Barcode> {
    readonly type: string;
    created: Date;
    image: string;
    creatorSignature: any;
}
