 //Modal Temporada = 03

 document.addEventListener("DOMContentLoaded", function () {
    var videoIframe = document.getElementById("videoIframe0");
    var btnVerTeaser = document.getElementById("btn03");
    
    // Al hacer clic en el botón, cargar el video y mostrar el modal
    btnVerTeaser.addEventListener("click", function () {
      videoIframe.src = "../img/video/AttackOnTitanTea03.mp4";
      videoIframe.play();
      $('#videoModal').modal('show');
    });
    
    // Cuando el modal se cierra, detener el video y restablecer la URL
    $('#videoModal').on('hide.bs.modal', function () {
      videoIframe.pause();
      videoIframe.src = "";
    });
  });
  
 //Modal Temporada = 04

 document.addEventListener("DOMContentLoaded", function () {
    var videoIframe = document.getElementById("videoIframe");
    var btnVerTeaser = document.getElementById("btn");
    
    // Al hacer clic en el botón, cargar el video y mostrar el modal
    btnVerTeaser.addEventListener("click", function () {
      videoIframe.src = "../img/video/AttackOnTitanTea04.mp4";
      videoIframe.play();
      $('#videoModal').modal('show');
    });
    
    // Cuando el modal se cierra, detener el video y restablecer la URL
    $('#videoModal').on('hide.bs.modal', function () {
      videoIframe.pause();
      videoIframe.src = "";
    });
  });
  