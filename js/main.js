"use strict";

const LOCAL_STORAGE_KEY_LOGS = "app.logs.objects";

let logs = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_LOGS)) || [];

let listRoot = document.querySelector("#list-root");
let listForm = document.querySelector("[data-list-form]");
let listInput = document.querySelector("[data-list-input]");

listForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (listInput.value.trim() === "") {
        return;
    }
    logs.push(createlogs(listInput.value.trim()));
    updateList();
    listInput.value = "";
});

function createlogs(name) {
    return {
        id: Date.now().toString(),
        name: name,
    };
}

function logsList(items) {
    let list = document.createElement("ul");
    items.forEach((item) => {
        let logsListItem = document.createElement("li");
        logsListItem.innerText = item.name;
        logsListItem.setAttribute("data-id", item.id);
        logsListItem.classList.add("logs-list-item");
        logsListItem.addEventListener("click", removeItem);
        list.append(logsListItem);
    });
    return list;
}

function removeItem(event) {
    let itemToRemove = event.target.getAttribute("data-id");
    logs = logs.filter((item) => item.id !== itemToRemove);
    updateList();
}

function updateList() {
    saveList();
    listRoot.innerHTML = "";
    listRoot.append(logsList(logs));
}

function saveList() {
    localStorage.setItem(LOCAL_STORAGE_KEY_LOGS, JSON.stringify(logs));
}

updateList();