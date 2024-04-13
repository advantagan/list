let selectedList = "";

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
    allTaskListsElement.innerHTML += `<li><button class="btn me-4 ${
      selectedList == list.name ? "btn-info" : "btn-primary"
    }" onclick="selectList('${list.name}')">${list.name}</button></li>`;
  }
}

function selectList(listName) {
  selectedList = listName;
  rendertaskList();
  displayTaskList();
}

function addtask() {
  const taskInput = document.getElementById("taskinput");
  const newTask = taskInput.value;
  console.log(newTask, selectedList);
  taskInput.value = "";
  taskListArray.find((list) => list.name == selectedList).tasks.push(newTask);

  savetaskList();
  displayTaskList();
}
function displayTaskList() {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";
  for (let task of taskListArray.find((list) => list.name == selectedList)
    .tasks) {
    taskList.innerHTML += `<li class="list-group-item">${task}</li>`;
  }
}

loadtaskList();
rendertaskList();
