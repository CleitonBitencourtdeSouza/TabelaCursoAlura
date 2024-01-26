/* console.log(document.querySelector("h1")); /*Usamos o query.Selector quando queremos buscar alguma tag do HTML , para fazer algumas modificações(não só modicações)*/ ; 
			/* console.log(titulo); /*Irá demosntrar o atg h1 com o texto*/
			/* console.log(titulo.textContent); /*Irá demosntrar somente o conteudo do tag, no caso o que esta escrito dentro da tag h1 */ 
			
			var titulo = document.querySelector('.titulo'); /* chamando a tag que eu desejo alterar*/
			titulo.textContent = 'Nutrição Aparecida';

			var pacientes = document.querySelectorAll(".paciente"); // usamos o "#" para selecionar o id , usamos o "." para usarmos a classe
			//querySelector irá buscar uma unica classe ou id , mesmo que no codigo possua varias linhas utilizando o mesmo nome
			//querySelectorAll irá selecionar todas as classe ou id que possuem com o mesmo nome

			
			for (var i = 0; i < pacientes.length ; i++){

				var paciente = pacientes[i];

				var tdPeso = paciente.querySelector(".info-peso"); // irá trazer a tag toda do peso , com a informação junto
				var peso = tdPeso.textContent; // somente o valor do peso ; textContent é o conteudo de texto , no caso desse exemplo é o 100 que é peso

				var tdAltura = paciente.querySelector(".info-altura")
				var altura = tdAltura.textContent;

				var tdImc = paciente.querySelector(".info-imc");
				var pesoEhValida = validaPeso(peso);
				var alturaEhValida = validaAltura(altura);

				if(!pesoEhValida){
					console.log("Peso inválido");
					pesoEhValida = false;
					tdImc.textContent = "Peso Inválido";
					paciente.classList.add("paciente-invalido");	
				} // "||" essas barras simbolizam o " ou " , se o peso for menor que 0 "ou" maior que 1000

				if(!validaAltura){					//"!" funcção not , essa função inverte os sinais de possitivo para negativo e negativo para positivo
					console.log("Altura inválido");
					alturaEhValida = false;
					tdImc.textContent = "Altura Inválido";	
					paciente.classList.add("paciente-invalido");	

				}	


				if (alturaEhValida && pesoEhValida){
				var imc = calculaImc(peso,altura);
				tdImc.textContent = imc; 
				} 

			function validaPeso(){
				if(peso >= 0 && peso <1000){
					return true;
				}else{
					return false;
				}
			}

			function validaAltura(altura){
				if(altura >=0 && altura <=3.0){
					return true;
				}else{
					return false;
				}
			}	
				
			}
			
			function calculaImc(peso,altura){
				var imc = 0;

				imc = peso / (altura * altura);
				return imc.toFixed(2); // toFixed é colocar a quantidade de casa decimais que eu desejar
			} // "&&" essa variavel indica "e";
			
		