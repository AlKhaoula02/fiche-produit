let pic = document.querySelector("img");
let color = document.querySelectorAll(".couleurs ul li");
let montitre = document.querySelector(".titre h2");
let colortitre = ["Red", "Blue", "Grey"];
let price =[25.99,27.99,30.99];
let monprix= document.querySelector(".prix h2");




for (let i = 0; i < color.length; i++) {
    const element = color[i];
    element.addEventListener("click", function () {
        // `${fezfz}`;
        pic.src = `img/nike-${element.classList[0]}.jpg`;
        montitre.innerHTML = `Nike ${colortitre[i]}`;
        monprix.innerHTML = `${price[i]} Euros`;
        console.log(colortitre[i]);
    });
}


let size = document.querySelectorAll(".tailles ul li");
let stock = document.querySelector(".stock p");
let button= document.querySelector(".boutton");

for (let i = 0; i < size.length; i++) {

size[i].addEventListener('click', function () {

    if (i == 3) {
        stock.innerHTML = "Plus disponible";
        button.classList.remove("boutton");
        button.classList.add("disabled");
        }
        
        else {
        stock.innerHTML = "Disponible";
        button.classList.remove("disabled");
        button.classList.add("boutton");
    }
})
}

