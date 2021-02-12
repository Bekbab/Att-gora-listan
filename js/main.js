"use strict";

const LOCAL_STORAGE_KEY_LOGS_LOGS = "app.logs";

let logs = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_LOGS_LOGS)) || [];


function logsList(items) {
    let list = document.createElement("ul");
}









let idag = new Date();
let dd = String(idag.getDate()).padStart(2, '0'); //.padstart lägger till nollor tills månadsformatet dd 
let mm = String(idag.getMonth() + 1).padStart(2, '0');
let yyyy = idag.getFullYear();


let datelabel = document.createElement("p");
datelabel.innerHTML = dd + '/' + mm + '/' + yyyy;
let headerRef = document.querySelector("header");
headerRef.append(datelabel);