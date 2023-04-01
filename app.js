document.querySelector('#demo').innerHTML = ' Good Services Call Now (240)883-8479';

const masa = document.getElementById('header','blanco');
 

document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if(scroll_position > 160) {
    header.style.height = '80px' ;
    header.style.backgroundColor = '#299684' ;
    header.style.textAlign = 'left' ;
     
     
  } else{
    header.style.height = '120px';
    header.style.backgroundColor = '#f6f6f6' ;
     header.style.textAlign = 'center' ;
      
  }
})