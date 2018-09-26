//running inside "browser"

let statusHeader = document.getElementById("status-header");

if (typeof process !== 'undefined') {
    const {
        remote
    } = require('electron')

    statusHeader.innerHTML = "We are using Node.js " +
        process.versions.node +
        ", Chromium " +
        process.versions.chrome +
        ", and Electron " +
        process.versions.electron +
        " .";

    document.getElementById("close-btn").addEventListener("click", function (e) {
        var currentWindow = remote.getCurrentWindow();
        currentWindow.close();
    });
} else {
    statusHeader.innerHTML = "Warning: Not running with Electron. Full functionality can not be guaranteed."
}

setTimeout(() => window.location.replace("index.html"), 1000)
