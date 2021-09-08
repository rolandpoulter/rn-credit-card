"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactHookForm = require("react-hook-form");

var _reactNative = require("react-native");

var _TextField = _interopRequireDefault(require("./TextField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const FormTextField = /*#__PURE__*/_react.default.forwardRef((props, ref) => {
  const {
    name,
    rules,
    validationLength = 1,
    formatter,
    onBlur,
    onValid,
    disabled,
    ...restOfProps
  } = props;
  const {
    control,
    formState,
    trigger,
    watch
  } = (0, _reactHookForm.useFormContext)();
  const value = watch(name);
  (0, _react.useEffect)(() => {
    async function validate() {
      const isValid = await trigger(name);
      if (isValid) onValid === null || onValid === void 0 ? void 0 : onValid();
    }

    if (value.length >= validationLength) {
      validate();
    }
  }, [value, name, validationLength, trigger]); // eslint-disable-line react-hooks/exhaustive-deps

  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      display: disabled ? 'none' : 'flex'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactHookForm.Controller, {
    control: control,
    render: ({
      field
    }) => {
      var _formState$errors$nam;

      return /*#__PURE__*/_react.default.createElement(_TextField.default // passing everything down to TextField
      // to be able to support all TextInput props
      , _extends({}, restOfProps, {
        disabled: disabled,
        ref: ref,
        testID: `TextField.${name}`,
        errorText: (_formState$errors$nam = formState.errors[name]) === null || _formState$errors$nam === void 0 ? void 0 : _formState$errors$nam.message,
        onBlur: event => {
          if (disabled) {
            return;
          }

          field.onBlur();
          onBlur === null || onBlur === void 0 ? void 0 : onBlur(event);
        },
        onChangeText: text => {
          if (disabled) {
            return;
          }

          const formatted = formatter ? formatter(field.value, text) : text;
          field.onChange(formatted);

          if (props.onChange) {
            props.onChange(formatted, text);
          }
        },
        value: field.value
      }));
    },
    name: name,
    rules: rules
  }));
});

var _default = FormTextField;
exports.default = _default;
//# sourceMappingURL=FormTextField.js.map