import {products} from './form-data.js'

let currentYear = new Date().getFullYear();
document.querySelector('#currentYear').textContent = `${currentYear}`;

let lastModified = document.lastModified;
document.querySelector('#lastModified').textContent = `Last Modification: ${lastModified}`;

const productsBox = document.querySelector('#productname');
const review = document.querySelector('#rating p');

function reviewFunc(){
    let reviewNum = Number(window.localStorage.getItem('reviewNum-ls')) || 0;

    if(!reviewNum == 0){
        review.textContent = reviewNum;
    }else{
    review.textContent = `This is your first visit. 🥳 Welcome!`;
    };

    reviewNum++;

    localStorage.setItem('reviewNum-ls', reviewNum);
}

function showProduct(){
    products.forEach((i)=>{
        let product = document.createElement('option');
        product.innerHTML=`${i.name}`;
        product.value = i.id;
        productsBox.appendChild(product);
        console.log(product)
    })
}

if(productsBox)showProduct();
if(review)reviewFunc();





