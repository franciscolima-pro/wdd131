import {temples} from '../scripts/filtered-temples-data.js';

let currentYear = new Date().getFullYear();
document.querySelector('#currentYear').textContent = `${currentYear} `;

let lastModified = document.lastModified;
document.querySelector('#lastModified').textContent = `Last Modification: ${lastModified}`;

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

const links = document.querySelectorAll('#nav-links a');
const title = document.querySelector('h2');
for (const link of links) {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Evita o comportamento padrão do link (navegação)
        title.textContent = link.textContent; 
    }) 
}

const figuresBox = document.querySelector('#figures');

function showImages(array){
    figuresBox.innerHTML = '';
    array.forEach((i)=>{
        const div = document.createElement('div')
        div.innerHTML = `
        <h3>${i.templeName}</h3>
        <p><span>Location: </span>${i.location}</p>
        <p><span>Dedicated: </span>${i.dedicated}</p>
        <p><span>Size: </span>${i.area} sq ft</p>
        <img src="${i.imageUrl}" alt="${i.templeName}" loading="lazy">
        `;
        div.classList.add('figureDiv')
        figuresBox.appendChild(div)
    })
}

const home = document.getElementById('home');
home.addEventListener('click', ()=>{
    showImages(temples)
})


// Antigo - templos construídos antes de 1900
const oldTemples = document.querySelector('#oldTemples');
const newTemples = document.querySelector('#newTemples');
const largeTemples = document.querySelector('#largeTemples');
const smallTemples = document.querySelector('#smallTemples');

oldTemples.addEventListener('click', (event)=>{
    event.preventDefault();
    const myOldTemples = temples.filter((i)=>{const year = parseInt(i.dedicated.split(',')[0]);
        return year <= 1900;
    });
    showImages(myOldTemples);
})

newTemples.addEventListener('click', (event)=>{
    event.preventDefault();
    const myNewTemples = temples.filter((i)=>{const year = parseInt(i.dedicated.split(',')[0]);
        return year >= 2000;
    });
    showImages(myNewTemples);
})

largeTemples.addEventListener('click', (event)=>{
    event.preventDefault();
    const myLargeTemples = temples.filter((i)=>{const area = i.area;
        return area >= 90000;
    });
    showImages(myLargeTemples);
})

smallTemples.addEventListener('click', (event)=>{
    event.preventDefault();
    const mySmallTemples = temples.filter((i)=>{const area = i.area;
        return area <= 10000;
    });
    showImages(mySmallTemples);
})

showImages(temples)

