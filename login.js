
document.getElementById('loginForm').addEventListener('submit', function(evento) {
    
    // Evita que la página se recargue al darle al botón
    evento.preventDefault();

    // Capturamos los valores
    const usuarioIngresado = document.getElementById('username').value;
    const passwordIngresada = document.getElementById('password').value;
    const mensajeError = document.getElementById('error-msg');

    // Definimos las credenciales 
    const usuarioCorrecto = "admin";
    const passwordCorrecta = "12345";

    // Lógica de validación
    if (usuarioIngresado === usuarioCorrecto && passwordIngresada === passwordCorrecta) {
        // Credenciales correctas: redirige a la página principal
        window.location.href = 'index.html';
    } else {
        // Credenciales incorrectas: muestra error
        mensajeError.classList.remove('error-hidden'); // Quitamos tu clase oculta 
        mensajeError.style.display = 'block'; 
        mensajeError.style.color = '#e74c3c'; 
        mensajeError.style.marginTop = '15px'; 
        mensajeError.style.textAlign = 'center';
        mensajeError.style.fontWeight = 'bold';
    }
});