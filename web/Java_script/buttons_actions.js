// Define constants for button elements
const goButton = document.getElementById("go");
const executeButton = document.getElementById("execute");
const toggleButton = document.getElementById("toggleButton");
const clearConsoleButton = document.getElementById("clear_console");
const saveCommandButton = document.getElementById("save_Command");
const uploadCommandButton = document.getElementById("upload_Command");
const justClickInput = document.getElementById("just_click");
const iframe = document.getElementsByTagName("iframe")[0];
// Event listener for the "Go" button
goButton.addEventListener("click", () => {
    const loadingIcon = goButton.firstElementChild.firstElementChild;
    loadingIcon.setAttribute("src", "img/loading.svg");

    const iframe = document.getElementsByTagName("iframe")[0];
    iframe.setAttribute("src", document.getElementById("urlInput").value);

    iframe.onload = () => {
        loadingIcon.setAttribute("src", "img/search.svg");
        showMessage("Page is loaded");
        
    };
});    // Access the contentDocument of the iframe
            var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

            // Attach click event to all anchor tags within the iframe
            var links = iframeDocument.querySelectorAll('a');
            links.forEach(function (link) {
                link.addEventListener('click', function (event) {
                    event.preventDefault(); // Prevent default link behavior

                    // Redirect only the iframe
                    iframe.contentWindow.location.href = link.href;
                });
            });

// Event listener for the "Execute" button
executeButton.addEventListener("click", async () => {
    const code = global_editor.getValue();
    const executeButtonIcon = executeButton.firstElementChild.firstElementChild;
    const oldImgSrc = executeButtonIcon.getAttribute("src");

    try {
        disableExecuteButton(executeButton, executeButtonIcon);

        // Save the code to a cookie
        saveCodeToCookie({"code":code});

        const evalResult = await executeCode(code);
        showMessage(`Code execution completed `);
    } catch (error) {
        console.error(`Error during execution:\nType: ${error.name}\nMessage: ${error.message}\nPosition: ${error.stack}`);
        showMessage("Code execution has error");
    } finally {
        enableExecuteButton(executeButton, executeButtonIcon, oldImgSrc);
    }
});

// Helper function to disable the execute button
function disableExecuteButton(button, icon) {
    button.style.cursor = "not-allowed";
    button.disabled = true;
    icon.setAttribute("src", "img/loading.svg");
}

// Helper function to enable the execute button
function enableExecuteButton(button, icon, oldImgSrc) {
    button.style.cursor = "pointer";
    button.disabled = false;
    icon.setAttribute("src", oldImgSrc);
}

// Async function to execute code
async function executeCode(code) {
    return new Promise((resolve, reject) => {
        try {
            const evalResult = window.eval(code);
            resolve(evalResult);
        } catch (error) {
            reject(error);
        }
    });
}

// Event listener for the "Toggle" button
toggleButton.addEventListener('click', function () {
    const editor = document.getElementById("editorContainer");
    const container = document.getElementById("container");

    if (editor.parentNode === container) {
        container.parentNode.insertBefore(editor, container.nextSibling);
        toggleButton.firstChild.textContent = "two sides";
        toggleButton.firstElementChild.firstElementChild.setAttribute("src", "img/arrow_up.svg");
        editor.style.setProperty("width", "100%");
    } else {
        toggleButton.firstChild.textContent = "one side";
        container.insertBefore(editor, container.firstChild);
        toggleButton.firstElementChild.firstElementChild.setAttribute("src", "img/arrow_down.svg");
        editor.style.setProperty("width", "40%");
    }
});

// Event listener for the "Clear Console" button
clearConsoleButton.addEventListener("click", () => {
    document.getElementById("console").innerHTML = "";
    clear();
});

// Event listener for the "Save Command" button
saveCommandButton.addEventListener("click", () => {
    eel.save_text_to_file(global_editor.getValue());
    showMessage("File dialog is created. Look to the taskbar.");
});

// Event listener for the "Upload Command" button
uploadCommandButton.addEventListener("click", () => {
    justClickInput.click();
});

// Event listener for the "just_click" input (file upload)
justClickInput.addEventListener("change", () => {
    const file = justClickInput.files[0];

    if (file) {
        readFileContents(file);
    }
});

// Function to read file contents and set them in the editor
function readFileContents(file) {
    const reader = new FileReader();
    reader.onload = function (e) {
        const contents = e.target.result;
        global_editor.setValue(contents);
    };
    reader.readAsText(file);
}

// Function to save code to a cookie
function saveCodeToCookie(code) {
    document.cookie =encodeURIComponent(JSON.stringify(code));
}

// Function to read code from a cookie
function readCodeFromCookie() {
    const decodedCookie = JSON.parse(decodeURIComponent(document.cookie));
    

    return (String(decodedCookie["code"]||""));
}

// Function to log the saved code to the console
function readCodetoedditor() {
    

    global_editor.setValue(readCodeFromCookie())
    
}

// Function to display a message (you might need to implement this)
// Function to clear the console (you might need to implement this)
function clear() {
    console.clear();
}

window.onload = function() {
    // Code here will run when the entire page is fully loaded
    setTimeout(readCodetoedditor(),2000)
  };
