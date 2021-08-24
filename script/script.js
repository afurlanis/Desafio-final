		$("#cep").focusout(function(){
			//Início do Comando AJAX
			$.ajax({
				//O campo URL diz o caminho de onde virá os dados
				url: 'https://viacep.com.br/ws/'+$(this).val()+'/json/unicode/',
				//tipo de dados JSON
				dataType: 'json',

				success: function(resposta){
					// preenchimento automaticom
					$("#endereço").val(resposta.logradouro);
					$("#complemento").val(resposta.complemento);
					$("#bairro").val(resposta.bairro);
					$("#cidade").val(resposta.localidade);
					$("#uf").val(resposta.uf);

					$("#numero").focus();
				}
			});
		});
