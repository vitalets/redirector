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

  const urlParams = getUrlParams();

  // always open web page as fallback
  if (urlParams.web) {
    setTimeout(() => location.href = urlParams.web, 0);
  } else {
    throw new Error(`No "web" parameter found in url: ${location.href}`);
  }

  // try open ios app
  if (urlParams.ios && isIos()) {
    location.href = urlParams.ios;
  }

  // try open android app
  if (urlParams.android && isAndroid()) {
    location.href = urlParams.android;
  }
}

function attachErrorListener() {
  window.addEventListener('error', event => {
    document.getElementById('error').textContent = event.error.message;
  });
}

// see: https://stackoverflow.com/questions/6031412/detect-android-phone-via-javascript-jquery
function isAndroid() {
  return /android/i.test(navigator.userAgent);
}

// see: https://stackoverflow.com/questions/9038625/detect-if-device-is-ios
function isIos() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}

function getUrlParams() {
  const query = location.search.replace(/^\?/, '');
  const pairs = query.split('&').filter(Boolean);
  return pairs.reduce((res, pair) => {
    const [key, value] = pair.split('=');
    if (key) {
      res[key] = decodeURIComponent(value);
    }
    return res;
  }, {});
}
