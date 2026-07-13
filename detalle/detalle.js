/*==================================================
            SHOWCASE MUEBLES
==================================================*/

const furnitureButtons = document.querySelectorAll(".selector-item");

const redImage = document.getElementById("showcase-red-image");
const blueImage = document.getElementById("showcase-blue-image");
const greenImage = document.getElementById("showcase-green-image");


/*==================================================
            BASE DE DATOS
==================================================*/

const furniture = {

    chair:{

        red:"../imagenes/muebles/colores/banquito_1.webp",
        blue:"../imagenes/muebles/colores/banquito_2.webp",
        green:"../imagenes/muebles/colores/banquito_3.webp"

    },

    lamp:{

        red:"../imagenes/muebles/colores/perchero_1.webp",
        blue:"../imagenes/muebles/colores/perchero_2.webp",
        green:"../imagenes/muebles/colores/perchero_3.webp"

    },

    table:{

        red:"../imagenes/muebles/colores/mesita_1.webp",
        blue:"../imagenes/muebles/colores/mesita_2.webp",
        green:"../imagenes/muebles/colores/mesita_3.webp"

    },

    shelf:{

        red:"../imagenes/muebles/colores/armario_1.webp",
        blue:"../imagenes/muebles/colores/armario_2.webp",
        green:"../imagenes/muebles/colores/armario_3.webp"

    },

    bench:{

        red:"../imagenes/muebles/colores/estante_1.webp",
        blue:"../imagenes/muebles/colores/estante_2.webp",
        green:"../imagenes/muebles/colores/estante_3.webp" 

    }

};



/*==================================================
            CAMBIO IMAGEN
==================================================*/

function switchImage(img,newSrc){

    img.classList.add("switching");

    setTimeout(()=>{

        img.src=newSrc;

        img.onload=()=>{

            img.classList.remove("switching");

        };

    },220);

}



/*==================================================
            CAMBIO MUEBLE
==================================================*/

function changeFurniture(name){

    switchImage(redImage,furniture[name].red);

    switchImage(blueImage,furniture[name].blue);

    switchImage(greenImage,furniture[name].green);

}



/*==================================================
            BOTONES
==================================================*/

furnitureButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        furnitureButtons.forEach(btn=>{

            btn.classList.remove("active");

        });

        button.classList.add("active");

        changeFurniture(button.dataset.furniture);

    });

});


/*==================================================
                COURSE TIMELINE
==================================================*/

const timelineStops = document.querySelectorAll(".timeline-stop");
const timelineCards = document.querySelectorAll(".timeline-card");
const timelineSegments = document.querySelectorAll(".timeline-segment");

function activateTimeline(step){

    /*==============================
            STOPS
    ==============================*/

    timelineStops.forEach((stop,index)=>{

        stop.classList.remove("active");
        stop.classList.remove("visited");

        if(index + 1 < step){

            stop.classList.add("visited");

        }

        if(index + 1 === step){

            stop.classList.add("active");

        }

    });


    /*==============================
            TARJETAS
    ==============================*/

    timelineCards.forEach((card,index)=>{

        card.classList.remove("active");

        if(index + 1 === step){

            card.classList.add("active");

        }

    });


    /*==============================
            SEGMENTOS
    ==============================*/

    timelineSegments.forEach((segment,index)=>{

        segment.classList.remove("active");

        if(index < step - 1){

            segment.classList.add("active");

        }

    });

}



/*==================================================
            CLICK EN STOPS
==================================================*/

timelineStops.forEach((stop,index)=>{

    stop.addEventListener("click",()=>{

        activateTimeline(index + 1);

    });

});



/*==================================================
            CLICK EN TARJETAS
==================================================*/

timelineCards.forEach((card,index)=>{

    card.addEventListener("click",()=>{

        activateTimeline(index + 1);

    });

});



/*==================================================
            ESTADO INICIAL
==================================================*/

if(timelineStops.length){

    activateTimeline(1);

}

/*==================================================
                PROGRAM GALLERY
==================================================*/

const programCards = document.querySelectorAll(".program-card");
const programItems = document.querySelectorAll(".program-item");
const programIcons = document.querySelectorAll(".program-icon");
const galleryDots = document.querySelectorAll(".gallery-dot");

let currentProgram = 0;



/*==================================================
                ACTUALIZAR
==================================================*/

function updateProgramGallery(){

    programCards.forEach(card=>{

        card.classList.remove(
            "active",
            "prev",
            "next",
            "hidden"
        );

    });


    programItems.forEach(item=>{

        item.classList.remove("active");

    });



    programIcons.forEach(icon=>{

        icon.textContent="−";

    });

    galleryDots.forEach(dot=>{

    dot.classList.remove("active");

    });


    const prev =
        (currentProgram - 1 + programCards.length) %
        programCards.length;

    const next =
        (currentProgram + 1) %
        programCards.length;



    programCards[currentProgram].classList.add("active");

    programCards[prev].classList.add("prev");

    programCards[next].classList.add("next");



    programCards.forEach((card,index)=>{

        if(
            index!==currentProgram &&
            index!==prev &&
            index!==next
        ){

            card.classList.add("hidden");

        }

    });



    programItems[currentProgram].classList.add("active");

    galleryDots[currentProgram].classList.add("active");

    programIcons[currentProgram].textContent="✓";

}



/*==================================================
            CLICK IMÁGENES
==================================================*/

programCards.forEach((card,index)=>{

    card.addEventListener("click",()=>{

        currentProgram=index;

        updateProgramGallery();

    });

});



/*==================================================
            CLICK LISTA
==================================================*/

programItems.forEach((item,index)=>{

    item.addEventListener("click",()=>{

        currentProgram=index;

        updateProgramGallery();

    });

});



/*==================================================
            ESTADO INICIAL
==================================================*/

if(programCards.length){

    updateProgramGallery();

}

/*==================================================
                        FAQ
==================================================*/

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");



    question.addEventListener("click", () => {

        faqItems.forEach(currentItem => {

            if(currentItem !== item){

                currentItem.classList.remove("active");

            }

        });



        item.classList.toggle("active");

    });

});

/*==================================================
        COLOR Y TAPIZADO
==================================================*/

const styleSection = document.querySelector(".detail-style");
const styleBackground = document.querySelector(".detail-style-background");
const styleSofa = document.getElementById("style-sofa");
const styleKanji = document.getElementById("style-kanji");
const styleCircle = document.querySelector(".detail-style .detail-hero-circle");

const styleButtons = document.querySelectorAll(".detail-style-btn");

let styleTimeout;


/*------------------------------------------
            Cambiar estilo
------------------------------------------*/

function changeStyle(style){

    clearTimeout(styleTimeout);

    styleSofa.classList.add("is-changing");

    setTimeout(()=>{

        switch(style){

            case "red":

                styleSofa.src="../imagenes/hero/sillon_1.webp"; 
                styleBackground.style.backgroundImage="url('../imagenes/fotocursos/flores_1.webp')";
                styleBackground.style.opacity="1";

                styleCircle.style.background =
                "linear-gradient(to top,#e8d8bd00 0%, #562F2F 100%)"; 

                styleKanji.innerHTML="赤色";
                styleKanji.style.color="#562F2F";

            break;


            case "blue":

                styleSofa.src="../imagenes/hero/sillon_2.webp";
                styleBackground.style.backgroundImage="url('../imagenes/fotocursos/flores_2.webp')";
                styleBackground.style.opacity="1";

                styleCircle.style.background =
                "linear-gradient(to top,#e8d8bd00 0%, #2F4656 100%)";

                styleKanji.innerHTML="青色";
                styleKanji.style.color="#2F4656";

            break;


            case "green":

                styleSofa.src="../imagenes/hero/sillon_3.webp";
                styleBackground.style.backgroundImage="url('../imagenes/fotocursos/flores_3.webp')";
                styleBackground.style.opacity="1";

                styleCircle.style.background =
                "linear-gradient(to top,#e8d8bd00 0%, #35562F 100%)";

                styleKanji.innerHTML="緑色";
                styleKanji.style.color="#35562F";

            break;


            default:

                styleSofa.src="../imagenes/hero/sillon_detalle.webp";

                styleBackground.style.opacity="0";

                styleCircle.style.background =
                "linear-gradient(to top,#EAE3D500 0%, #FF6A4F 100%)";

                styleKanji.innerHTML="家具";
                styleKanji.style.color="#EAE3D5";

            break;

        }

        styleSofa.classList.remove("is-changing");

    },250);




    styleButtons.forEach(btn=>{

        btn.classList.remove("active");

    });

    document.querySelector(`[data-style="${style}"]`).classList.add("active");



    if(style!="default"){

        styleTimeout=setTimeout(()=>{

            changeStyle("default");

        },15000);

    }

}



/*------------------------------------------
            Eventos
------------------------------------------*/

styleButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        changeStyle(button.dataset.style);

    });

});

