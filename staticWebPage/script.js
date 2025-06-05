document.getElementById("addBtn").addEventListener("click", function() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();

  if (task === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between align-items-center";
  li.innerHTML = `
    ${task}
    <button class="btn btn-danger btn-sm">Delete</button>
  `;

  li.querySelector("button").addEventListener("click", () => {
    li.remove();
  });

  document.getElementById("taskList").appendChild(li);
  input.value = ""; // clear input
});
