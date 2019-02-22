"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var yup = require("yup");
var convector_core_model_1 = require("@worldsibu/convector-core-model");
var Barcode = (function (_super) {
    tslib_1.__extends(Barcode, _super);
    function Barcode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'io.limechain.barcodes';
        return _this;
    }
    tslib_1.__decorate([
        convector_core_model_1.ReadOnly(),
        convector_core_model_1.Required()
    ], Barcode.prototype, "type", void 0);
    tslib_1.__decorate([
        convector_core_model_1.ReadOnly(),
        convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.date())
    ], Barcode.prototype, "created", void 0);
    tslib_1.__decorate([
        convector_core_model_1.ReadOnly(),
        convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.string())
    ], Barcode.prototype, "image", void 0);
    tslib_1.__decorate([
        convector_core_model_1.ReadOnly(),
        convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.string())
    ], Barcode.prototype, "creatorSignature", void 0);
    return Barcode;
}(convector_core_model_1.ConvectorModel));
exports.Barcode = Barcode;
//# sourceMappingURL=barcode.model.js.map