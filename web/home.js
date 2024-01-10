require.config({ paths: { 'vs': 'https://cdn.jsdelivr.net/npm/monaco-editor@0.31.1/min/vs' } });

require(['vs/editor/editor.main'], function () {
    var editor = monaco.editor.create(document.getElementById('editor'), {
        value: [
            `console.log("||||||| Welcome to Scraper |||||||||||");`,
            `let doc=document.getElementById("page");`,
            ''
        ].join('\n'),
        language: 'javascript',
        fontSize:22,
        fontWeight: 'bold'
    });
    let wid=document.getElementById(editor).parentElement.width
    editor.layout({ width: wid, height: 600 });

}, function (error) {
    // Handle loading error
    console.error('Monaco Editor failed to load:', error);
});


//========================console==============
function getCurrentTime() {
    var now = new Date();
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');
    return hours + ':' + minutes + ':' + seconds;
}

// Override console.log to display messages on the page
(function () {
    var oldLog = console.log;
    var consoleDiv = document.getElementById('console');

    console.log = function () {
        // Call the original console.log
        oldLog.apply(console, arguments);

        // Display the log message on the page
        var logMessage = Array.from(arguments).map(arg => JSON.stringify(arg)).join(' ');
        var currentTime = getCurrentTime();

        var logElement = document.createElement('div');
        logElement.textContent = `[${currentTime}] > ${logMessage}`;
        logElement.classList.add('logMessage');

        // Add an animation class to show the message with a fade-in effect
        setTimeout(function () {
            logElement.classList.add('show');
        }, 0);

        // Insert the log message at the beginning
        if (consoleDiv.firstChild) {
            consoleDiv.insertBefore(logElement, consoleDiv.firstChild);
        } else {
            consoleDiv.appendChild(logElement);
        }

        // Limit the number of displayed messages for better performance
        var maxMessages = 50;
        if (consoleDiv.children.length > maxMessages) {
            consoleDiv.removeChild(consoleDiv.children[maxMessages]);
        }
    };
})();


//==================controll of editor ========================
document.getElementById("excaute").addEventListener("click",()=>
{   
    console.log("test");
    const code = monaco.editor.getModels()[0].getValue();
    try {
        eval(code);

        // Display  console 
        
    } catch (error) {
        console.error('Error during execution:', error);
    } finally {
        // Restore the original console.log
       
    }

})

var editor=document.getElementById("editorContainer");
var container = document.getElementById('container');
var toggleButton=document.getElementById("toggleButton");
toggleButton.addEventListener('click', function () {
   
    if(editor.parentNode===container)
    {
       container.parentNode.insertBefore(editor,container.nextElementSibling)
       toggleButton.innerText="↖"
       document.cookies="{up:0}"
    }
    else
    {
        toggleButton.innerText="↓"
        container.insertBefore(editor,container.firstChild)
        document.cookies="{up:1}"
    }
   
});



