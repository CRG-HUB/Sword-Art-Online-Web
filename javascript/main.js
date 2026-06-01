// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. ANIMACIÓN Y SONIDO EN EL MENÚ ---
    const enlacesMenu = document.querySelectorAll(".menu a");
    
    //3. Aplicamos el evento a cada uno de los enlaces
    enlacesMenu.forEach(enlace => {

        enlace.addEventListener("click", (evento) => {

           // 4. Detener la navegación por un instante para que dé tiempo a escuchar el audio
            evento.preventDefault();
           // ruta de el audio 
            let rutaAudio = "imagenesSAO/link-start.mp3";
            if (window.location.pathname.includes("htmlSAO")) {
                rutaAudio = "../imagenesSAO/link-start.mp3";
            }

           // 5. Creamos y reproducimos el sonido con la ruta CORRECTA
            const sonidoLinkStart = new Audio(rutaAudio);
            sonidoLinkStart.play();

            // Mostrar el mensaje en la consola
            console.log("¡Link Start! Navegando a: " + enlace.textContent);
            
            // 6. Después de 4 segundo (4000 milisegundos), cuando el audio ya ha sonado, cambiamos de página
           setTimeout(() => {
                window.location.href = enlace.getAttribute("href");
            }, 4000);

        });
    }); 
});