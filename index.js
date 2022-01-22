/*Escreva um programa que  verifique a validade de uma senha fornecida pelo usuario. A senha valida é o numero 1234. Devem ser impressar as segintes menssagens:

	-ACESSO PERMITIDO caso a senha seja valida.

	-ACESSO NEGADO caso a senha seja invalida.	
	
*/
function validacaoSenha(){

	const SENHA = 1234;

	while(SENHA){

		let validacao = prompt("Digite sua senha: \n")

		if(validacao == SENHA){
			prompt('ACESSO LIBERADO')
			break
		}
		else if(validacao != SENHA){
			prompt("ACESSO NEGADO! TENTE NOVAMENTE.")
		}
	}
}

validacaoSenha();




