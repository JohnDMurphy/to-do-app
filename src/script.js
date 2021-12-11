const input = document.querySelector('.my-input');
const btn = document.querySelector('.my-btn');
const dels = document.querySelectorAll('.del');
const checkbox = document.querySelectorAll('.checkbox');
const listItem = document.querySelectorAll('.todo-item');
const theList = document.querySelector('#the-list');

// Create and add items to the list
btn.addEventListener('click', function() {
    // Check if input is empty if it is do nothing
    if(input.value === ''){
        return;
    }
    // Create list div
    listDiv = document.createElement('div');
    listDiv.setAttribute("class", "list-item");
    // Create checkbox
    ckbox = document.createElement('input');
    ckbox.type = "checkbox";
    ckbox.name = "checkbox";
    ckbox.setAttribute("class", "checkbox");
    // Create li
    li = document.createElement('li');
    li.setAttribute('class', 'todo-item');
    li.innerText = input.value;
    //  Create del btn
    delbtn = document.createElement('span');
    // delbtn.setAttribute('class', 'del')
    delbtn.innerHTML = '<span class="del">&#10060</span>';
    

    
    listDiv.appendChild(ckbox);
    listDiv.appendChild(li);
    listDiv.appendChild(delbtn);
    theList.appendChild(listDiv);

    input.value = '';
})


// Deletes selected list item
dels.forEach((del, i) => {
    del.addEventListener('click', function(){
        this.parentNode.remove();
    })
})

// Checks of selected list item
checkbox.forEach((check, i) => {
    check.addEventListener('change', function() {
        if(check.checked){
            check.nextElementSibling.classList.toggle("done");
        } else {
            check.nextElementSibling.classList.toggle("done");
        }
    })
})