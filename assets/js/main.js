// main.js

console.log("Hello, World!");

let targetElement = document.querySelector("h2");

console.log(targetElement.outerHTML);

targetElement.addEventListener("mouseover", functional() {
    console.log(this.innerText);
    this.innerText = "TIME"
    this.style = "cursor: wait";
});

targetElement.addEventListener("mouseout", function() {
    this.innerText = "IKEA";
    this.style = "cursor: pointer";
});