document.addEventListener("DOMContentLoaded", function () {
  // Video 1
  var videoIframe1 = document.getElementById("videoIframe1");
  var btnVerTeaser1 = document.getElementById("btn01");

  // Video 2
  var videoIframe2 = document.getElementById("videoIframe2");
  var btnVerTeaser2 = document.getElementById("btn02");

  // Video 3
  var videoIframe3 = document.getElementById("videoIframe3");
  var btnVerTeaser3 = document.getElementById("btn03");

  // Video 4
  var videoIframe4 = document.getElementById("videoIframe4");
  var btnVerTeaser4 = document.getElementById("btn04");

  // Función para cargar y mostrar un video en el modal
  function cargarVideoYMostrarModal(videoIframe, modalID, videoSource) {
    videoIframe.src = videoSource;
    // Pausar el video actual si se está reproduciendo
    var videos = document.querySelectorAll("video");
    videos.forEach(function (video) {
      if (video !== videoIframe && !video.paused) {
        video.pause();
      }
    });
    // Reproducir el nuevo video
    videoIframe.play();
    $(modalID).modal('show');
  }

  // Asignar eventos para los botones de cada tipo de video
  btnVerTeaser1.addEventListener("click", function () {
    cargarVideoYMostrarModal(videoIframe1, '#videoModal01', "./img/video/AttackOnTitanTea01.mp4");
  });

  btnVerTeaser2.addEventListener("click", function () {
    cargarVideoYMostrarModal(videoIframe2, '#videoModal02', "./img/video/AttackOnTitanTea02.mp4");
  });

  btnVerTeaser3.addEventListener("click", function () {
    cargarVideoYMostrarModal(videoIframe3, '#videoModal03', "./img/video/AttackOnTitanTea03.mp4");
  });

  btnVerTeaser4.addEventListener("click", function () {
    cargarVideoYMostrarModal(videoIframe4, '#videoModal', "./img/video/AttackOnTitanTea04.mp4");
  });

  // Cuando un modal se cierra, detener el video y restablecer la URL
  $('#videoModal01, #videoModal02, #videoModal03, #videoModal').on('hide.bs.modal', function () {
    videoIframe1.pause();
    videoIframe1.src = "";
    videoIframe2.pause();
    videoIframe2.src = "";
    videoIframe3.pause();
    videoIframe3.src = "";
    videoIframe4.pause();
    videoIframe4.src = "";
  });
});
