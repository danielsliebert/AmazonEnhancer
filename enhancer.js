function onError(error) {
    console.log('Error: $(error)');
}

var inserting = browser.tabs.insertCSS({file: "enhanced.css"});
inserting.then(null, onError);

