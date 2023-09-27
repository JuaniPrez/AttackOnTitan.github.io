const fechaObjetiva = new Date('2023-11-05T00:00:00');
const botonContador = document.getElementById('contador');

function formatearNumero(numero) {
    return numero < 10 ? '0' + numero : numero;
}

function actualizarContador() {
    // Obtener la fecha y hora actual
    const fechaActual = new Date();

    // Calcular la diferencia en milisegundos entre la fecha actual y la objetiva
    const diferenciaMiliSeg = fechaObjetiva - fechaActual;

    // Verificar si la fecha ya pasó
    if (diferenciaMiliSeg <= 0) {
        console.log('La serie se ha estrenado!')
    } else {
        // Calcular horas, minutos y segundos
        const segundosRestantes = Math.floor(diferenciaMiliSeg / 1000);
        const minutosRestantes = Math.floor(segundosRestantes / 60);
        const horasRestantes = Math.floor(minutosRestantes / 60);
        const diasRestantes = Math.floor(horasRestantes / 24);

        // Calcular los componentes restantes
        const segundos = segundosRestantes % 60;
        const minutos = minutosRestantes % 60;
        const horas = horasRestantes % 24;

        // Formatear los componentes con dos dígitos
        const segundosFormateados = formatearNumero(segundos);
        const minutosFormateados = formatearNumero(minutos);
        const horasFormateadas = formatearNumero(horas);

        // Mostrar el tiempo restante en el formato deseado
        botonContador.innerHTML = `¡ESTRENA EN!<br>Días: ${diasRestantes} <br> ${horasFormateadas}h ${minutosFormateados} min  ${segundosFormateados}s`;
    }
}

setInterval(actualizarContador, 1000); // Actualizar cada segundo

// Llamar a la función para mostrar el contador inicialmente
actualizarContador();
