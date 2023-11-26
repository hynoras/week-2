const app = document.getElementById("list-app");

// Create the necessary elements
const list = document.createElement("ul");
const input = document.createElement("input");
input.setAttribute("type", "text");
const addButton = document.createElement("button");
addButton.innerHTML = "Create New";

// Add event listeners to the elements
addButton.addEventListener("click", function() {
    const newItem = document.createElement("li");
  if (input.value === "") {
    newItem.innerHTML = 'New item';
  } else {
    newItem.innerHTML = input.value;
  }
  list.appendChild(newItem);
  input.value = "";
});

list.addEventListener("click", function(event) {
    if (event.target.tagName === "li") {
        const text = prompt("Enter new text:");
        event.target.innerHTML = text;
    }
});

app.appendChild(input);
app.appendChild(addButton);
app.appendChild(list);