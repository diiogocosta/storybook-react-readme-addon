"use strict";

var _react = _interopRequireDefault(require("react"));

var _addons = require("@storybook/addons");

var _components = require("@storybook/components");

var _api = require("@storybook/api");

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

var _remarkGfm = _interopRequireDefault(require("remark-gfm"));

require("github-markdown-css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ADDON_ID = 'readme';
var PANEL_ID = "".concat(ADDON_ID, "/panel");
var PARAM_KEY = 'readme'; // give a unique name for the panel

var Readme = function Readme() {
  var readme = (0, _api.useParameter)(PARAM_KEY, null);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: 'markdown-body'
  }, /*#__PURE__*/_react["default"].createElement(_reactMarkdown["default"], {
    plugins: [_remarkGfm["default"]]
  }, readme ? readme : 'No README.md found'));
};

_addons.addons.register(ADDON_ID, function (api) {
  _addons.addons.add(PANEL_ID, {
    type: _addons.types.PANEL,
    title: 'Readme',
    render: function render(_ref) {
      var active = _ref.active,
          key = _ref.key;
      return /*#__PURE__*/_react["default"].createElement(_components.AddonPanel, {
        active: active,
        key: key
      }, /*#__PURE__*/_react["default"].createElement(Readme, null));
    }
  });
});