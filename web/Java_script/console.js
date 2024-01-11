function getCurrentTime() {
    var now = new Date();
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');
    return hours + ':' + minutes + ':' + seconds;
}
(function () {
    var oldLog = console.log;
    var consoleDiv = document.getElementById('console');

    console.log = function () {
        oldLog.apply(console, arguments);

        var logMessage = Array.from(arguments).map(arg => JSON.stringify(arg)).join(' ');
        var currentTime = getCurrentTime();

        var logElement = document.createElement('div');
        logElement.textContent = `[${currentTime}] > ${logMessage}`;
        logElement.classList.add('logMessage');

        setTimeout(function () {
            logElement.classList.add('show');
        }, 0);

        if (consoleDiv.firstChild) {
            consoleDiv.insertBefore(logElement, consoleDiv.firstChild);
        } else {
            consoleDiv.appendChild(logElement);
        }

        var maxMessages = 50;
        if (consoleDiv.children.length > maxMessages) {
            consoleDiv.removeChild(consoleDiv.children[maxMessages]);
        }
    };
})();