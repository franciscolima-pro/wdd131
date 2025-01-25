let currentYear = new Date().getFullYear();
document.querySelector('#currentYear').textContent = `${currentYear} `;

let lastModified = document.lastModified;
document.querySelector('#lastModified').textContent = `Last Modification: ${lastModified}`;

const temp = document.getElementById('temp');
const condit = document.getElementById('condit');
const wind = document.getElementById('wind');

temp.textContent = 10;
condit.textContent = 'Partly Cloudy';
wind.textContent = 5;

function calculateWindChill(temp, wind){
    let wchill = document.getElementById('wchill');  
    if(temp <= 10 && wind > 4.8){
        const windChill = 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
        return wchill.textContent = windChill.toFixed(1);
    }else{
        return wchill.textContent = 'N/A'
    };
};

calculateWindChill(temp.textContent, wind.textContent)