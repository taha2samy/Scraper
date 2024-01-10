require.config({ paths: { 'vs': 'https://cdn.jsdelivr.net/npm/monaco-editor@0.31.1/min/vs' } });
require(['vs/editor/editor.main'], function () {
    var editor = monaco.editor.create(document.getElementById('editor'), {
        value: [
            `console.log("||||||| Welcome to Scraper |||||||||||");`,
            `let doc=document.getElementById("page");`,
            ''
        ].join('\n'),
        language: 'javascript',
        fontSize: 22,
        fontWeight: 'bold',
   
    });

    // Set 100% width and height, and change background color
    editor.getDomNode().style.width = '50%';
    editor.getDomNode().style.height = '100%';
    
 
}, function (error) {
    console.error('Monaco Editor failed to load:', error);
});

// Function to show notification messages
function showMessage(messageText) {
    var messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerText = messageText;

    document.getElementById('messageContainer').appendChild(messageElement);

    void messageElement.offsetWidth;
    messageElement.classList.add('show');

    setTimeout(function () {
        messageElement.classList.remove('show');
        setTimeout(function () {
            document.getElementById('messageContainer').removeChild(messageElement);
        }, 500);
    }, 2000);
}

// Event Listener for the "Run" button
document.getElementById("go").addEventListener("click", () => {
    document.getElementById("go").firstElementChild.firstElementChild.setAttribute("src", "loading.svg");
    var iframe = document.getElementsByTagName("iframe")[0];
    iframe.setAttribute("src", document.getElementById("urlTextbox").value);
    iframe.onload = () => {
        document.getElementById("go").firstElementChild.firstElementChild.setAttribute("src", "search.svg");
        showMessage("Page is loaded");
    };
});

// Override console.log to display messages on the page
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

// Event Listener for the "Run" button in the code editor
document.getElementById("execute").addEventListener("click", () => {
    console.log("Executing code");
    const code = monaco.editor.getModels()[0].getValue();
    document.getElementById("execute").firstElementChild.firstElementChild.setAttribute("src", "loading.svg");

    try {
        eval(code);
    } catch (error) {
        console.error('Error during execution:', error);
    } finally {
        showMessage("Code execution completed");
        document.getElementById("execute").firstElementChild.firstElementChild.setAttribute("src", "run.svg");
    }
});

// Event Listener for the toggle button to switch editor position
var toggleButton = document.getElementById("toggleButton");
toggleButton.addEventListener('click', function () {
    var editor = document.getElementById("editorContainer");
    var container = document.getElementById('container');

    if (editor.parentNode === container) {
        container.parentNode.insertBefore(editor, container.nextElementSibling);
        document.getElementById("toggleButton").firstChild.textContent="one side";
        document.getElementById("toggleButton").firstElementChild.firstElementChild.setAttribute("src","arrow_up.svg")
    } else {
        document.getElementById("toggleButton").firstChild.textContent="two side";
        container.insertBefore(editor, container.firstChild);
        document.getElementById("toggleButton").firstElementChild.firstElementChild.setAttribute("src","arrow_down.svg")

    }
});

// Helper function to get current time for console messages
function getCurrentTime() {
    var now = new Date();
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');
    return hours + ':' + minutes + ':' + seconds;
}