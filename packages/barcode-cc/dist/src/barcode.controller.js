"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var yup = require("yup");
var convector_core_controller_1 = require("@worldsibu/convector-core-controller");
var barcode_model_1 = require("./barcode.model");
var BarcodeController = (function (_super) {
    tslib_1.__extends(BarcodeController, _super);
    function BarcodeController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BarcodeController.prototype.create = function (image, barcode) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var b;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        b = new barcode_model_1.Barcode({ id: barcode, image: image, creatorSignature: this.sender, created: new Date() });
                        return [4, b.save()];
                    case 1:
                        _a.sent();
                        return [2, b];
                }
            });
        });
    };
    BarcodeController.prototype.getImageByBarcode = function (barcode) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2, barcode_model_1.Barcode.getOne(barcode)];
            });
        });
    };
    BarcodeController.prototype.getAllImages = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2, barcode_model_1.Barcode.getAll()];
            });
        });
    };
    tslib_1.__decorate([
        convector_core_controller_1.Invokable(),
        tslib_1.__param(0, convector_core_controller_1.Param(yup.string())),
        tslib_1.__param(1, convector_core_controller_1.Param(yup.string()))
    ], BarcodeController.prototype, "create", null);
    tslib_1.__decorate([
        convector_core_controller_1.Invokable(),
        tslib_1.__param(0, convector_core_controller_1.Param(yup.string()))
    ], BarcodeController.prototype, "getImageByBarcode", null);
    tslib_1.__decorate([
        convector_core_controller_1.Invokable()
    ], BarcodeController.prototype, "getAllImages", null);
    BarcodeController = tslib_1.__decorate([
        convector_core_controller_1.Controller('barcode')
    ], BarcodeController);
    return BarcodeController;
}(convector_core_controller_1.ConvectorController));
exports.BarcodeController = BarcodeController;
//# sourceMappingURL=barcode.controller.js.map