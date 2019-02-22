import * as yup from 'yup';
import {
  ConvectorModel,
  Default,
  ReadOnly,
  Required,
  Validate
} from '@worldsibu/convector-core-model';

export class Barcode extends ConvectorModel<Barcode> {
  @ReadOnly()
  @Required()
  public readonly type = 'io.limechain.barcodes';

  @ReadOnly()
  @Required()
  @Validate(yup.date())
  public created: Date;

  @ReadOnly()
  @Required()
  @Validate(yup.string())
  public image: string;

  @ReadOnly()
  @Required()
  @Validate(yup.string())
  public creatorSignature
}