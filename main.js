var red = document.querySelector('.red');
var green = document.querySelector('.green');
var blue = document.querySelector('.blue');
var main = document.querySelector('.main');

red.addEventListener('click', function (){
  main.textContent = 'Hello, you clicked on the red tab!';
});


green.addEventListener('click', function (){
  main.textContent = 'Hello, you clicked on the green tab. Well done!';
});


blue.addEventListener('click', function (){
  main.textContent = 'Hello, you clicked on the blue tab! Fantastic!';
});
