const input = document.querySelector('#favchapter');
const button = document.querySelector('button');
const list = document.querySelector('________');
const li  = document.createElement('li');
const deleteButton = document.querySelector('button');
li.textContent = input.value;
deleteButton.textContent = '❌';
li.append(deleteButton);
list.append(li);