
const about = document.querySelector('.li-About');
const Projects = document.querySelector('.li-Projects');
const Contact = document.querySelector('.li-Contact');
const Certificados = document.querySelector('.li-Certificados');

const raya_About = document.querySelector('.raya-About');
const raya_Projects = document.querySelector('.raya-Projects ');
const raya_Contact = document.querySelector('.raya-Contact');
const raya_Certificados = document.querySelector('.raya-Certificados');

const logo_inicio = document.querySelector('.logo-inicio');

const animacion_inicio = document.querySelector('.animacion-inicio');




const letra = document.querySelectorAll('.li-a');

const main = document.getElementById('main');

about.addEventListener('click', () => {
    /* console.log('siiii'); */
    raya_About.classList.add('active');
    raya_Projects.classList.remove('active');
    raya_Contact.classList.remove('active');

    letra[0].classList.add('active-letra');
    letra[1].classList.remove('active-letra');
    letra[2].classList.remove('active-letra');

    main.classList.add('about');
    main.classList.remove('proyects');
    main.classList.remove('contact');

    raya_Certificados.classList.remove('active');
letra[3].classList.remove('active-letra');
main.classList.remove('certificados');
});

Projects.addEventListener('click', () => {
    /* console.log('siiii'); */
    raya_About.classList.remove('active');
    raya_Projects.classList.add('active');
    raya_Contact.classList.remove('active');

    letra[0].classList.remove('active-letra');
    letra[1].classList.add('active-letra');
    letra[2].classList.remove('active-letra');

    main.classList.remove('about');
    main.classList.add('proyects');
    main.classList.remove('contact');

    raya_Certificados.classList.remove('active');
letra[3].classList.remove('active-letra');
main.classList.remove('certificados');
});

Contact.addEventListener('click', () => {
    /* console.log('siiii'); */
    raya_About.classList.remove('active');
    raya_Projects.classList.remove('active');
    raya_Contact.classList.add('active');

    letra[0].classList.remove('active-letra');
    letra[1].classList.remove('active-letra');
    letra[2].classList.add('active-letra');

    main.classList.remove('about');
    main.classList.remove('proyects');
    main.classList.add('contact');
    
    raya_Certificados.classList.remove('active');
letra[3].classList.remove('active-letra');
main.classList.remove('certificados');
});

Certificados.addEventListener('click', () => {
    /* console.log('siiii'); */
    raya_About.classList.remove('active');
    raya_Projects.classList.remove('active');
    raya_Contact.classList.remove('active');
    raya_Certificados.classList.add('active');

    letra[0].classList.remove('active-letra');
    letra[1].classList.remove('active-letra');
    letra[2].classList.remove('active-letra');
    letra[3].classList.add('active-letra');

    main.classList.remove('about');
    main.classList.remove('proyects');
    main.classList.remove('contact');
    main.classList.add('certificados');
});

setTimeout(function(){
    logo_inicio.classList.add('linea_logo');
    container.classList.toggle("no-scroll");
}, 1);

setTimeout(function(){
    animacion_inicio.classList.add('opacidad');
    setTimeout(function(){
        animacion_inicio.classList.add('none');
        container.classList.toggle("no-scroll");
    }, 500);
}, 5000);











const header = document.querySelector('.header');
const hamburger = document.querySelector('.hamburger');
const container = document.querySelector('.container');

hamburger.addEventListener('click', () => {
    container.classList.toggle("no-scroll");
    hamburger.classList.toggle("active");
    header.classList.toggle("esconder");
})


















const aboutM = document.querySelector('.li-AboutM');
const ProjectsM = document.querySelector('.li-ProjectsM');
const ContactM = document.querySelector('.li-ContactM');
const CertificadosM = document.querySelector('.li-CertificadosM');

const raya_AboutM = document.querySelector('.raya-AboutM');
const raya_ProjectsM = document.querySelector('.raya-ProjectsM');
const raya_ContactM = document.querySelector('.raya-ContactM');
const raya_CertificadosM = document.querySelector('.raya-CertificadosM');

const letraM = document.querySelectorAll('.li-aM');


aboutM.addEventListener('click', () => {
    /* console.log('siiii'); */
    raya_AboutM.classList.add('active');
    raya_ProjectsM.classList.remove('active');
    raya_ContactM.classList.remove('active');

    letraM[0].classList.add('active-letra');
    letraM[1].classList.remove('active-letra');
    letraM[2].classList.remove('active-letra');

    main.classList.add('about');
    main.classList.remove('proyects');
    main.classList.remove('contact');

    hamburger.classList.toggle("active");
    header.classList.toggle("esconder");
    container.classList.toggle("no-scroll");

    raya_CertificadosM.classList.remove('active');
letraM[3].classList.remove('active-letra');
main.classList.remove('certificados');
});

ProjectsM.addEventListener('click', () => {
    /* console.log('siiii'); */
    raya_AboutM.classList.remove('active');
    raya_ProjectsM.classList.add('active');
    raya_ContactM.classList.remove('active');

    letraM[0].classList.remove('active-letra');
    letraM[1].classList.add('active-letra');
    letraM[2].classList.remove('active-letra');

    main.classList.remove('about');
    main.classList.add('proyects');
    main.classList.remove('contact');

    hamburger.classList.toggle("active");
    header.classList.toggle("esconder");
    container.classList.toggle("no-scroll");

    raya_CertificadosM.classList.remove('active');
letraM[3].classList.remove('active-letra');
main.classList.remove('certificados');
});

ContactM.addEventListener('click', () => {
    /* console.log('siiii'); */
    raya_AboutM.classList.remove('active');
    raya_ProjectsM.classList.remove('active');
    raya_ContactM.classList.add('active');

    letraM[0].classList.remove('active-letra');
    letraM[1].classList.remove('active-letra');
    letraM[2].classList.add('active-letra');

    main.classList.remove('about');
    main.classList.remove('proyects');
    main.classList.add('contact');

    hamburger.classList.toggle("active");
    header.classList.toggle("esconder");
    container.classList.toggle("no-scroll");
    
    raya_CertificadosM.classList.remove('active');
letraM[3].classList.remove('active-letra');
main.classList.remove('certificados');
});

CertificadosM.addEventListener('click', () => {
    /* console.log('siiii'); */
    raya_AboutM.classList.remove('active');
    raya_ProjectsM.classList.remove('active');
    raya_ContactM.classList.remove('active');
    raya_CertificadosM.classList.add('active');

    letraM[0].classList.remove('active-letra');
    letraM[1].classList.remove('active-letra');
    letraM[2].classList.remove('active-letra');
    letraM[3].classList.add('active-letra');

    main.classList.remove('about');
    main.classList.remove('proyects');
    main.classList.remove('contact');
    main.classList.add('certificados');

    hamburger.classList.toggle("active");
    header.classList.toggle("esconder");
    container.classList.toggle("no-scroll");
});
































