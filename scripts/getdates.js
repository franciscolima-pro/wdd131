let currentYear = new Date().getFullYear()
document.querySelector('#currentYear').textContent = `${currentYear} `

let lastModified = document.lastModified
document.querySelector('#lastModified').textContent = `Last Modification: ${lastModified}`
