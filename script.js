// JavaScript Document
console.log("hi");


const mainNav = document.querySelector('.main-nav'); 
const searchBar = document.querySelector('.main-nav > form');
const searchIconLi = document.querySelector('.main-nav .icon-list li:nth-child(2)');

const closeSearchBtn = searchBar ? searchBar.querySelector('button[type="submit"]') : null; 
const searchInput = searchBar ? searchBar.querySelector('input[type="text"]') : null; 

function toggleMainNav() {
    if (mainNav) {
        mainNav.classList.toggle('menu-open');
    }
}



// --- Menu Toggle Functie---
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            toggleMainNav(); // Gebruik de nieuwe herbruikbare functie
        });
    }
});

// --- Zoekfunctionaliteit (Opgeschoond en Uniek) ---
if (searchIconLi && searchBar && closeSearchBtn && searchInput) {
    
    // Toon de zoekbalk bij klikken op het vergrootglas-icoon
    searchIconLi.addEventListener('click', function() {
        searchBar.classList.add('active');
        searchInput.focus(); 

        if (mainNav.classList.contains('menu-open')) { 
            toggleMainNav(); // Sluit het menu
        }
    });

    closeSearchBtn.addEventListener('click', function(event) {
        event.preventDefault(); 
        searchBar.classList.remove('active');
    });
}

// --- Tweede sectie-buttons grid ---
document.addEventListener("DOMContentLoaded", () => {
   
    const buttons = document.querySelectorAll("section > ul > li > button");
    const productenBtn = buttons[0]; 
    const hulpBtn = buttons[1]; 
  
    const productGrid = document.querySelector("ul.card-grid:not(.hidden)");
    const hulpGrid = document.querySelector("ul.card-grid.hidden");
  
    if (productenBtn && hulpBtn && productGrid && hulpGrid) {
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
    }
});



// --- Vijfde sectie-animatie & Progressbar animatie ---
document.addEventListener('DOMContentLoaded', (event) => {
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(entry.target.dataset.animationClass || 'is-in-view'); 
                observer.unobserve(entry.target);
            }
        });
    };
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Sectie 5 Animatie
    const targetSection5 = document.querySelector('section:nth-of-type(5)');
    if (targetSection5) {
        targetSection5.dataset.animationClass = 'is-in-view';
        observer.observe(targetSection5);
    }
    
    // Progressbar Animatie
    const formContainer = document.querySelector('.internet-opties'); 
    if (formContainer) {
        formContainer.dataset.animationClass = 'animate-bar'; 
        observer.observe(formContainer);
    }
});



// --- Section 5 pop-up --- 
document.addEventListener('DOMContentLoaded', () => {
    const popUp = document.getElementById('pop-up');
    const openButton = document.getElementById('open-pop-up');
    const closeButton = document.getElementById('close-pop-up');

    if (popUp && openButton && closeButton) {
        openButton.addEventListener('click', (event) => {
            event.preventDefault(); 
            popUp.showModal(); 
        });

        closeButton.addEventListener('click', () => {
            popUp.close();
        });
        
        popUp.addEventListener('click', (event) => {
            if (event.target === popUp) {
                popUp.close();
            }
        });
    }
});


// --- Meer tv's knop ---
document.addEventListener('DOMContentLoaded', () => {
    const meerTvsKnop = document.getElementById('extra-tvs-from');
    const extraTvsForm = document.querySelector('section:nth-of-type(5) form:nth-of-type(4)');

    if (meerTvsKnop && extraTvsForm) {
        function toggleForm(event) {
            event.preventDefault(); 
            
            const isOpening = !extraTvsForm.classList.contains('is-open');

            extraTvsForm.classList.toggle('is-open');
            meerTvsKnop.firstChild.nodeValue = isOpening ? "Minder tv's " : "Meer tv's "; 
        }

        meerTvsKnop.addEventListener('click', toggleForm);
    }
});



// --- Dropdown footer (Accordion) ---
document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('footer > ul:first-of-type > li');

    accordionHeaders.forEach(header => {
        const subMenu = header.querySelector('ul');
        
        if (subMenu) {
            header.addEventListener('click', function(event) {
               
                if (event.target.tagName === 'A') {
                    return; 
                }

                event.preventDefault(); 
                this.classList.toggle('active');

                if (this.classList.contains('active')) {
                    // Openen
                    subMenu.style.height = subMenu.scrollHeight + 'px'; 
                    subMenu.style.opacity = '1';
                } else {
                    // Sluiten
                    subMenu.style.opacity = '0';
                    subMenu.style.height = '0px';
                }
            });
        }
    });
});

