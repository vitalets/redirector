"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Opens webpage and also tries to open mobile app.
 * Reads from url the following params:
 * - web: webpage http url
 * - ios: iosApp url
 * - android: android app url
 */
main();

function main() {
  attachErrorListener();
  var urlParams = getUrlParams(); // always open web page as fallback

  if (urlParams.web) {
    setTimeout(function () {
      return location.href = urlParams.web;
    }, 500);
  } else {
    throw new Error("No \"web\" parameter found in url: ".concat(location.href));
  } // try open ios app


  if (urlParams.ios && isIos()) {
    location.href = urlParams.ios;
  } // try open android app


  if (urlParams.android && isAndroid()) {
    location.href = urlParams.android;
  }
}

function attachErrorListener() {
  window.addEventListener('error', function (event) {
    document.getElementById('error').textContent = event.error.message;
  });
} // see: https://stackoverflow.com/questions/6031412/detect-android-phone-via-javascript-jquery


function isAndroid() {
  return /android/i.test(navigator.userAgent);
} // see: https://stackoverflow.com/questions/9038625/detect-if-device-is-ios


function isIos() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}

function getUrlParams() {
  var query = location.search.replace(/^\?/, '');
  var pairs = query.split('&').filter(Boolean);
  return pairs.reduce(function (res, pair) {
    var _pair$split = pair.split('='),
        _pair$split2 = _slicedToArray(_pair$split, 2),
        key = _pair$split2[0],
        value = _pair$split2[1];

    if (key) {
      res[key] = decodeURIComponent(value);
    }

    return res;
  }, {});
}
