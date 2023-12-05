'use strict';

const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');
const value = document.getElementById('value');

let i = 0;

reset.addEventListener('click', function() {
    
    value.textContent = 0 ;
    value.style.color = 'black' ;
});

increase.addEventListener('click', function() {
    value.textContent++ ;
    if (value.textContent > 0) {

        value.style.color = 'green';
    
    }
});

decrease.addEventListener('click', function() {
    value.textContent--;
    if (value.textContent < 0) {

        value.style.color = 'red';
        }
});



