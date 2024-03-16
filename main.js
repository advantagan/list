let taskListArray = [];

function addtaskList() {
  const taskListinput = document.getElementById("listName");
  const newListName = taskListinput.value;
  console.log(newListName);
  taskListinput.value = "";
  taskListArray.push({
    id: new Date().valueOf(),
    name: newListName,
    tasks: [],
  });
  savetaskList();
  rendertaskList();
}
function savetaskList() {
  localStorage.setItem("taskLists", JSON.stringify(taskListArray));
}
function loadtaskList() {
  let currentList = localStorage.getItem("taskLists");
  if (currentList != null) {
    taskListArray = JSON.parse(currentList);
  }
}
function rendertaskList() {
  const allTaskListsElement = document.getElementById("allTaskLists");
  allTaskListsElement.innerHTML = "";
  for (let list of taskListArray) {
    allTaskListsElement.innerHTML += `<li>${list.name}</li>`;
  }
}
loadtaskList()
rendertaskList()