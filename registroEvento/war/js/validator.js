$('#registrationForm').bootstrapValidator({
 
	 feedbackIcons: {
 
		 valid: 'glyphicon glyphicon-ok',
 
		 invalid: 'glyphicon glyphicon-remove',
 
		 validating: 'glyphicon glyphicon-refresh'
 
	 },
 
	 fields: {
 
		 nombre: {
 
			 validators: {
 
				 notEmpty: {
 
					 message: 'El nombre es requerido'
 
				 },
				 
				 regexp: {
					 
					 regexp: /^[A-Z0-9 a-z]*$/,
 
					 message: 'Es un nombre no válido'
 
				 }
	 	
 
			 }
 
		 },
		 
		 descripcion: {
			 
			 validators: {
 
				 notEmpty: {
 
					 message: 'Una breve descripción es requerida'
 
				 }
 
			 }
 
		 },
		 
		 categoria: {
			 
			 validators: {
 
				 notEmpty: {
 
					 message: 'Una categoria es requerida'
 
				 }
 
			 }
 
		 },
 
		 fecha: {
 
			 validators: {
 
				 notEmpty: {
 
					 message: 'La fecha es requerida y no puede ser vacia'
 
				 },
				 
				 date: {
					 
					 format: 'DD/MM/YYYY',
 
					 message: 'La fecha no es valida'
 
				 }

				 
			 }
 
		 },


	 }
 
});