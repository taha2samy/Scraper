document.getElementById("go").addEventListener("click", () => {
    document.getElementById("go").firstElementChild.firstElementChild.setAttribute("src", `img/loading.svg`);
    var iframe = document.getElementsByTagName("iframe")[0];
    iframe.setAttribute("src", document.getElementById("urlInput").value);
    iframe.onload = () => {
        document.getElementById("go").firstElementChild.firstElementChild.setAttribute("src", `img/search.svg`);
        showMessage("Page is loaded");
    };
});


// buttons_actions.js

document.getElementById("execute").addEventListener("click", () => {
    const code = global_editor.getValue();
    document.getElementById("execute").firstElementChild.firstElementChild.setAttribute("src", "img/loading.svg");

    try {
        window.eval(code);
    } catch (error) {
        console.log('Error during execution:' + error);
    } finally {
        showMessage("Code execution completed");
        document.getElementById("execute").firstElementChild.firstElementChild.setAttribute("src", "img/run.svg");
    }
});



// Add any other functions or logic related to button actions here



toggleButton.addEventListener('click', function () {
    let editor=document.getElementById("editorContainer");
    let container=document.getElementById("container");
    if (editor.parentNode === container) {
        
        container.parentNode.insertBefore(editor, container.nextSibling);
        document.getElementById("toggleButton").firstChild.textContent="two sides";
        document.getElementById("toggleButton").firstElementChild.firstElementChild.setAttribute("src","img/arrow_up.svg");
        document.getElementById("editorContainer").style.setProperty("width","100%");
            }        else {
        document.getElementById("toggleButton").firstChild.textContent="one side";
        container.insertBefore(editor, container.firstChild);
        document.getElementById("toggleButton").firstElementChild.firstElementChild.setAttribute("src","img/arrow_down.svg")
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
document.getElementById("just_click").addEventListener("change",
()=>{
const file= document.getElementById("just_click").files[0];
const reader = new FileReader();

reader.onload = function (e) {
    const contents = e.target.result;
    global_editor.setValue(contents)
};
reader.readAsText(file);
})




