"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidInputError = void 0;
var BaseError_1 = require("./BaseError");
var InvalidInputError = /** @class */ (function (_super) {
    __extends(InvalidInputError, _super);
    function InvalidInputError(message) {
        return _super.call(this, message, 417) || this;
    }
    return InvalidInputError;
}(BaseError_1.BaseError));
exports.InvalidInputError = InvalidInputError;
