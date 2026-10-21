function addEmployee() {
    let name = document.getElementById("emp").value;

    if (name == "") {
        alert("Enter employee name");
        return;
    }

    let li = document.createElement("li");
    li.textContent = name;

    document.getElementById("list").appendChild(li);
    document.getElementById("emp").value = "";
}