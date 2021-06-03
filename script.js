
const about = document.querySelector('.li-About');
const Projects = document.querySelector('.li-Projects');
const Contact = document.querySelector('.li-Contact');
const Certificados = document.querySelector('.li-Certificados');

const raya_About = document.querySelector('.raya-About');
const raya_Projects = document.querySelector('.raya-Projects ');
const raya_Contact = document.querySelector('.raya-Contact');
const raya_Certificados = document.querySelector('.raya-Certificados');

const letra = document.querySelectorAll('.li-a');

const main = document.getElementById('main');

about.addEventListener('click', () => {
    console.log('siiii');
    raya_About.classList.add('active');
    raya_Projects.classList.remove('active');
    raya_Contact.classList.remove('active');

    letra[0].classList.add('active-letra');
    letra[1].classList.remove('active-letra');
    letra[2].classList.remove('active-letra');

    main.classList.add('about');
    main.classList.remove('proyects');
    main.classList.remove('contact');
});

Projects.addEventListener('click', () => {
    console.log('siiii');
    raya_About.classList.remove('active');
    raya_Projects.classList.add('active');
    raya_Contact.classList.remove('active');

    letra[0].classList.remove('active-letra');
    letra[1].classList.add('active-letra');
    letra[2].classList.remove('active-letra');

    main.classList.remove('about');
    main.classList.add('proyects');
    main.classList.remove('contact');
});

Contact.addEventListener('click', () => {
    console.log('siiii');
    raya_About.classList.remove('active');
    raya_Projects.classList.remove('active');
    raya_Contact.classList.add('active');

    letra[0].classList.remove('active-letra');
    letra[1].classList.remove('active-letra');
    letra[2].classList.add('active-letra');

    main.classList.remove('about');
    main.classList.remove('proyects');
    main.classList.add('contact');
});
