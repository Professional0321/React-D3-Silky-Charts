import flatten from 'ramda/src/flatten';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/**
 * Utility function that tranforms a given object into a valid Silky Charts data
 * list based on series where you can also pass an option list of series names
 * to be omitted from the final data list.
 *
 * Example:
 *
 * -- Input
 * {
 *   foo: { bar: 0, baz: 1, qux: 2 },
 *   bar: { bar: 3, baz: 4, qux: 5 },
 *   baz: { bar: 6, baz: 7, qux: 8 },
 * }
 *
 * -- Output
 * [
 *   { name: 'foo', series: 'bar', value: 0 },
 *   { name: 'foo', series: 'baz', value: 1 },
 *   { name: 'foo', series: 'qux', value: 2 },
 *   { name: 'bar', series: 'bar', value: 3 },
 *   { name: 'bar', series: 'baz', value: 4 },
 *   { name: 'bar', series: 'qux', value: 5 },
 *   { name: 'baz', series: 'bar', value: 6 },
 *   { name: 'baz', series: 'baz', value: 7 },
 *   { name: 'baz', series: 'qux', value: 8 },
 * ]
 *
 * @param {Object} dataset Data to be transformed.
 * @param {Array} omit List of string with the names of the series to ammited.
 * @returns {Array} Data list.
 */

var toSeries = (function (dataset) {
  var omit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return flatten(Object.keys(dataset).map(function (name) {
    return Object.entries(dataset[name]).reduce(function (acc, _ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          series = _ref2[0],
          value = _ref2[1];

      if (!omit.includes(series)) {
        acc.push({
          name: name,
          series: series,
          value: parseInt(value)
        });
      }

      return acc;
    }, []);
  }));
});

export { _toConsumableArray as a, _slicedToArray as b, _defineProperty as c, _objectSpread as d, _taggedTemplateLiteral as e, _extends as f, toSeries as g };
//# sourceMappingURL=chunk-f3591dd7.js.map
