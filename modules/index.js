/* eslint-disable */
import BookListApp from "./main.js"
import Switch from "./switch.js"	
import { DateTime } from "./luxon.js";
import Menu from "./menu.js";
// instantiate class
const books = new BookListApp();
const nav = new Switch();

// method to add books
books.appendBook();
books.removeButton();
nav.navLinks();
// Function to add hamburger 
const menu = new Menu();
menu.menuButton();
// Method to handle backdrop
menu.backDrop();

// Function to handle datetime
const getDate = () => {
  const time = document.querySelector(".time");
  const dt = DateTime.now();
  time.innerHTML = dt.toLocaleString(DateTime.DATETIME_MED);
  }
// Method to handle datetime
getDate();
// method
document.addEventListener("DOMContentLoaded", books.displayBooks());
