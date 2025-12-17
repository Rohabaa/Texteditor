// function forbold(){
//     document.getElementById("editor").classList.toggle("bold")
// }
// clear
function onclear(){
    editor.innerHTML = ""
}
document.getElementById("boldd").addEventListener("click", function(){
    document.execCommand("bold")
})
document.getElementById("italic").addEventListener("click", function(){
    document.execCommand("italic")
})
document.getElementById("underline").addEventListener("click", function(){
    document.execCommand("underline")
})
document.getElementById("eraser").addEventListener("click", function(){
    // selected text ka formatting remove kar de
    document.execCommand("removeFormat");
});
function colorchange() {
    let textcolor = document.getElementById("textColor").value;
    document.execCommand("foreColor", false, textcolor);
}
function onright(){
     document.getElementById("editor").classList.toggle("right")
}
function oncenter(){
     document.getElementById("editor").classList.toggle("center")
}
function onleft(){
     document.getElementById("editor").classList.toggle("left")
}
document.getElementById("fontFamily").addEventListener("change", function() {
    let font = this.value;
    document.execCommand("fontName", false, font);
});
document.getElementById("fontSize").addEventListener("change", function() {
    let font = this.value;
    document.execCommand("fontSize", false, font);
});
// order unorder
const editor = document.getElementById("editor");

// Ordered List button
document.getElementById("orderedList").addEventListener("click", () => {
    document.execCommand("insertOrderedList");
});

// Unordered List button
document.getElementById("unorderedList").addEventListener("click", () => {
    document.execCommand("insertUnorderedList");
});
// undoredo
document.getElementById("undo").addEventListener("click",() =>{
    document.execCommand("undo")
})
document.getElementById("redo").addEventListener("click",() =>{
    document.execCommand("redo")
})
// image
function insertImage() {
    let url = prompt("Enter Image URL");
    if(url) document.execCommand("insertImage", false, url);
}


// Indent
document.getElementById("indent").addEventListener("click", () => {
    document.execCommand("indent");
});

// Outdent
document.getElementById("outdent").addEventListener("click", () => {
    document.execCommand("outdent");
});

// Blockquote / Quote
document.getElementById("quote").addEventListener("click", () => {
    document.execCommand("formatBlock", false, "blockquote");
});

