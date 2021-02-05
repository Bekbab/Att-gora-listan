"use strict";

var idag = new Date();
var dd = String(today.getDate()).padStart(2, '0'); //.padstart lägger till nollor tills månadsformatet dd 
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;
document.write(today);