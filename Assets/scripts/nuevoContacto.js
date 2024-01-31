function guardarRegistro() {
    var nombre = document.getElementById('nombre').value;
    var numero = document.getElementById('numero').value;
    var correo = document.getElementById('correo').value;

    if (nombre.trim() === '' || numero.trim() === '' || correo.trim() === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    var lista = document.getElementById('registrosList');
    var nuevoRegistro = document.createElement('li');
    nuevoRegistro.textContent = 'Nombre: ' + nombre + ', Número: ' + numero + ', Correo: ' + correo;
    lista.appendChild(nuevoRegistro);

    document.getElementById('nombre').value = '';
    document.getElementById('numero').value = '';
    document.getElementById('correo').value = '';
}

