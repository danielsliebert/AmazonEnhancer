function saveOptions(e) {
    e.preventDefault();
    browser.storage.local.set({
        dark: document.querySelector("#dark").checked,
        clean: document.querySelector("#clean").checked
    });
}

function restoreOptions() {


    function restoreDark(result) {
        document.querySelector("#dark").checked = result.dark || false;
    }

    function restoreClean(result) {
        document.querySelector("#clean").checked = result.clean || false;
    }

    function onError(error) {
        console.log(`Error: ${error}`);
    }

    browser.storage.local.get("dark").then(restoreDark, onError);
    browser.storage.local.get("clean").then(restoreClean, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
