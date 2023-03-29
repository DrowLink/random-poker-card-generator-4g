/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let valueCard = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let symbolCard = ["♦", "♥", "♠", "♣"];

  function randomizer(array) {
    return array[Math.floor(Math.random() * array.length)]; // 0 - 3
  }

  let cardValue = `${randomizer(symbolCard)} ${randomizer(
    valueCard
  )} ${randomizer(symbolCard)}`;

  console.log(cardValue);

  let comp = (document.getElementById("up").innerHTML = `${randomizer(
    symbolCard
  )}`);
  document.getElementById("center").innerHTML = `${randomizer(valueCard)}`;
  document.getElementById("down").innerHTML = `${comp}`;
};
