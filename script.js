var ongoing=[];
var completed=[];

function tasker(){
    var task=document.getElementById("tasks");
    ongoing.push(task.value);
    // alert(tasky);
    task.value='';
}

