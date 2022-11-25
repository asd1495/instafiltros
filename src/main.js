/*//Fade 
const fadeEl = document.querySelector('.fade');
let hasScrolled = false;

window.addEventListener('scroll', () => {
    if(!hasScrolled) {
        fadeEl.style.opacity = '0.5';
        hasScrolled = true;
    }
});

//Filters
const filters = document.querySelector('.filters');
const project1 = document.querySelector('.project:nth-child(1)');
const project2 = document.querySelector('.project:nth-child(2)');
const project3 = document.querySelector('.project:nth-child(3)');
const project4 = document.querySelector('.project:nth-child(4)');
const project5 = document.querySelector('.project:nth-child(5)');
const project6 = document.querySelector('.project:nth-child(6)');
const project7 = document.querySelector('.project:nth-child(7)');
const project8 = document.querySelector('.project:nth-child(8)');
const project9 = document.querySelector('.project:nth-child(9)');
const project10 = document.querySelector('.project:nth-child(10)');
const project11 = document.querySelector('.project:nth-child(11)');
const project12 = document.querySelector('.project:nth-child(12)');
const project13 = document.querySelector('.project:nth-child(13)');
const project14 = document.querySelector('.project:nth-child(14)');
const project15 = document.querySelector('.project:nth-child(15)');
const project16 = document.querySelector('.project:nth-child(16)');
const project17 = document.querySelector('.project:nth-child(17)');
const project18 = document.querySelector('.project:nth-child(18)');
const project19 = document.querySelector('.project:nth-child(19)');
const project20 = document.querySelector('.project:nth-child(20)');
const project21 = document.querySelector('.project:nth-child(21)');

const cssRoot = document.querySelector(':root');

filters.addEventListener('click', e => {
    //remove fade
    fadeEl.style.opacity = '0';
    //make clicked button active
    document.querySelector('.filter__btn-active').classList.remove('filter__btn-active');
    e.target.classList.add('filter__btn-active');
    //change img opacity
    cssRoot.style.setProperty('--default-opacity', '0.4');
    cssRoot.style.setProperty('--hover-opacity', '0.3');

    //filter grid
    const filterText = e.target.textContent;
    if(filterText === 'Todo') {

    } else if (filterText === '3D') {
        project1.style.opacity = '0';
        project1.style.transform = 'scale(0)';
        
        project2.style.opacity = '0';
        project2.style.transform = 'scale(0)';

        project3.style.opacity = '0';
        project3.style.transform = 'scale(0)';

        project5.style.opacity = '0';
        project5.style.transform = 'scale(0)';

        project7.style.opacity = '0';
        project7.style.transform = 'scale(0)';

        project8.style.opacity = '0';
        project8.style.transform = 'scale(0)';

        project9.style.opacity = '0';
        project9.style.transform = 'scale(0)';

        project10.style.opacity = '0';
        project10.style.transform = 'scale(0)';

        project11.style.opacity = '0';
        project11.style.transform = 'scale(0)';

        project12.style.opacity = '0';
        project12.style.transform = 'scale(0)';

        project14.style.opacity = '0';
        project14.style.transform = 'scale(0)';

        project15.style.opacity = '0';
        project15.style.transform = 'scale(0)';

        project16.style.opacity = '0';
        project16.style.transform = 'scale(0)';

        project17.style.opacity = '0';
        project17.style.transform = 'scale(0)';

        project18.style.opacity = '0';
        project18.style.transform = 'scale(0)';

        project19.style.opacity = '0';
        project19.style.transform = 'scale(0)';

        project20.style.opacity = '0';
        project20.style.transform = 'scale(0)';

        project21.style.opacity = '0';
        project21.style.transform = 'scale(0)';

        project4.style.transform = 'translateY(-325px)';
        project6.style.transform = 'translate(-326px, -501px)';
        project13.style.transform = 'translate(647px, -1703px)';
        
    } else if (filterText === 'AR') {

    } else if (filterText === 'Cyberpunk') {

    } else if (filterText === 'Divertidos') {

    } else if (filterText === 'Estilos de cámara') {

    }
});*/