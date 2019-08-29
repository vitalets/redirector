# Redirector
JS redirect to provided http url and possibly open native app.

## Example
Imagine you want to redirect user to https://vk.com/test, 
but if possible open it in native VK app.

1. Get corresponding deeplink urls from here: https://app.urlgeni.us/
  - ios: `vk://vk.com/test`
  - android: `intent://vk.com/test#Intent;package=com.vkontakte.android;scheme=vkontakte;end`

2. Build redirector url:
   ```js
   const url = '' +
    '?web=' + encodeURIComponent('https://vk.com/test') +
    '&ios=' + encodeURIComponent('vk://vk.com/test') +
    '&android=' + encodeURIComponent('intent://vk.com/test#Intent;package=com.vkontakte.android;scheme=vkontakte;end');
   ```
3. Test it: https://vitalets.github.io/redirector/index.html?web=https%3A%2F%2Fexample.com&ios=app%3A%2F%2Fexample.com&android=intent%3A%2F%2Fexample.com%23Intent%3Bpackage%3Dcom.example.android%3Bscheme%3Dexample%3Bend;
