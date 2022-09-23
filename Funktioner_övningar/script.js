const h1 = document.createElement("h1");
h1.innerText = "Funktioner i Javascript";
document.body.appendChild(h1);

const p = document.createElement("p");
p.innerText = `Utanför min funktion() finns inte variabeln som finns 
i funktionen då den är lokal. Vilket ger att jag får svaret undifined.`;
document.body.appendChild(p);

const p2 = document.createElement("p");
document.body.appendChild(p2);

h1.style.cssText = "margin-bottom: 70px;";
p.style.cssText = "margin-bottom: 70px;";
document.body.style.cssText = `
background-image: url(volvo.jpg);
background-size: 100%;`;

function carBrand() {

const volv = "Volvo";
p2.innerText += typeof volv;
}
//p2 = min paragraph
carBrand();
p2.innerText += "\n" + typeof volv;
