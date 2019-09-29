function init(){
    window.sr = ScrollReveal();

        sr.reveal(".navbar", {
            duration: 2000,
            origin: "bottom"
        });

        sr.reveal(".header-content-left", {
            duration: 2000,
            origin: "top",
            distance: "300px"
        });
        sr.reveal(".header-content-right", {
            duration: 2000,
            origin: "right",
            distance: "300px"
        });

        sr.reveal(".header-btn", {
            duration: 2000,
            origin: "bottom",
            delay: 1000
        });
        sr.reveal("#nosotros", {
            duration: 2000,
            origin: "bottom",
            viewFactor: 0.2
        });
        sr.reveal("#first-card", {
            duration: 2000,
            origin: "left",
            distance: "300px",
            viewFactor: 0.2
        });
        sr.reveal("#second-card", {
            duration: 2000,
            origin: "top",
            distance: "300px",
            viewFactor: 0.2,
            delay: 1000
        });
        sr.reveal("#third-card", {
            duration: 2000,
            origin: "bottom",
            distance: "300px",
            viewFactor: 0.2,
            delay: 2000
        });
        sr.reveal("#fourth-card", {
            duration: 2000,
            origin: "right",
            distance: "300px",
            viewFactor: 0.2,
            delay: 3000
        });
        sr.reveal("#acordeon", {
            duration: 2000,
            scale: 0.1
        });
        sr.reveal("#equipo", {
            duration: 2000,
            scale: 0.1
        });
        sr.reveal("#person1", {
            duration: 2000,
            origin: "left",
            distance: "300px",
            viewFactor: 0.2,
            delay: 2000
        });
        sr.reveal("#person2", {
            duration: 2000,
            origin: "top",
            distance: "500px",
            viewFactor: 0.2,
            delay: 3000
        });
        sr.reveal("#person3", {
            duration: 2000,
            origin: "bottom",
            distance: "500px",
            viewFactor: 0.2,
            delay: 4000
        });
        sr.reveal("#person4", {
            duration: 2000,
            origin: "right",
            distance: "300px",
            viewFactor: 0.2,
            delay: 5000
        });
        sr.reveal("#f1", {
            duration: 1500,
            scale: 4.0,
            delay: 6000
        });
        sr.reveal("#t1", {
            duration: 1500,
            scale: 4.0,
            delay: 6200
        });
        sr.reveal("#i1", {
            duration: 1500,
            scale: 4.0,
            delay: 6400
        });
        sr.reveal("#f2", {
            duration: 1500,
            scale: 4.0,
            delay: 6600
        });
        sr.reveal("#t2", {
            duration: 1500,
            scale: 4.0,
            delay: 6800
        });
        sr.reveal("#i2", {
            duration: 1500,
            scale: 4.0,
            delay: 7000
        });
        sr.reveal("#f3", {
            duration: 1500,
            scale: 4.0,
            delay: 7200
        });
        sr.reveal("#t3", {
            duration: 1500,
            scale: 4.0,
            delay: 7400
        });
        sr.reveal("#i3", {
            duration: 1500,
            scale: 4.0,
            delay: 7600
        });
        sr.reveal("#f4", {
            duration: 1500,
            scale: 4.0,
            delay: 7800
        });
        sr.reveal("#t4", {
            duration: 1500,
            scale: 4.0,
            delay: 8000
        });
        sr.reveal("#i4", {
            duration: 1500,
            scale: 4.0,
            delay: 8200
        });
        sr.reveal("#noticias", {
            duration: 3000,
            opacity: 0
        });
        sr.reveal(".mapa", {
            duration: 3000,
            scale: 0
        });
        sr.reveal("#txtnombre", {
            duration: 2000,
            origin: "left",
            distance: "700px",
            viewFactor: 0.2
        });
        sr.reveal("#txtemail", {
            duration: 2000,
            origin: "left",
            distance: "700px",
            viewFactor: 0.2,
            delay: 1000
        });
        sr.reveal("#txttexto", {
            duration: 2000,
            origin: "left",
            distance: "700px",
            viewFactor: 0.2,
            delay: 2000
        });
        sr.reveal("#enviar", {
            duration: 2000,
            origin: "bottom",
            delay: 3000
        });
        sr.reveal("#address", {
            duration: 2000,
            origin: "bottom",
            distance: "300px",
            delay: 3000
        });
        sr.reveal("#emails", {
            duration: 2000,
            origin: "bottom",
            distance: "300px",
            delay: 4000
        });
        sr.reveal("#copy", {
            duration: 2000,
            origin: "top",
            distance: "300px",
        });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

};

window.onload(init());