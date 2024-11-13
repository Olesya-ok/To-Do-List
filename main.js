const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const result = document.querySelector("#result")
const total = document.querySelector("#total")
let i = ""

btn.addEventListener("click", (e) => {
if(input.value === "") return;

   createDelElements(input.value)
    input.value = "";
})

function createDelElements (value){
    i ++
    const li = document.createElement("li");
    const btn = document.createElement("button");

    li.className = "li";
    li.textContent = value;

    btn.className = "btn";
    btn.textContent = "delete";
    li.appendChild(btn);

    btn.addEventListener("click", (e) => {
        result.removeChild(li)
        i --
        total.textContent = i
    })

    li.addEventListener("click", (e) => {
        li.classList.toggle("li-active")
    })

    total.textContent = i
    result.appendChild(li);
}

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        if (input.value === "") return;
        createDelElements(input.value);
        input.value = "";
    }
});