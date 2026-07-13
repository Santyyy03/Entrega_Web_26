/*==================================================
                RESPONSIVE JS
==================================================*/

if (window.innerWidth <= 768) {

/*==================================================
                MENU
==================================================*/

const header = document.querySelector(".header");
const nav = document.querySelector(".nav");

if(header && nav){

    const button = document.createElement("button");

    button.className = "menu-toggle";

    button.innerHTML = "☰";

    header.querySelector(".container").appendChild(button);

    button.addEventListener("click",()=>{

        nav.classList.toggle("open");

    });

    document.querySelectorAll(".nav-link").forEach(link=>{

        link.addEventListener("click",()=>{

            nav.classList.remove("open");

        });

    });

}


/*==================================================
                    OBRAS
==================================================*/

const workCards = [...document.querySelectorAll(".work-card")];

let currentWork = 2;

function updateWorks(){

    workCards.forEach((card,index)=>{

        card.classList.remove("active","left","right","hidden");

        if(index===currentWork){

            card.classList.add("active");

        }

        else if(index===currentWork-1){

            card.classList.add("left");

        }

        else if(index===currentWork+1){

            card.classList.add("right");

        }

        else{

            card.classList.add("hidden");

        }

        const image = card.querySelector(".card-image");

        if(image){

            if(index===currentWork){

                image.src=image.dataset.after;

            }

            else{

                image.src=image.dataset.before;

            }

        }

    });

}

updateWorks();

workCards.forEach((card,index)=>{

    card.addEventListener("click",()=>{

        if(index===currentWork-1){

            currentWork--;

            updateWorks();

        }

        else if(index===currentWork+1){

            currentWork++;

            updateWorks();

        }

    });

});


/*==================================================
                    CURSOS
==================================================*/

const courseCards=[...document.querySelectorAll(".course-card")];

let currentCourse=0;

function updateCourses(){

    courseCards.forEach((card,index)=>{

        card.classList.remove("active","left","right","hidden");

        if(index===currentCourse){

            card.classList.add("active");

        }

        else if(index===currentCourse-1){

            card.classList.add("left");

        }

        else if(index===currentCourse+1){

            card.classList.add("right");

        }

        else{

            card.classList.add("hidden");

        }

    });

}

updateCourses();

courseCards.forEach((card,index)=>{

    card.addEventListener("click",()=>{

        if(index===currentCourse-1){

            currentCourse--;

            updateCourses();

        }

        else if(index===currentCourse+1){

            currentCourse++;

            updateCourses();

        }

    });

});


/*==================================================
                SEPARADOR
==================================================*/

const separator=document.querySelector(".separator-text");

if(separator){

    separator.addEventListener("click",()=>{

        separator.classList.toggle("show");

    });

}

}

/*==================================================
            CARRUSEL INFINITO (OBRAS Y CURSOS)
==================================================*/

function initCarousel(selector) {

    const cards = [...document.querySelectorAll(selector)];

    if (!cards.length) return;

    let current = 0;

    function update() {

        cards.forEach(card => {

            card.classList.remove(
                "active",
                "prev",
                "next",
                "hidden"
            );

            // Restaurar imagen original
            const img = card.querySelector(".card-image");

            if (img && img.dataset.before) {
                img.src = img.dataset.before;
            }

        });

        const total = cards.length;

        const active = current;
        const prev = (current - 1 + total) % total;
        const next = (current + 1) % total;

        cards[active].classList.add("active");
        cards[prev].classList.add("prev");
        cards[next].classList.add("next");

        // Mostrar imagen restaurada únicamente en la activa
        const img = cards[active].querySelector(".card-image");

        if (img && img.dataset.after) {
            img.src = img.dataset.after;
        }

    }

    cards.forEach((card, index) => {

        card.addEventListener("click", () => {

            if (index === current) return;

            current = index;

            update();

        });

    });

    // Swipe móvil

    let startX = 0;

    const container = cards[0].parentElement;

    container.addEventListener("touchstart", e => {

        startX = e.touches[0].clientX;

    });

    container.addEventListener("touchend", e => {

        const endX = e.changedTouches[0].clientX;

        const diff = endX - startX;

        if (Math.abs(diff) < 40) return;

        if (diff < 0) {

            current = (current + 1) % cards.length;

        } else {

            current = (current - 1 + cards.length) % cards.length;

        }

        update();

    });

    update();

}

/*==============================
        INICIALIZAR
==============================*/

if (window.innerWidth <= 768) {

    initCarousel(".work-card");
    initCarousel(".course-card");

}

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {

    nav.classList.toggle("active");
    menuToggle.classList.toggle("active");

});

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");
        menuToggle.classList.remove("active");

    });

});