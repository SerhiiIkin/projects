import $ from "jquery";
import Controller from "./Controller/Controller.js";

import "../style.css";

new Controller($("#container"));

let regexp = /love/;
console.log(regexp.test("I love JavaScript"));
console.log(regexp.test("I JavaScript"));

let regexp2 = /[ing]$/;

console.log(regexp2.test("Good morning"));
console.log(regexp2.test("Good morning!"));
