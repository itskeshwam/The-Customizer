//hide and show
var a;
function show_hide(){
    if(a==1){
        document.getElementById("editor-btn").style.opacity=1;
        document.getElementById("colPick1").disabled = false;
        document.getElementById("colPick2").disabled = false;
        document.getElementById("colPick3").disabled = false;
        document.getElementById("colPick4").disabled = false;
        return a=0;
    }else{
        document.getElementById("editor-btn").style.opacity=0;
        document.getElementById("colPick1").disabled = true;
        document.getElementById("colPick2").disabled = true;
        document.getElementById("colPick3").disabled = true;
        document.getElementById("colPick4").disabled = true;
        return a=1;
    }
}
