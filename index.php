<?php ?>

<!DOCTYPE HTML>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->

<html lang="pt-BR" class="no-js">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta charset="iso-8859-1">
<title>FICHA DE OBSERVAÇÕES - FOBS</title>
<!-- Bootstrap -->
<script src="js/jquery-1.8.2.js"></script>
<link href="css/bootstrap.css" rel="stylesheet">
<link href="css/bootstrap-responsive.css" rel="stylesheet"
<link href="css/general.css" rel="stylesheet">
<script src="js/jquery.validate.js"></script>
<script src="js/bootstrap.js"></script>
<script src="js/valida.js"></script>
<script src="bootbox.min.js"></script>
</head>
<body>
	<div class="container-fluid">
		<div class="row-fluid" id="title">
			<div class="span6 offset3 well">
				<div class="row-fluid offset0">
					<h4>CORPO DE ALUNOS</h4>
				</div>
				<div class="row-fluid offset0">
					<H5>FICHA DE OBSERVAÇÃO - FOBS</H5>
				</div>
			</div>
		</div>
		<div class="row-fluid">			
			<div class="row-fluid span6 offset3 well">
				<form id="form" class="form-horizontal"
					action="enviar.php" method="post" style="background-color:;">
					<fieldset class="row-fluid">
						<div class="control-group">
							<label class="control-label" for="inputAluno">Aluno</label>
							<div class="controls">
								<input class="input-xxlarge" type="text" name="aluno"
									id="inputAluno" placeholder="Nome do Aluno">
							</div>
						</div>
						<div class="control-group">
							<label class="control-label" for="selectEsquadrao">Esquadrão</label>
							<div class="controls">
								<select id="cboEsquadrao" name="esquadrao">
									<option selected="selected" value=0>ESQUADRÃO</option>
									<option value=1>Esquadrão Branco</option>
									<option value=2>Esquadrão Azul</option>
									<option value=3>Esquadrão Amarelo</option>
									<option value=4>Esquadrão Verde</option>
									<option value=5>Esquadrão Prata</option>
								</select>
							</div>
						</div>
						<div class="control-group">
							<label class="control-label" for="inputAssunto">Assunto</label>
							<div class="controls">
								<input type="text" id="assunto" name="assunto"
									placeholder="Digite o Assunto">
							</div>
						</div>
						<div class="control-group">
							<label class="control-label" for="txtFato">Fato</label>
							<div class="controls">
								<textarea id="txtFato" name="fato" rows="10" cols="60"
									class="input-xxlarge"></textarea>
							</div>
						</div>
						<div class="control-group">
							<label class="control-label" for="inputPGrad">Posto/Grad. e Nome
							</label>
							<div class="controls">
								<input type="text" id="inputPGrad" name="pgrad"
									placeholder="Posto/Graduação e Nome">
							</div>
						</div>
						<div class="control-group">
							<label class="control-label" for="inputEmailFato">E-Mail</label>
							<div class="controls">
								<input type="email" id="inputEmail" name="email"
									placeholder="exemplo@exemplo.com">
							</div>
						</div>
						<div class="control-group">
							<label class="control-label" for="inputRamal">Ramal</label>
							<div class="controls">
								<input type="text" id="inputRamal" name="ramal"
									placeholder="Ramal para contato">
							</div>
						</div>
						<div class="control-group">
							<div class="controls">
								<input class="btn btn-primary" type="submit" id="buttonEnviar"
									value="Enviar"
									click="javascript:bootbox.alert('Hello world!');">
							</div>
						</div>
					</fieldset>
				</form>
			</div>
		</div>
	</div>

</body>
</html>
