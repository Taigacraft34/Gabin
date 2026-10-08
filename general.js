

const orange = document.querySelector("#orange");

orange.addEventListener("mouseenter", () => {
    orange.classList.remove("wave");
    
    void orange.offsetWidth;
    
    orange.classList.add("wave");
});
 
setTimeout(() => {
    orange.classList.remove("wave");
    
    void orange.offsetWidth;
    
    orange.classList.add("wave");
}, 2000);

let shine = setInterval(() => {
    orange.classList.remove("wave");
    
    void orange.offsetWidth;
    
    orange.classList.add("wave");
}, 30000);