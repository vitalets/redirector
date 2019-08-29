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
   const url = 'https://vitalets.github.io/redirector/index.html' +
    '?web=' + encodeURIComponent('https://vk.com/test') +
    '&ios=' + encodeURIComponent('vk://vk.com/test') +
    '&android=' + encodeURIComponent('intent://vk.com/test#Intent;package=com.vkontakte.android;scheme=vkontakte;end');
   ```
3. [Try it](https://vitalets.github.io/redirector/index.html?web=https%3A%2F%2Fvk.com%2Ftest&ios=vk%3A%2F%2Fvk.com%2Ftest&android=intent%3A%2F%2Fvk.com%2Ftest%23Intent%3Bpackage%3Dcom.vkontakte.android%3Bscheme%3Dvkontakte%3Bend)
   ```
   https://vitalets.github.io/redirector/index.html?web=https%3A%2F%2Fvk.com%2Ftest&ios=vk%3A%2F%2Fvk.com%2Ftest&android=intent%3A%2F%2Fvk.com%2Ftest%23Intent%3Bpackage%3Dcom.vkontakte.android%3Bscheme%3Dvkontakte%3Bend
   ```
