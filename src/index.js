console.log("hello world")

import "./styles.css";

import { loadHomePage } from "./homepage.js";
import { loadMenuPage } from "./menupage.js";
import { loadAboutPage } from "./aboutpage.js";

loadHomePage();

const btnHome = document.getElementById("btnHome");
btnHome.addEventListener('click', () => {
    loadHomePage();
})

const btnMenu = document.getElementById("btnMenu");
btnMenu.addEventListener('click', () => {
    loadMenuPage();
})

const btnAbout = document.getElementById("btnAbout");
btnAbout.addEventListener('click', () => {
    loadAboutPage();
})