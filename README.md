# Redirector
JS redirect to provided http url and possibly open native app.

## Example
Imagine you want to redirect user to https://vk.com/buzovaofficial, 
but if possible open it in native VK app.

1. Get corresponding deeplink urls from here: https://app.urlgeni.us/
  - ios: `vk://vk.com/buzovaofficial`
  - android: `intent://vk.com/buzovaofficial#Intent;package=com.vkontakte.android;scheme=vkontakte;end`

2. Build redirector url:
   ```js
   const url = 'https://vitalets.github.io/redirector' +
    '?web=' + encodeURIComponent('https://vk.com/buzovaofficial') +
    '&ios=' + encodeURIComponent('vk://vk.com/buzovaofficial') +
    '&android=' + encodeURIComponent('intent://vk.com/buzovaofficial#Intent;package=com.vkontakte.android;scheme=vkontakte;end');
   ```
   Result:
   ```
   https://vitalets.github.io/redirector?web=https%3A%2F%2Fvk.com%2Fbuzovaofficial&ios=vk%3A%2F%2Fvk.com%2Fbuzovaofficial&android=intent%3A%2F%2Fvk.com%2Fbuzovaofficial%23Intent%3Bpackage%3Dcom.vkontakte.android%3Bscheme%3Dvkontakte%3Bend
   ```
   
3. [Open this link on ios, android or desktop](https://vitalets.github.io/redirector?web=https%3A%2F%2Fvk.com%2Fbuzovaofficial&ios=vk%3A%2F%2Fvk.com%2Fbuzovaofficial&android=intent%3A%2F%2Fvk.com%2Fbuzovaofficial%23Intent%3Bpackage%3Dcom.vkontakte.android%3Bscheme%3Dvkontakte%3Bend)

