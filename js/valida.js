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
												required : "O campo Aluno é obrigatório!",
												minlength : "O campo deve conter no mínimo 2 caracteres."
											},
											email : {
												required : "O campo Email é obrigatório!",
												email : "O campo email deve conter um email válido",
												validaIntraer : "O campo email deve conter um email eear.intraer válido"
											},
											esquadrao : {
												required : "O campo Esquadrão é requerido!",
												validaSelect : "Selecione um Esquadrão"

											},
											assunto : {
												required : "O campo Assunto é requerido!",
												minlength : "O campo Assunto deve conter no mínimo 2 caracteres"
											},
											fato : {
												required : "O campo Fato é requerido!",
												minlength : "O campo Fato deve conter no mínimo 2 caracteres"
											},
											pgrad : {
												required : "O campo Posto/Grad. é requerido!",
												minlength : "O campo Posto/Grad. deve conter no mínimo 2 caracteres"
											},
											ramal : {
												required : "O campo Ramal é requerido!",
												minlength : "O campo Ramal deve conter no mínimo 4 caracteres",
												maxlength : "O campo Ramal não pode conter mais de 4 caracteres",
												digits : "O campo Ramal deve conter apenas números!"
											}
										}
									});
				}); // end document.ready
