const ObtenerHoraActual=()=> {
    const horaActual = new Date();
    return horaActual.toLocaleTimeString('es-AR');
}

const ObtenerFechaCompleta = () => {
    const fechaActual = new Date();
    return fechaActual.toLocaleString('es-AR', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });
}

export { ObtenerHoraActual, ObtenerFechaCompleta };