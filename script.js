'using strict'
const inputBox = document.querySelector('.input-box input');
const listContainer = document.querySelector('.list-container');
const addTask = ()=>{
    if(inputBox.value === ''){
        alert(`can't add empty task`);
    }else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span)
        listContainer.appendChild(li);
        inputBox.value = '';
    }
    saveTask();
}

listContainer.addEventListener('click', (e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('cheacked');
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
    saveTask();
})

const saveTask = ()=>{
    localStorage.setItem('list_data', listContainer.innerHTML);
}

const setTask = ()=>{
    listContainer.innerHTML = localStorage.getItem('list_data');
}

setTask();