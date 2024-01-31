var perfilUsuario = {
    nombre: "Diego Rene",
    telefono: "12345678",
    correo: "correo@example.com"
  };
  
  document.addEventListener("DOMContentLoaded", function() {
    mostrarPerfil(perfilUsuario);
  });
  
  function mostrarPerfil(perfil) {
    var nombreElement = document.getElementById("nombre");
    var telefonoElement = document.getElementById("telefono");
    var correoElement = document.getElementById("correo");
  
    nombreElement.textContent = perfil.nombre;
    telefonoElement.textContent = perfil.telefono;
    correoElement.textContent = perfil.correo;
  }
  