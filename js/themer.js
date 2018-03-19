/* if (clean == true)
 * load clean.js

switch (theme)
    theme=  ""
*/

var theme = "dark.css"

document.addEventListener('DOMSubtreeModified', injectCSS, false);

function injectCSS() {
    if (document.head) {
        document.removeEventListener('DOMSubtreeModified', injectCSS, false);

        var link = document.createElement("link");
        link.href = chrome.extension.getURL(theme);
        link.type = "text/css";
        link.rel = "stylesheet";
        document.getElementsByTagName("head")[0].appendChild(link);
    }
}


