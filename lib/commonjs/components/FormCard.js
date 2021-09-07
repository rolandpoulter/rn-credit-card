"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Card = _interopRequireDefault(require("./Card"));

var _reactHookForm = require("react-hook-form");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const FormCard = ({
  cardType,
  focusedField
}) => {
  const {
    watch
  } = (0, _reactHookForm.useFormContext)();
  const model = watch();
  return /*#__PURE__*/_react.default.createElement(_Card.default, {
    cardType: cardType,
    focusedField: focusedField,
    model: {
      cardNumber: model.cardNumber,
      expiration: model.expiration,
      holderName: model.holderName,
      cvv: model.cvv
    }
  });
};

var _default = FormCard;
exports.default = _default;
//# sourceMappingURL=FormCard.js.map