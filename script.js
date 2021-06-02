
const about = document.querySelector('.li-About');
const Projects = document.querySelector('.li-Projects');
const Contact = document.querySelector('.li-Contact');

const raya_About = document.querySelector('.raya-About');
const raya_Projects = document.querySelector('.raya-Projects ');
const raya_Contact = document.querySelector('.raya-Contact');

const letra = document.querySelectorAll('.li-a');

about.addEventListener('click', () => {
    console.log('siiii');
    raya_About.classList.add('active');
    raya_Projects.classList.remove('active');
    raya_Contact.classList.remove('active');

    letra[0].classList.add('active-letra');
    letra[1].classList.remove('active-letra');
    letra[2].classList.remove('active-letra');
});

Projects.addEventListener('click', () => {
    console.log('siiii');
    raya_About.classList.remove('active');
    raya_Projects.classList.add('active');
    raya_Contact.classList.remove('active');

    letra[0].classList.remove('active-letra');
    letra[1].classList.add('active-letra');
    letra[2].classList.remove('active-letra');
});

Contact.addEventListener('click', () => {
    console.log('siiii');
    raya_About.classList.remove('active');
    raya_Projects.classList.remove('active');
    raya_Contact.classList.add('active');

    letra[0].classList.remove('active-letra');
    letra[1].classList.remove('active-letra');
    letra[2].classList.add('active-letra');
});
