let pic = document.querySelector("img");
let color = document.querySelectorAll(".couleurs ul li");
let montitre = document.createElement("h2");
let colortitre = ["Red", "Blue", "Grey"];

for (let i = 0; i < color.length; i++) {
    const element = color[i];
    element.addEventListener("click", function () {
        // `${fezfz}`;
        pic.src = `img/nike-${element.classList[0]}.jpg`;
        
        document.querySelectorAll(".titre").appendChild(montitre);
        montitre.innerHTML = `Nike${colortitre[i]}`;
        console.log(colortitre[i]);

    });
}

