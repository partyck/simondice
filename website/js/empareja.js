// JavaScript Document
(function() {
	var form = document.getElementById('newEmp');
	var btnEmp = document.getElementById('submit');
	
	var submitted = false;
	
	addEvent(form, 'submit', function(e) {
		btnEmp.disabled = true;
		submitted = true;
		btnEmp.className = 'disabled';	
		e.preventDefault();
		alert("Se encontro a la persona: " + hallarPersona().nombre);
	});
	
}());

function hallarPersona(){
	var personaEncontrada = {		
		nombre: 'Fantasmin',	
		Sexo: 'Desconocido',
		Edad: 655
	}
	return personaEncontrada;
}

// Helper function to add an event listener
function addEvent (el, event, callback) {
  if ('addEventListener' in el) {                  // If addEventListener works
    el.addEventListener(event, callback, false);   // Use it
  } else {                                         // Otherwise
    el['e' + event + callback] = callback;         // CreateIE fallback
    el[event + callback] = function () {
      el['e' + event + callback](window.event);
    };
    el.attachEvent('on' + event, el[event + callback]);
  }
}