function loadDarkTheme() {
    if (browser.storage.local.get("theme"))


}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
