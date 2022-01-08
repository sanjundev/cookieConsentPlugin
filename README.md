# cookieConsentPlugin
Cookie consent plugin helps you easily integrate the cookie consent banner on any kind of websites.

# how to use
Place the css and js files to your project folder.

import the files in your project after the jquery files.

Note: you must have jquery support to your project.

```javascript
<link rel="stylesheet" href="./cookie.css" >
<script src="./icCookieConsent.js" ></script>

<script>

    (function ( $ ) {

        $( "a" ).icCookieConsent({
            color: "#556b2f",
            cookieContent: "We use cookies in this website to give you the best experience on oursite and show you relevant ads. To find out more, read our",
            backgroundColor: "white",
            cookiePolicyLink: '#',
            buttonText: 'Accept Cookies'
        });

    }( jQuery ));

</script>

```
