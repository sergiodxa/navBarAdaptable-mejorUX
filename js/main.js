function mostrarOcultar(id) {
	var menu = document.getElementById(id);
	menu.style.display = (menu.style.display == 'none') ? 'block' : 'none';
}
window.onload = function(){
	mostrarOcultar('mostrar');
}
// Con esto haremos que al dar click en el ícono del menú muestre u oculte el contenido.