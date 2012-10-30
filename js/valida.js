$(document)
		.ready(
				function() {
					jQuery.validator
							.addMethod(
									'validaIntraer',
									function(value, element, param) {
										var expression = new RegExp(
												'^[a-zA-Z0-9]+([_-]?[0-9a-zA-Z]+)*@eear(.)intraer$');
										return expression.test(value);
									});

					jQuery.validator.addMethod('validaSelect', function(value,
							element, param) {
						if ($("#cboEsquadrao").val() > 0) {
							return true;
						} else {
							return false;
						}
					});

					$('#form')
							.validate(
									{
										rules : {
											aluno : {
												minlength : 2,
												required : true
											},
											email : {
												required : true,
												email : true,
												validaIntraer : true
											},
											esquadrao : {
												required : true,
												validaSelect : true
											},
											assunto : {
												minlength : 2,
												required : true
											},
											fato : {
												minlength : 2,
												required : true
											},
											pgrad : {
												minlength : 2,
												required : true
											},
											ramal : {
												minlength : 4,
												maxlength : 4,
												required : true,
												digits : true
											}

										},
										highlight : function(label) {
											$(label).closest('.control-group')
													.removeClass('success');
											$(label).closest('.control-group')
													.addClass('error');
										},
										success : function(label) {
											label.text('OK!').addClass('valid')
													.closest('.control-group')
													.addClass('success');
										},
										messages : {
											aluno : {
												required : "O campo Aluno � obrigat�rio!",
												minlength : "O campo deve conter no m�nimo 2 caracteres."
											},
											email : {
												required : "O campo Email � obrigat�rio!",
												email : "O campo email deve conter um email v�lido",
												validaIntraer : "O campo email deve conter um email eear.intraer v�lido"
											},
											esquadrao : {
												required : "O campo Esquadr�o � requerido!",
												validaSelect : "Selecione um Esquadr�o"

											},
											assunto : {
												required : "O campo Assunto � requerido!",
												minlength : "O campo Assunto deve conter no m�nimo 2 caracteres"
											},
											fato : {
												required : "O campo Fato � requerido!",
												minlength : "O campo Fato deve conter no m�nimo 2 caracteres"
											},
											pgrad : {
												required : "O campo Posto/Grad. � requerido!",
												minlength : "O campo Posto/Grad. deve conter no m�nimo 2 caracteres"
											},
											ramal : {
												required : "O campo Ramal � requerido!",
												minlength : "O campo Ramal deve conter no m�nimo 4 caracteres",
												maxlength : "O campo Ramal n�o pode conter mais de 4 caracteres",
												digits : "O campo Ramal deve conter apenas n�meros!"
											}
										}
									});
				}); // end document.ready
