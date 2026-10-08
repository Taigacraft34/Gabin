console.log("There we go!");

let all_content = [];
const body = document.querySelector("body");
const council = document.getElementById("council");

council.querySelectorAll("li").forEach((e) => {
    all_content.push(e);
});
council.querySelectorAll("p").forEach((e) => {
    all_content.push(e);
});

all_content.forEach((e) => {
    e.addEventListener("click", () => {
        toggle(e);
    });
});

function toggle(element) {
    let symbol = element.querySelector(".see_button");
    let underlined = element.querySelector("u");
    let text = element.querySelector(".see_content");
    let hide;

    if (symbol.innerText === ">") {
        hide = false;
    } else {
        hide = true;
    }

    if (hide) {
        symbol.innerText = ">";
        symbol.style.color = "white";
        underlined.style.color = "white";
        text.classList.remove("visible");   
    } else {
        symbol.innerText = "v";
        symbol.style.color = "orange";
        underlined.style.color = "orange";
        text.classList.add("visible");
    }
}