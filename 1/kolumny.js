const header = document.querySelector("header");
header.style.backgroundColor = "yellow";

const headerH1 = header.querySelector("h1");
console.log(headerH1);
headerH1.style.fontFamily = "Arial Black";
headerH1.textContent = "Przeambula";

const sections = document.querySelectorAll("section");
sections.forEach(section => {
    section.style.border = "2px solid brown";
});


const mainH1 = document.querySelector(".main_column h1");
console.log(mainH1);
mainH1.textContent = "Specjalność szefa";

const mainColumn = document.querySelector(".main_column");

const paragraph = document.createElement("p");
paragraph.textContent = "Kebab na frytkach -_-";
mainColumn.appendChild(paragraph);

const footer = document.querySelector("footer");

const div = document.createElement("div");
div.style.backgroundColor = "pink";

const footerParagraph = document.createElement("p");
footerParagraph.innerText = "&copy;";
footerParagraph.style.textAlign = "center";
div.appendChild(footerParagraph);
footer.appendChild(div);


const h1_side = document.querySelectorAll(".side_column h1");
        h1_side[1].remove();

const p1 = document.createElement("p");
p1.innerHTML = "<i>Pochylony tekst</i>";

const p2 = document.createElement("p");
p2.innerText = "<i>Pochylony tekst</i>";
header.appendChild(p1);
header.appendChild(p2);

const newSection = document.createElement("section");
newSection.style.border = "2px dotted blue";
newSection.style.padding = "10px 20px";
newSection.textContent = "Zderzak";
document.body.appendChild(newSection);
