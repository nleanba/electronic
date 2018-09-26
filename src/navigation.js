//running inside "browser"

if (typeof process !== 'undefined') {
    const {
        remote
    } = require('electron')

    document.getElementById("min-btn").addEventListener("click", () => {
        var window = remote.getCurrentWindow();
        window.minimize();
    });

    document.getElementById("max-btn").addEventListener("click", () => {
        var window = remote.getCurrentWindow();
        if (!window.isMaximized()) {
            window.maximize();
        } else {
            window.unmaximize();
        }
    });

    document.getElementById("close-btn").addEventListener("click", () => {
        var window = remote.getCurrentWindow();
        window.close();
    });

    document.getElementById("chrome-logo").addEventListener("click", () => {
        window.location.href = "index.html";
    });
}
