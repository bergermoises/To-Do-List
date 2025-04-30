let tasks = [];

function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();
  if (text !== "") {
    tasks.push({ text, completed: false });
    input.value = "";
    renderTasks();
  }
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function filterTasks(filter) {
  renderTasks(filter);
}

function renderTasks(filter = 'all') {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  let filteredTasks = tasks;
  if (filter === "pending") {
    filteredTasks = tasks.filter(task => !task.completed);
  } else if (filter === "completed") {
    filteredTasks = tasks.filter(task => task.completed);
  }

  filteredTasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task.text;
    if (task.completed) li.classList.add("completed");
    li.onclick = () => toggleTask(index);
    list.appendChild(li);
  });
}
