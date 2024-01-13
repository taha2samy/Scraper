
var global_editor;
require.config({ paths: { 'vs': 'https://cdn.jsdelivr.net/npm/monaco-editor@0.31.1/min/vs' } });

        require(['vs/editor/editor.main'], function () {
            var editor = monaco.editor.create(document.getElementById('editor'), {
                value: [
                    `let doc = document.getElementById("myIFrame").contentDocument;`,
                    `console.log("let's start")`,
                    ''
                ].join('\n'),
                language: 'javascript',
                fontSize: 22,
                fontWeight: 'bold',
                automaticLayout: true,
                suggest: {
                    // Enable basic suggestions
                    basic: true,
                    // Enable snippets suggestions
                    snippets: true,
                },
            });


            global_editor = editor;
            document.getElementById("editor").style.setProperty("height","100%");

            // Make the container resizable
 
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


