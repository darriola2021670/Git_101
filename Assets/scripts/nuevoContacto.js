function guardarRegistro() {
    var nombre = document.getElementById('nombre').value;
    var edad = document.getElementById('edad').value;

    if (nombre.trim() === '' || edad.trim() === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    var lista = document.getElementById('registrosList');
    var nuevoRegistro = document.createElement('li');
    nuevoRegistro.textContent = 'Nombre: ' + nombre + ', Edad: ' + edad;
    lista.appendChild(nuevoRegistro);

    document.getElementById('nombre').value = '';
    document.getElementById('edad').value = '';
}
