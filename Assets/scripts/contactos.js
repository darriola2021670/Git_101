function redirectToDetalle(contacto) {
  if (contacto === 'DiegoRene') {
    window.location.href = 'detalleContacto1.html';
  } else if (contacto === 'RosaDiaz') {
    window.location.href = 'detalleContacto2.html';
  } else if (contacto === 'JoseRoberto'){
    window.location.href = 'detalleContacto3.html';
  } else if (contacto === 'PabloAndre'){
    window.location.href = 'detalleContacto4.html';
  } else if (contacto === 'CesarAndre'){
    window.location.href = 'detalleContacto5.html';
  }
}

function redirectToAgregarContacto() {
  alert("Redirigiendo a la página de agregar contacto");
  window.location.href   = "nuevoContacto.html";
}

function redirectToFavoritos() {
  window.location.href   = "favoritos.html";
}

function redirectToPerfil() {
  window.location.href   = "perfil.html";
}