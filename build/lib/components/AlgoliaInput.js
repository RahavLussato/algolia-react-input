'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUiLib = require('material-ui/lib/');

var AlgoliaInput = (function (_Component) {
  _inherits(AlgoliaInput, _Component);

  _createClass(AlgoliaInput, null, [{
    key: 'propTypes',
    value: {
      client: _react.PropTypes.object.isRequired,
      index: _react.PropTypes.string.isRequired,
      options: _react.PropTypes.object,
      onResults: _react.PropTypes.func.isRequired,
      onError: _react.PropTypes.func,
      onEmptyField: _react.PropTypes.func, // when user empty the field
      className: _react.PropTypes.string,
      style: _react.PropTypes.object,
      placeholder: _react.PropTypes.string
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      options: {},
      placeholder: null
    },
    enumerable: true
  }]);

  function AlgoliaInput() {
    _classCallCheck(this, AlgoliaInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _get(Object.getPrototypeOf(AlgoliaInput.prototype), 'constructor', this).apply(this, args);
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  _createClass(AlgoliaInput, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.index = this.props.client.initIndex(this.props.index);
    }
  }, {
    key: 'onKeyUp',
    value: function onKeyUp(e) {
      var _this = this;

      if (e.target.value) {
        this.index.search(e.target.value, this.props.options, function (err, content) {
          if (err && _this.props.onError) {
            _this.props.onError(err);
          }
          if (content) {
            _this.props.onResults(content);
          }
        });
      } else if (this.props.onEmptyField) {
        this.props.onEmptyField();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_materialUiLib.TextField, { style: this.props.style || { WebkitUserSelect: 'auto', userSelect: 'auto' }, onKeyDown: this.onKeyUp, hintText: this.props.placeholder, className: this.props.className || 'algolia-react-input' })
      );
    }
  }]);

  return AlgoliaInput;
})(_react.Component);

exports['default'] = AlgoliaInput;
;
module.exports = exports['default'];