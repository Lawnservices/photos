document.addEventListener('DOMContentLoaded', function () {


  const masa = document.getElementById('header', 'blanco');


  document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 160) {
      masa.style.height = '80px';
      masa.style.backgroundColor = '#061125';
      masa.style.textAlign = 'left';
      demo.style.display = 'block';
      demo.style.fontSize = '16px';


    } else {
      masa.style.height = '80px';
      masa.style.backgroundColor = '#f6f6f6';
      masa.style.textAlign = 'center';
      demo.style.display = 'none';


    }
  });

  let fecha =  new Date();
  let fechas = fecha.getFullYear();

  document.getElementById('fecha').textContent = `© ${fechas} Laguna Lawn Services. All Rights Reserved.`;
});