const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const result = document.querySelector("#result");
const total = document.querySelector("#total");
let taskCount = 0;

btn.addEventListener("click", () => {
    if (input.value === "") return;
    createDelElements(input.value);
    input.value = "";
});

function createDelElements(value) {
    taskCount++;

    const li = document.createElement("li");
    const btn = document.createElement("button");
    const checkbox = document.createElement("input");
    const date = document.createElement("span");

    li.className = "li";

    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    li.appendChild(checkbox);

    const taskText = document.createElement("span");
    taskText.className = "task-text";
    taskText.textContent = value;
    li.appendChild(taskText);

    date.className = "date";
    date.textContent = `Added: ${new Date().toLocaleString()}`;
    li.appendChild(date);

    btn.className = "btn";
    btn.textContent = "delete";
    li.appendChild(btn);

    btn.addEventListener("click", () => {
        result.removeChild(li);
        taskCount--;
        total.textContent = taskCount;
    });

    checkbox.addEventListener("change", () => {
        li.classList.toggle("li-active", checkbox.checked);
    });

    taskText.addEventListener("click", () => {
        const newValue = prompt("Edit task", taskText.textContent);
        if (newValue && newValue !== taskText.textContent) {
            taskText.textContent = newValue;
        }
    });

    total.textContent = taskCount;
    result.appendChild(li);
}

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        if (input.value === "") return;
        createDelElements(input.value);
        input.value = "";
    }
});

