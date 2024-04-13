let taskListArray = [];

let selectedListId=parseInt(window.location.search.split("=")[1])
//parseInt converts strings to numbers (specifically to integers)
let selectedList=null;


function savetaskList() {
    localStorage.setItem("taskLists", JSON.stringify(taskListArray));
  }
  function loadtaskList() {
    let currentList = localStorage.getItem("taskLists");
    if (currentList != null) {
      taskListArray = JSON.parse(currentList);
      selectedList=taskListArray.find(list=>list.id===selectedListId)
      console.log(selectedList)
    }
  }
  console.log(window.location.search)
  loadtaskList()