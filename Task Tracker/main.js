let input = document.querySelector("input");
let add_button = document.querySelector("#add-button");
let task_list = document.querySelector("ul");
let input_field = document.querySelector("#input-field");
let li = document.querySelectorAll("ul li");
let pre_form = [];
let removeInput = document.querySelector(".clear");
let sort = document.querySelector("#sort-button img");

add_button.addEventListener("click", () => {
  add();
});

sort.addEventListener("click", () => {
  sortfunction();
  let cl_btns = document.querySelectorAll("ul li img");
  for (let i = 0; i < cl_btns.length; i++) {
    cl_btns[i].addEventListener("click", () => {
      cl_btns[i].parentNode.remove();

      if (document.querySelectorAll("li").length == 0) {
        task_list.style.display = "none";
      }
    });
  }
});

removeInput.addEventListener("click", () => {
  input.value = "";
});

input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    add();
  }
});

function sortfunction() {
  if (sort.getAttributeNode("id").value == "recent") {
    sort_list();
    sort.setAttribute("id", "ascending");
    sort.setAttribute("src", "images/down.png");
    sort.style.width = "25px";
  } else if (sort.getAttributeNode("id").value == "ascending") {
    sort_list_reverse();
    sort.setAttribute("id", "descending");
    sort.setAttribute("src", "images/up.png");
    sort.style.width = "25px";
  } else {
    prev();
    sort.setAttribute("id", "recent");
    sort.setAttribute("src", "images/recent.png");
    sort.style.width = "15px";
  }
}

function add() {
  if (input.value.trim() != 0) {
    pre_form.push(input.value);
    li = document.createElement("li");
    let text = document.createElement("p");
    li.append(text);
    text.textContent = input.value;
    text.setAttribute("class", "task-text");
    text.style.width = "75%";
    text.style.overflow = "none";
    text.style.marginTop = "1px";
    li.style.padding = "8px 15px";
    li.style.display = "flex";
    li.style.flexDirection = "row";
    task_list.append(li);
    task_list.style.display = "block";
    input.value = "";

    let cl_btn = document.createElement("img");
    cl_btn.setAttribute("src", "images/clear.png");
    cl_btn.setAttribute("class", "clear");
    li.append(cl_btn);
    cl_btn.style.position = "relative";
    cl_btn.style.marginLeft = "35px";
    cl_btn.style.marginTop = "0%";
    cl_btn.addEventListener("click", () => {
      cl_btn.parentNode.remove();
      if (document.querySelectorAll("li").length == 0) {
        task_list.style.display = "none";
      }
    });
  }
}

function sort_list() {
  let new_tasks = [];
  let tasks = document.querySelectorAll("li");
  for (let i = 0; i < tasks.length; i++) {
    new_tasks.push(tasks[i].innerHTML);
  }
  new_tasks.sort();
  for (let i = 0; i < tasks.length; i++) {
    tasks[i].innerHTML = new_tasks[i];
  }
}

function sort_list_reverse() {
  let new_tasks = [];
  let tasks = document.querySelectorAll("li");
  for (let i = 0; i < tasks.length; i++) {
    new_tasks.push(tasks[i].innerHTML);
  }
  new_tasks.sort().reverse();
  for (let i = 0; i < tasks.length; i++) {
    tasks[i].innerHTML = new_tasks[i];
  }
}

function prev() {
  let tasks = document.querySelectorAll("li p");
  for (let i = 0; i < tasks.length; i++) {
    tasks[i].innerHTML = pre_form[i];
  }
}
