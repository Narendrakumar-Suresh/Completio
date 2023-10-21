var ongoing = [];
// var completed = [];
var checkboxContainer = document.querySelector('#checkbox-container');

function tasker() {
  var task = document.getElementById("tasks");
  let t = task.value;
  if (t.trim() === "") {
    alert("Enter some value.");
  } else {
    ongoing.push(t);
    contentview();
    task.value = '';
  }
}

// viewing in home page
function contentview() {
  var ccontent = document.getElementById("content");
  ccontent.innerHTML = '';

  for (var i = 0; i < ongoing.length; i++) {
    var checkbox = document.createElement("input");
    var label = document.createElement("label");
    var div = document.createElement("div");

    checkbox.type = "checkbox";
    checkbox.value = ongoing[i];
    checkbox.id = "task-" + i;

    label.htmlFor = "task-" + i;
    label.appendChild(document.createTextNode(ongoing[i]));

    div.appendChild(checkbox);
    div.appendChild(label);

    ccontent.appendChild(div);
  }
  //alert("New task added");
}