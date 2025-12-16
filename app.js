// function forbold(){
//     document.getElementById("editor").classList.toggle("bold")
// }
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