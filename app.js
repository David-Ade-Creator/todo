const add= document.getElementById('add');
const todo = document.getElementById('todo');
/*const  trash = "<i class="fa fa-trash-o" aria-hidden="true"></i>";
const done = "<i class="fa fa-check" aria-hidden="true"></i>";*/

add.addEventListener('click', function(){
  const value = document.getElementById('item').value;
  if(value){
    addItemTodo(value);
    document.getElementById('item').value = '';
  }
});

/*function addItemTodo(value){
 todo.innerHTML += `<li>${value}
   <div class="button">
     <button class="remove"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
     <button class="complete"><i class="fa fa-check" aria-hidden="true"></i></button>
   </div>
 </li>`;
}*/
function removeItem(e){
  let item = this.parentNode.parentNode;
  let parent = item.parentNode;

  parent.removeChild(item);
}
function completeItem(e){

  let item = this.parentNode.parentNode;
  let parent = item.parentNode;
  let id = parent.id;

  let target = (id === 'todo') ? document.getElementById('completed') : document.getElementById('todo');

  parent.removeChild(item);
  target.insertBefore(item, target.childNodes[0]);

}

function addItemTodo(value){
  const list = document.getElementById('todo');

  const item = document.createElement('li');
  item.innerText = value;

  const buttons = document.createElement('div');
  buttons.classList.add('button');

  const remove = document.createElement('button');
  remove.classList.add('remove');
  remove.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
//add click event for removing Item
remove.addEventListener('click', removeItem);



  const checked = document.createElement('button');
  checked.classList.add('complete');
  checked.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
//add click event for completing item
checked.addEventListener('click', completeItem);

  buttons.appendChild(remove);
  buttons.appendChild(checked);
  item.appendChild(buttons);
  list.insertBefore(item, list.childNodes[0]);
}
