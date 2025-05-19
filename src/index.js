// .\src\index.js
import {loadHomePage} from "./home";
import {loadMenuPage} from "./menu";
import "./index.css"
console.log("Success")
const content = document.getElementById("content");

content.appendChild(loadHomePage())