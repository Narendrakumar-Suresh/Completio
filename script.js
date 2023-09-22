var ongoing=[];
var completed=[];
const checkboxContainer = document.querySelector('#checkbox-container');

function tasker(){
    var task=document.getElementById("tasks");
    let t=task.value;
    if(t.trim()===""){
        alert("Enter some value.");
    }else{
        ongoing.push(t);
        contentview();
        task.value='';
    }
    // alert(tasky);
    
}

function contentview() {
    var ccontent = document.getElementById("content");
    ccontent.innerHTML = ''; // Clear the existing content

    for (var i = 0; i < ongoing.length; i++) {
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = ongoing[i];
        checkbox.id = "task-" + i;

        var label = document.createElement("label");
        label.htmlFor = "task-" + i;
        label.appendChild(document.createTextNode(ongoing[i]));

        var div = document.createElement("div");
        div.appendChild(checkbox);
        div.appendChild(label);

        ccontent.appendChild(div);
    }
}







