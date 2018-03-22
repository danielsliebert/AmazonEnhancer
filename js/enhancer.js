function loadDark() {
    function getCSS(result) {
        if (result.dark) {
            var link = document.createElement("link");
            link.href = chrome.extension.getURL("../css/dark.css");
            link.type = "text/css";
            link.rel = "stylesheet";
            document.getElementsByTagName("head")[0].appendChild(link);
        }
    }

    function onError(error) {
        console.log(`Error: ${error}`);
    }

    var getting = browser.storage.local.get("dark");
    getting.then(getCSS, onError);
}

function loadClean() {
    function getCSS(result) {
        if (result.clean) {
            var link = document.createElement("link");
            link.href = chrome.extension.getURL("../css/clean.css");
            link.type = "text/css";
            link.rel = "stylesheet";
            document.getElementsByTagName("head")[0].appendChild(link);
        }
    }

    function onError(error) {
        console.log(`Error: ${error}`);
    }

    var getting = browser.storage.local.get("clean");
    getting.then(getCSS, onError);
}

loadDark();
loadClean();
