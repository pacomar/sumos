// File: app/scripts/main.js
'use strict';
(function() {
	console.log('Aplicación iniciada!');
})();

function cambiaHistoria (img) {
  $('#imagen_sumo').html("<img src='"+img.children[0].src+"' alt='"+img.children[0].dataset.nombre+"'>");
  $('#nombre_sumo').html(img.children[0].dataset.nombre);
  $('#descripcion_sumo').html(img.children[0].dataset.historia);
}
