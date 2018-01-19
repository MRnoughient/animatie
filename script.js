const button = document.getElementById('button');

const squares = ['square1','square2','square3','square4'];

const shift = () => {
  for(let i=0; i<squares.length + 1;i++){
    setTimeout(function(){
      let square = document.querySelector('.square' + [i]);
      square.classList.toggle('active-out');
    }, 200*i);
  }
  
}

button.addEventListener('click', shift);