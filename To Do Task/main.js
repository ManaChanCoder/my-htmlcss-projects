const txtBox = document.querySelector("#input-field");
const myList = document.querySelector("#my-list");

function addTask() {
  if (txtBox.value === "") {
    alert("You must write something.");
  } else {
    var list = document.createElement("li");
    list.innerHTML = txtBox.value;
    myList.appendChild(list);

    var closeBtn = document.createElement("span");
    closeBtn.innerText = "\u00d7";
    list.appendChild(closeBtn);
  }
  savingData();
  txtBox.value = "";
}
myList.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    savingData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    savingData();
  }
}, false);

function savingData() {
  localStorage.setItem("data", myList.innerHTML);
}

function getData() {
  myList.innerHTML = localStorage.getItem("data");
}
getData();