// JavaScript Document
console.log("hi");

//tweede sectie-buttons grid
document.addEventListener("DOMContentLoaded", () => {
    // Buttons ophalen
    const buttons = document.querySelectorAll("section > ul > li > button");
    const productenBtn = buttons[0]; // Producten
    const hulpBtn = buttons[1]; // Hulp nodig?
  
    // Ul-elementen ophalen
    const productGrid = document.querySelector("ul.card-grid:not(.hidden)");
    const hulpGrid = document.querySelector("ul.card-grid.hidden");
  
    productenBtn.classList.add("active");

    const showGrid = (gridToShow) => {
      if (gridToShow === "producten") {
        productGrid.classList.remove("hidden");
        hulpGrid.classList.add("hidden");
        productenBtn.classList.add("active");
        hulpBtn.classList.remove("active");
      } else if (gridToShow === "hulp") {
        productGrid.classList.add("hidden");
        hulpGrid.classList.remove("hidden");
        productenBtn.classList.remove("active");
        hulpBtn.classList.add("active");
      }
    };
  
    productenBtn.addEventListener("click", () => showGrid("producten"));
    hulpBtn.addEventListener("click", () => showGrid("hulp"));
  });


//vijfde sectie-animatie
  document.addEventListener('DOMContentLoaded', (event) => {
    const targetSection = document.querySelector('section:nth-of-type(5)');
    
    if (targetSection) {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        
        const callback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-in-view');
                    observer.unobserve(entry.target);
                }
            });
        };
        
        const observer = new IntersectionObserver(callback, options);
        observer.observe(targetSection);
    }
});