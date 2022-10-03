/* eslint-disable */
import BookListApp from "./main.js"
import Switch from "./switch.js"	
import { DateTime } from "./luxon.js";
// instantiate class
const books = new BookListApp();
const nav = new Switch();

// method to add books
books.appendBook();
books.removeButton();
nav.navLinks();

// Function to handle datetime
const getDate = () => {
  const time = document.querySelector(".time");
  const dt = DateTime.now();
  time.innerHTML = dt.toLocaleString(DateTime.DATETIME_MED);
  }

getDate();
// method
document.addEventListener("DOMContentLoaded", books.displayBooks());
