let tasks = [];

function renderTasks(tasks) {
  // get the list element from the DOM
  let list  = document.querySelector('#todoList')
  list.innerHTML = '' // Limpa a lista antes de renderizar novamente (para evitar duplicações)

  for (let task of tasks){
    let li = document.createElement('li');
    // li.classList.add(task.completed ? 'strike' : ""); /Este é um erro grave que impede o código de funcionar, preferivel usar 'if' como abaixo:
    if (task.completed) {
      li.classList.add("strike");
    }
    

    let p = document.createElement('p');
    p.textContent = task.detail;

    let div = document.createElement('div');

    let deleteSpan = document.createElement('span') //botão delete
    deleteSpan.textContent = '❎'
    deleteSpan.dataset.function = 'delete';

    let completeSpan = document.createElement('span') //botão complete
    completeSpan.textContent = '✅'
    completeSpan.dataset.function = 'complete';

    div.appendChild(deleteSpan); //adiciona os botões ao div
    div.appendChild(completeSpan);

    li.appendChild(p);  // Adiciona os elementos ao item de lista
    li.appendChild(div);

    list.appendChild(li); //Adiciona o item de lista à lista no DOM

    //Assim o modelo abaixo foi criado:

  // `<li ${task.completed ? 'class="strike"' : ""}>
  //  <p>${task.detail}</p>
  //  <div>
  //    <span data-function="delete"></span>
  //    <span data-function="complete"></span>
  //  </div>
  // </li>`
  }
  // loop through the tasks array. transform (map) each task object into the appropriate HTML to represent a to-do.
}

//Outra forma de fazer o renderTask sem precisar criar cada elemnto, usando e criando outra função para o template:
// function taskTemplate(task) {
//   return `
//     <li ${task.completed ? 'class="strike"' : ""}>
//       <p>${task.detail}</p>
//       <div>
//         <span data-function="delete">❎</span>
//         <span data-function="complete">✅</span>
//       </div>
//     </li>`
// }

// function renderTasks(tasks) {
//   // get the list element from the DOM
//   const listElement = document.querySelector("#todoList");
//   listElement.innerHTML = "";
//   // loop through the tasks array. transform (map) each task object into the appropriate HTML to represent a to-do.
//   const html = tasks.map(taskTemplate).join("");
//   listElement.innerHTML = html;
// }

function newTask() {
  let input = document.querySelector('#todo');
  if (input.value.trim() === "") return; // Não adiciona tarefas vazias
  let task = {
    detail: input.value, completed: false
  };
  tasks.push(task);
  renderTasks(tasks);

  input.value = ''
  // get the value entered into the #todo input
  // add it to our arrays tasks
  // render out the list
}

function removeTask(taskElement) {
  // Note the use of Array.filter to remove the element from our task array
  // Notice also how we are using taskElement instead of document as our starting point?
  // This will restrict our search to the element instead of searching the whole document.
  tasks = tasks.filter(//uma lista de tarefas somente com tarefas diferentes "Com nomes diferentes'"
    (task) => task.detail != taskElement.querySelector('p').innerText //Se o texto dentro do 'p' não for diferente do 'detail' da tarefa clicada, somente assim será removida a tarefa, para não remover outras tarefas
  );
  //Depois do array atualizado ele remove a tarefa independentemente da atualização
  // this line removes the HTML element from the DOM
  taskElement.remove();
}

function completeTask(taskElement) {
  // In this case we need to find the index of the task so we can modify it.
  const taskIndex = tasks.findIndex(
    (task) => task.detail === taskElement.childNodes[0].innerText //busca o valor(Onde se encontra o nome da tarefa) do primeiro indice(meu 1° 'p') dentro do 'taskElement'(meu 'li' onde está meu 'p') correspondente ao nome da tarefa clicada

  //Aqui você está assumindo que o texto da tarefa está no primeiro filho do elemento taskElement. Se a estrutura do HTML mudar, isso pode falhar.
  // Se houver duas tarefas com o mesmo texto (task.detail), ele vai marcar apenas a primeira correspondência.
  );
  // once we have the index we can modify the complete field.
  // tasks[taskIndex].completed ? false : true is a ternary expression.
  // If the first part is true (left of the ?), then the value on the left of the : will get returned, otherwise the value on the right of the : will be returned.
  tasks[taskIndex].completed = !tasks[taskIndex].completed; //depois de ter meu index(Nome da tarefa) vou acessar o elementop completed desse index específico e vou colocá-lo como condição, se ele for 'true'(estiver concluido) vai virar 'false' se estiver 'false' vira true.posso deixar apenas: tasks[taskIndex].completed ? false : true; pois apenas isso 'tasks[taskIndex].completed' já é uma condição dizendo: 'se for verdadeiro' mas não tem efeito se eu não armazenar esse resultado de volta no mesmo item, por isso passo ele como o item que recebe esse resultado.
  // toggle adds a class if it is not there, removes it if it is.
  // taskElement.classList.toggle("strike");
  renderTasks(tasks) // Re-renderiza as tarefas para refletir as mudanças
}

function manageTasks(event) {
  // did they click the delete or complete icon?
  let taskItem = event.target.closest('li'); //sabendo qual item foi clicado
  let action = event.target.dataset.function; // sabendo qual ação no item foi clicada
  if(action == 'delete'){ // Agora tendo o valor 'action' posso de3cidir o que fazer
    removeTask(taskItem)
  }else{
    completeTask(taskItem)
  }
  // console.log(action);
  // console.log(taskItem);
  // console.log(event.currentTarget);
  // event.target will point to the actual icon clicked on. We need to get the parent li to work with however. HINT: Remember element.closest()? Look it up if you don't
  // because we added 'data-action="delete"' to each icon in a task we can access a dataset property on our target (e.target.dataset.action)
  // use that in a couple of if statements to decide whether to run removeTask or completeTask
}

document.querySelector('#submitTask').addEventListener('click', newTask);
document.querySelector('#todoList').addEventListener('click', manageTasks);

// Add your event listeners here
// We need to attach listeners to the submit button and the list. Listen for a click, call the 'newTask' function on submit and call the 'manageTasks' function if either of the icons are clicked in the list of tasks.