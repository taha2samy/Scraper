// console.js

function getCurrentTime() {
    var now = new Date();
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');
    return hours + ':' + minutes + ':' + seconds;
}

(function () {
    var oldLog = console.log;
    var oldError = console.error;
    var consoleDiv = document.getElementById('console');

    console.log = function () {
        oldLog.apply(console, arguments);
        handleLog(arguments);
    };

    console.error = function () {
        oldError.apply(console, arguments);
        handleLog(arguments, true);
    };

    function handleLog(args, isError = false) {
        var logMessage = Array.from(args).map(arg => JSON.stringify(arg)).join(' ');
        var currentTime = getCurrentTime();

        var logElement = document.createElement('div');
        logElement.textContent = `[${currentTime}] ${isError ? 'ERROR' : ''} > ${logMessage}`;

        // Adjusted classList.add to avoid adding an empty class
        if (isError) {
            logElement.classList.add('logMessage', 'errorMessage');

            // Check if the first argument is an error object
            if (args.length > 0 && args[0] instanceof Error) {
                var errorType = args[0].name || 'UnknownError';
                logElement.textContent += `\nType: ${errorType}`;

                // If the error object is empty, log its properties
                if (Object.keys(args[0]).length === 0) {
                    logElement.textContent += `\nError Object Properties: Empty object`;
                } else {
                    logElement.textContent += `\nError Object Properties: ${args[0]}`;
                }
            }
        } else {
            logElement.classList.add('logMessage');
        }

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
    }
})();
