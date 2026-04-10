const result = document.getElementById('result');  
const plus = document.getElementById('plus');      
const minus = document.getElementById('minus');    
const msg = document.getElementById('msg');        
let count = 0;

function update() {
    result.textContent = count;
    
    if (count > 0) {
        result.style.backgroundColor = '#ffff18';  
    } else if (count < 0) {
        result.style.backgroundColor = '#17db1e';  
    } else {
        result.style.backgroundColor = '#ff3022';  
    }
    
    if (count >= 10) {
        plus.disabled = true;   
    } else {
        plus.disabled = false;   
    }
    
    if (count <= -10) {
        minus.disabled = true;   
    } else {
        minus.disabled = false;   
    }
    
    if (count === 10 || count === -10) {
        msg.textContent = 'Вы достигли экстремального значения!';
        msg.style.backgroundColor = '#ff0000';
        msg.style.color = 'white';
    } else {
        msg.textContent = '';
        msg.style.backgroundColor = '#f0f0f0';
        msg.style.color = '#333';
    }
}

function increase() {
    if (count < 10) {
        count = count + 1;  
        update();          
    }
}

function decrease() {
    if (count > -10) {
        count = count - 1;  
        update();           
    }
}

plus.addEventListener('click', increase);   
minus.addEventListener('click', decrease);  

update();