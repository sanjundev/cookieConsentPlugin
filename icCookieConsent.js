



$.fn.icCookieConsent = function( options ) {

    let container = $('<div>', {
        id: 'cookieConsent',
        class: 'cookie-container'
    }).appendTo('body');

    var settings = $.extend({
        // These are the defaults.
        color: "#556b2f",
        cookieContent: "We use cookies in this website to give you the best experience on oursite and show you relevant ads.",
        backgroundColor: "white",
        cookiePolicyLink: '',
        buttonText: 'Okay'
    }, options );

    const cookieContainer = document.querySelector(".cookie-container");

    setTimeout(() => {
        if (!localStorage.getItem("cookieBannerDisplayed")) {
            cookieContainer.classList.add("active");
        }
    }, 2000);

    // This is the easiest way to have default options.

    let cookieContent = $('<p>', {
        html: settings.cookieContent
    }).appendTo(container);

    let cookieButtonOK = $('<button>', {
        class: 'cookie-btn',
        html: settings.buttonText
    }).appendTo(container);


    if(settings.cookiePolicyLink != '') {
        let Cookielinks = $('<a>', {
            class: 'privacy-link',
            href: '#',
            html: 'Read More'
        }).appendTo(cookieContent);
    }


    const cookieButton = document.querySelector(".cookie-btn");
    cookieButton.addEventListener("click", () => {
        cookieContainer.classList.remove("active");
        localStorage.setItem("cookieBannerDisplayed", "true");
    });

    // this.css({
    //     color: settings.color,
    //     backgroundColor: settings.backgroundColor
    // });

    return this;

};


