let input = document.querySelector('.activity');
let addBtn = document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');

// add new item to list
addBtn.addEventListener('click', () => {
  if (input.value.trim() != 0) {
    let newItem = document.createElement("ol")
    newItem.classList.add('item')
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    // This arrangement can be altered based on how we want the date's format to appear.
    let currentDate = `${day}-${month}-${year}`;
    newItem.innerHTML = ` 
    <p>${input.value}</p>
    <span>${currentDate}</span>
    <div class="item-btn">
    <i class="fa fa-times"></i>
    <i class="fa fa-handshake-o"></i>
    </div>`
    tasks.appendChild(newItem);
    input.value = "";
  } else (
    alert('Please enter a task')
  )
})

// delete item from list

 tasks.addEventListener('click',(e)=>{
  if(e.target.classList.contains('fa-times')){
    e.target.parentElement.parentElement.remove();
  }
 })

 // mark item as completed 

 tasks.addEventListener('click',(e)=>{
  if(e.target.classList.contains('fa-handshake-o')){
    e.target.parentElement.parentElement.classList.
    toggle('item-completed');
  }
 })