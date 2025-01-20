let input = document.querySelector('#favchap');
let button = document.querySelector('button');
let list = document.querySelector('#list');

button.addEventListener('click', function(){
    if(input.value.trim() == ''){
        return input.focus()
    };
    
    let li = document.createElement('li'); // adiciona o valor do input a meu li
    li.textContent = input.value
    let butremove = document.createElement('button');
    butremove.textContent = '❌'

    butremove.addEventListener('click', function(){
    list.removeChild(li);
    input.focus();
    });

    li.append(butremove);
    list.append(li);
    input.value = '';
    input.focus()
});

