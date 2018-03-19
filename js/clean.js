
document.addEventListener('DOMSubtreeModified', injectCSS, false);

function injectCSS() {
    if (document.head) {
        document.removeEventListener('DOMSubtreeModified', injectCSS, false);

        var link = document.createElement("link");
        link.href = chrome.extension.getURL("../css/clean.css);
        link.type = "text/css";
        link.rel = "stylesheet";
        document.getElementsByTagName("head")[0].appendChild(link);
    }
}

