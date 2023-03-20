const myForm = document.querySelector('#create-task-form');
const myInput = document.querySelector('#new-task-description');
const myUl = document.querySelector('#tasks');
const userList = document.querySelector('#list');
const btn = document.querySelector('.btn')

document.addEventListener('DOMContentLoaded', () => {
myForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const li = document.createElement('li');
  const btn1 = document.createElement('button')
  btn1.addEventListener('click', handleClick)
  btn1.textContent = 'x'
li.appendChild(document.createTextNode(`${myInput.value}`));
li.appendChild(btn1)
myUl.appendChild(li);
myForm.reset(); 
})
})

function handleClick(e) {
  e.target.parentNode.remove();

}
