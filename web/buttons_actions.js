document.getElementById("go").addEventListener("click", () => {
    document.getElementById("go").firstElementChild.firstElementChild.setAttribute("src", "loading.svg");
    var iframe = document.getElementsByTagName("iframe")[0];
    iframe.setAttribute("src", document.getElementById("urlTextbox").value);
    iframe.onload = () => {
        document.getElementById("go").firstElementChild.firstElementChild.setAttribute("src", "search.svg");
        showMessage("Page is loaded");
    };
});


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


toggleButton.addEventListener('click', function () {
    if (editor.parentNode === container) {
        
        container.parentNode.insertBefore(editor, container.nextElementSibling);
        document.getElementById("toggleButton").firstChild.textContent="two sides";
        document.getElementById("toggleButton").firstElementChild.firstElementChild.setAttribute("src","arrow_up.svg");
        document.getElementById("editorContainer").style.setProperty("width","100%");
            }        else {
        document.getElementById("toggleButton").firstChild.textContent="one side";
        container.insertBefore(editor, container.firstChild);
        document.getElementById("toggleButton").firstElementChild.firstElementChild.setAttribute("src","arrow_down.svg")
        document.getElementById("editorContainer").style.setProperty("width","40%");
    }
});


document.getElementById("clear_console").addEventListener("click",()=>
{
    document.getElementById("console").innerHTML="";
    clear();
})
