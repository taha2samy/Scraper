document.getElementById("go").addEventListener("click", () => {
    document.getElementById("go").firstElementChild.firstElementChild.setAttribute("src", "loading.svg");
    var iframe = document.getElementsByTagName("iframe")[0];
    iframe.setAttribute("src", document.getElementById("urlInput").value);
    iframe.onload = () => {
        document.getElementById("go").firstElementChild.firstElementChild.setAttribute("src", "search.svg");
        showMessage("Page is loaded");
    };
});


document.getElementById("execute").addEventListener("click", () => {
   
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
    let editor=document.getElementById("editorContainer");
    let container=document.getElementById("container");
    if (editor.parentNode === container) {
        
        container.parentNode.insertBefore(editor, container.nextSibling);
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


document.getElementById("save_Command").addEventListener("click",()=>
{
    eel.save_text_to_file(global_editor.getValue());
    showMessage("file dialog is created look to taskbar")
}
)


document.getElementById("upload_Command").addEventListener("click",()=>
{

let v=document.getElementById("just_click");
v.click();


const file = v.files[0];

if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
        const contents = e.target.result;
        global_editor.setValue(contents)
    };
    reader.readAsText(file);

}
    
})


