let addBtn = document.querySelector("#addBtn");
let inputText = document.querySelector("#inputPannel");

let listContainer = document.querySelector("#listContainer");

let liEl = "";
let spanEL = "";
let itCountOfCheckUncheck = 0;

addBtn.addEventListener("click", () => {
  addTask();
});

listContainer.addEventListener("click", (details) => {
  if (details.target.tagName === "LI") {
    completeFun(details);
  } else if (details.target.tagName === "SPAN") {
    deleteFun(details);
  }
});

let addTask = () => {
  if (inputText.value === "") {
    alert("You have to write something!");
  } else {
    creatAppendLi();
    creatAppendSpan();
    inputText.value = "";
    saveData();
  }
};

function creatAppendLi() {
  li = document.createElement("li");
  li.innerHTML = inputText.value;
  liEl += li;
  listContainer.appendChild(li);
}

function creatAppendSpan() {
  span = document.createElement("span");
  span.innerHTML = "\u00d7";
  li.appendChild(span);
  spanEL += span;
}

function completeFun(details) {
  if (itCountOfCheckUncheck === 0) {
    details.target.className = "selectedText";
    itCountOfCheckUncheck = 1;
  } else if (itCountOfCheckUncheck === 1) {
    details.target.classList.remove("selectedText");
    itCountOfCheckUncheck = 0;
  }
  saveData();
}
function deleteFun(details) {
  details.target.parentNode.remove();
  saveData();
}

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
