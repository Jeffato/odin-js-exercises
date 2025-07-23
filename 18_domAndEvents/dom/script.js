//Adding Elements

const body = document.body;

// Append can add strings
body.append("I was added using append")

// Append child requires nodes
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This text was added using appendChild!";

body.appendChild(content);

/*
1. a <p> with red text that says “Hey I’m red!”
2. an <h3> with blue text that says “I’m a blue h3!”
3. a <div> with a black border and pink background color with the following elements inside of it:
    another <h1> that says “I’m in a div”
    a <p> that says “ME TOO!”
    Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it 
    before adding it to the container.
*/

const redContent = document.createElement("p");
redContent.classList.add("content");
redContent.textContent = "Hey I'm red!";
redContent.style.color = "red";
body.appendChild(redContent)

const blueContent = document.createElement("h3");
blueContent.classList.add("content");
blueContent.textContent = "I'm a blue h3!";
blueContent.style.color = "blue";
body.appendChild(blueContent)

const pinkBox = document.createElement("div");
pinkBox.style.border = "2px solid black";
pinkBox.style.backgroundColor = "pink";

const elementOne = document.createElement("h1");
elementOne.classList.add("content");
elementOne.textContent = "I'm in a Div!";

const elementTwo = document.createElement("p");
elementTwo.classList.add("content");
elementTwo.textContent = "Me Too!";

pinkBox.appendChild(elementOne)
pinkBox.appendChild(elementTwo)

body.appendChild(pinkBox)