function saveOptions(e) {
    e.preventDefault();
    browser.storage.local.set({
        theme: document.querySelector("#theme").checked
    });
}

function restoreOptions() {


    function setCurrentChoice(result) {
        document.querySelector("#theme").checked = result.theme || false;
    }

    function onError(error) {
        console.log(`Error: ${error}`);
    }

    var getting = browser.storage.local.get("theme");
    getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
