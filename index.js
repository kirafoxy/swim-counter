let button = document.querySelector('button');
let counterText = document.querySelector('.counter');
let resetButton = document.querySelector('.btn_reset');



let counter = 0;


button.addEventListener('click', function() {
    counter = counter + 1;
    counterText.innerText = counter;

});

resetButton.addEventListener('click', function() {
    counter = counter * 0;
    counterText.innerText = counter;

});