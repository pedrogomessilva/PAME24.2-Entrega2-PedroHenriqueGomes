//Notas: javascript.js eh o arquivo principal, inicialmente as classes que o formam serao testadas nos arquivos
//auxiliares de mesmo nome da classe.


//criando a classe reservas e seus atributos
// status(pendente,feita,adiada,cancelada)
// entrada/saida data de check-in/check-out
class reservas{
    constructor(ID_quarto, ID_cliente, status,entrada,saida){
        this.ID_quarto= ID_quarto;
        this.ID_cliente= ID_cliente;
        this.status= status;
        this.entrada= entrada;
        this.saida=saida;
    }

}


//criando a classe funcionario logado contendo os dados necessarios
class funcionario_logado{
    constructor(ID_funcionario, nome_func, cpf, email, senha){
        this.ID_funcionario= ID_funcionario;
        this.nome_func=nome_func;
        this.cpf=cpf;
        this.email=email;
        this.senha=senha;
        
    }

    Ver_dados_func(){
        
        console.log('Nome: ', this.nome_func);
        console.log('ID: ', this.ID_funcionario);
        console.log('CPF: ', this.cpf);
        console.log('E-mail: ', this.email);        
    }

    Lista_reservas(){
       // console.log( lista de reserva(ID quarto, ID cliente, entrada, saida)); 
    }

    Lista_quartos(){
        //console.log(lista de todos os quartos criados)
    }

    Lista_clientes(){
        //console.log(lista de todos os clientes logados)
    }

    Alterar_reserva(){

    }

    Adicionar_quarto(){
        //var requisicao = require('readline-sync')
        //var  = requisicao.question("Qual quarto deseja adicionar? Exemplo: quarto10 \n")

        //var add_valor = requisicao.question("Qual o valor da diaria?\n")
        //var add_categoria = requisicao.question("Qual o tipo de quarto?\n")
        //var add_camas = requisicao.question("Qual a sua idade?\n")

        //let quarto_adicionado = new quarto(quarto_adicionado, add_camas, add_valor, "Sim", add_categoria ); 
        //criando o novo quarto
    }

    Excluir_quarto(){
        //var requisicao = require('readline-sync')
        //var quarto_removido = requisicao.question("Qual o ID do quarto a ser removido?\n")
        
        //const index = lista_quartos.indexOf(quarto_removido) 
        //if (index > -1) {
        //lista_quartos.splice(index, 1)};
  }
    
}

//criando a classe cliente logado contendo os dados necessarios
class cliente_logado{
    constructor(ID_cliente, nome_cli, aniversario, cpf,email,senha){
        this.ID_cliente=ID_cliente;
        this.nome_cli=nome_cli;
        this.aniversario=aniversario;
        this.cpf=cpf;
        this.email=email;
        this.senha=senha;
        
    }

    Ver_dados_cli(){

    }

    Consultar_quartos(){

    }

    Fazer_reserva(){

    }

    Cancelar_reserva(){

    }

    Verificar_reserva(){

    }

    Alterar_dados(){

    }


}

//criando a classe quartos
//camas representa o numero de camas
//valor eh o custo por noite
//quantidade numero de quartos
//disponivel para reserva? (sim ou nao)
//categoria (solteiro, casal, luxo)
class quartos{
    constructor(ID_quarto,camas, valor, disponivel, categoria){
        
        this.ID_quarto=ID_quarto;
        this.camas=camas;
        this.valor=valor;
        this.disponivel=disponivel;
        this.categoria=categoria;
        
        //Lembrete: verificar a quantidade de quartos disponiveis de acordo com a categoria (exemplo: 5 solteiro, 3 casal,
        //1 luxo)
        
    }

    Alterar_camas(){

    }

    Alterar_valor(){

    }

    Alterar_quantidade(){

    }

    Alterar_disponibilidade(){

    }

}

class sistema{
    constructor(){
        
    }
}