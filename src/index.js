// .\src\index.js
import {loadHomePage} from "./home";
import {loadMenuPage} from "./menu";
import {loadAboutPage} from "./about";
import "./index.css"
console.log("Success")
const btns = document.querySelectorAll('.nav-btn');
const content = document.getElementById("content");
content.appendChild(loadHomePage())

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function (e) {
        switchPages(e.target.id);        
    })
}

function switchPages (page) {
    content.textContent = "";
    if (page === 'home') {
        content.appendChild(loadHomePage())
    } else if (page === 'menu') {
        content.appendChild(loadMenuPage())
    } else if (page === 'about') {
        content.appendChild(loadAboutPage())
    }
}