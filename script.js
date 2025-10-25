// JavaScript Document
console.log("hi");

//menu knop
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.querySelector('.main-nav');

    menuToggle.addEventListener('click', function() {
        // Voegt 'menu-open' toe als hij er niet is, en verwijdert hem als hij er wel is.
        mainNav.classList.toggle('menu-open');
    });
});


// --- Globale variabelen ---
const searchBar = document.querySelector('.main-nav > form');
const searchIconLi = document.querySelector('.main-nav .icon-list li:nth-child(2)');
const closeSearchBtn = searchBar?.querySelector('button[type="submit"]');
const searchInput = searchBar?.querySelector('input[type="text"]');


// --- Zoekfunctionaliteit ---
if (searchIconLi && searchBar && closeSearchBtn) {
    // Toon de zoekbalk bij klikken op het vergrootglas-icoon
    searchIconLi.addEventListener('click', function() {
        searchBar.classList.add('active');
        searchInput?.focus();

        // Zorg ervoor dat het grote menu sluit als de zoekbalk opent
        if (mainNav?.classList.contains('toonMenu')) {
            toggleMenu(); 
        }
    });

    // Verberg de zoekbalk bij klikken op de 'X' knop
    closeSearchBtn.addEventListener('click', function(event) {
        event.preventDefault(); 
        searchBar.classList.remove('active');
    });
}

// --- Zoekfunctionaliteit ---
if (searchIconLi && searchBar && closeSearchBtn) {
    // Toon de zoekbalk bij klikken op het vergrootglas-icoon
    searchIconLi.addEventListener('click', function() {
        searchBar.classList.add('active');
        searchInput.focus();

        // Zorg ervoor dat het grote menu sluit als de zoekbalk opent
        if (mainNav.classList.contains('toonMenu')) {
            toggleMenu(); 
        }
    });

    // Verberg de zoekbalk bij klikken op de 'X' knop
    closeSearchBtn.addEventListener('click', function(event) {
        event.preventDefault(); 
        searchBar.classList.remove('active');
    });
}
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

//dropdown footer

    document.addEventListener('DOMContentLoaded', function() {
        // Selecteer alle hoofd-li-elementen in de eerste UL van de footer
        const accordionHeaders = document.querySelectorAll('footer > ul:first-of-type > li');

        accordionHeaders.forEach(header => {
            // Dit is het submenu-element (de <ul> die verborgen moet worden)
            const subMenu = header.querySelector('ul');
            
            // Controleer of er een submenu is
            if (subMenu) {
                // Standaard: hoogte instellen op 0 voor de animatie
                subMenu.style.height = '0px';
                subMenu.style.transition = 'height 0.3s ease-out, opacity 0.3s ease-out'; // Zorgt voor de animatie

                header.addEventListener('click', function(event) {
                    event.preventDefault(); 
                    
                    this.classList.toggle('active');

                    if (subMenu.style.height !== '0px') {
                        // Sluiten: Eerst opaciteit nul, dan hoogte nul
                        subMenu.style.opacity = '0';
                        subMenu.style.height = '0px';
                        
                    } else {
                        // Openen: Hoogte instellen op de volledige inhoudshoogte
                        subMenu.style.opacity = '1';
                        // Gebruik scrollHeight om de exacte hoogte van de inhoud te krijgen
                        subMenu.style.height = subMenu.scrollHeight + 'px';
                    }
                });
            }
        });
    });

 
