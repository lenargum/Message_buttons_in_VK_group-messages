const jsLocation = "./static/js/bundle.js";
const cssLocation = null;

browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete") {
        if (jsLocation !== null) {
            browser.tabs.executeScript(tabId, {
                file: jsLocation,
                runAt: "document_end"
            });
        }

        if (cssLocation !== null) {
            browser.tabs.insertCSS(tabId, {
                file: cssLocation,
                runAt: "document_end"
            });
        }
    }
});