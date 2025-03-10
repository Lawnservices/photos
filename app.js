document.addEventListener('DOMContentLoaded', function(){
 

const masa = document.getElementById('header','blanco');
 

document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if(scroll_position > 60) {
    masa.style.height = '60px' ;
    masa.style.backgroundColor = '#299684' ;
    masa.style.textAlign = 'left' ;
    demo.style.display = 'block'; 
    demo.style.fontSize= '18px';
    masa.style.padding = '20px';
     
  } else{
    masa.style.height = '100px';
    masa.style.backgroundColor = '#f6f6f6' ;
    masa.style.textAlign = 'center' ;
    demo.style.display = 'none'; 
    
      
  }
})
});