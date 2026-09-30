const items = ["Book", "Pen", "Notebook"];
const listElement = document.querySelector("#itemList");
const inputElement = document.querySelector("#itemInput");
const addBtn = document.querySelector("#addBtn");
const deleteBtn = document.querySelector("#deleteBtn");
function renderList() {
listElement.innerHTML = "";
items.forEach(function (item) {
const li = document.createElement("li");
li.textContent = item;
listElement.appendChild(li);
    });
}
renderList();
 addBtn.addEventListener("click", function () {
    const value = inputElement.value.trim();
    if (value !== "") {
        items.push(value);
        inputElement.value = "";
        renderList();
      }
    });

deleteBtn.addEventListener("click", function () {
    if (items.length > 0) {
        items.pop();
        renderList();
     }
   });
