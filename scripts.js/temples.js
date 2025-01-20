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