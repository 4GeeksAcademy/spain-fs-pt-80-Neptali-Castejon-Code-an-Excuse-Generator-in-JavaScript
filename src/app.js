/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

const getRandom = array => Math.floor(Math.random() * array.length);

const excuseGenerator = () => {
  return `
    <strong>${who[getRandom(who)]}</strong>
    ${action[getRandom(action)]}
    <strong>${what[getRandom(what)]}</strong>
    ${when[getRandom(when)]}
  `;
};

const excuseText = () => {
  const excuseElement = document.getElementById("excuse-generator__text");
  if (excuseElement) {
    excuseElement.innerHTML = excuseGenerator();
  }
};

excuseText();
setInterval(excuseText, 2500);
