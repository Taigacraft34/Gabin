

const orange = document.querySelector("#orange");

orange.addEventListener("mouseenter", () => {
    orange.classList.remove("wave");
    
    // Force le navigateur à prendre en compte le retrait de la classe
    void orange.offsetWidth;
    
    orange.classList.add("wave");
});