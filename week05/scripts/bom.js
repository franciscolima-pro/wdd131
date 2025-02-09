let input = document.querySelector('#favchap');
let button = document.querySelector('button');
let list = document.querySelector('#list');

button.addEventListener('click', function(){
    if(!input.value || input.value == ''){
        return input.focus();
    };

    displayList(input.value);

    chaptersArray.push(input.value);

    setChapterList();

    input.value = '';
    input.focus();
});

let chaptersArray = getChapterList() || [];

chaptersArray.forEach((chapter)=>{
    displayList(chapter);
});

function getChapterList(){
    return JSON.parse(localStorage.getItem('myFavBOMList'))
};

function setChapterList(){
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray))
}

function deleteChapter(){
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList()
}

function displayList(item){
    
    let li = document.createElement('li'); // adiciona o valor do input a meu li
    li.textContent = item
    let butremove = document.createElement('button');
    butremove.textContent = '❌'
    
    butremove.addEventListener('click', function(){
    list.removeChild(li);
    chaptersArray = chaptersArray.filter((chapter) => chapter !== item); // Remove do array
    setChapterList(); // Atualiza o Local Storage
    input.focus();
    });
    
    li.append(butremove);
    list.append(li);
}


