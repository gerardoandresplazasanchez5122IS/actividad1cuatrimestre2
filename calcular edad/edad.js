const calcularEdad = (fechaNacimiento)  =>   {
    const fechaActual = new Date();
    const añoActual=parseInt(fechaActual.getFullYear());
    const mesActual=parseInt(fechaActual.getMonth()) + 1;
    const diaActual=parseInt(fechaActual.getDate());

    const añoNacimiento=parseInt(String(fechaNacimiento).substring(0,4));
    const mesNacimiento=parseInt(String(fechaNacimiento).substring(5,7));
    const diaNacimiento=parseInt(String(fechaNacimiento).substring(8,10));

    let edad = añoActual-añoNacimiento;
    if (mesActual<mesNacimiento){
        edad--
    } else if (mesActual==mesNacimiento){
        if (diaActual<diaNacimiento){
            edad--;
        }
    }
    return edad;

}