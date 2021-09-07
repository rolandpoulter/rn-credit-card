import React from 'react';

const Conditional = props => {
  const {
    condition,
    children,
    fallback = null
  } = props;
  if (condition) return /*#__PURE__*/React.createElement(React.Fragment, null, children);
  return /*#__PURE__*/React.createElement(React.Fragment, null, fallback);
};

export default Conditional;
//# sourceMappingURL=Conditional.js.map