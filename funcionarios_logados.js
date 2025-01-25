//arquivo de teste para funcionarios_logados

//Lembrete: pesquisar maneira de criar objetos dentro das classes diferenciando-os automaticamente se possivel,
//para evitar sobreposicao ou redefinicao acidental de um objeto adicionado anteriormente

//as listas abaixo foram criadas para realizer testes com o codigo
//let lista_quartos = [["quarto01", "1", "100", "Sim", "Solteiro"],["quarto02", "1", "150", "Nao","Casal"],["quarto03", "2", "280", "Sim","Luxo"]];
let lista_clientes = [[345,"Victor", "1/1/2000", 22222222,"victor@gmail.com","java"],"Joao","Ana"];
let lista_reserva = [["quarto01", 345, "feita","25/01/2025","30/01/2025"],["quarto03", 100,"adiada","21/12/2025","29/12/2025"]];


//classe quartos sera usada em uma das funcionalidades de funcionario_logado

class quarto{
    constructor(ID_quarto,camas, valor, disponivel, categoria){
        
        this.ID_quarto=ID_quarto;
        this.camas=camas;
        this.valor=valor;
        this.disponivel=disponivel;
        this.categoria=categoria;
        
        //Lembrete: verificar a quantidade de quartos disponiveis de acordo com a categoria (exemplo: 5 solteiro, 3 casal,
        //1 luxo)
        
    }

    


}

    let quarto01 = new quarto("quarto01", "1", "100" , "Sim", "Solteiro" );
    let quarto02 = new quarto("quarto02", "1", "150" , "Nao", "Casal" );
    let quarto03 = new quarto("quarto03", "2", "280" , "Sim", "Luxo" );

    //criando a lista de quartos para o exemplo adicionando objetos criados a partir da classe em uma lista
    //vazia
    let lista_quartos=[];

    lista_quartos.push(quarto01)

    lista_quartos.push(quarto02)

    lista_quartos.push(quarto03)
    



//criando a classe funcionario logado contendo os dados necessarios
//OBS: 5 de 7 atributos funcionais
class funcionario_logado{
    constructor(ID_funcionario, nome_func, cpf, email, senha){
        this.ID_funcionario= ID_funcionario;
        this.nome_func=nome_func;
        this.cpf=cpf;
        this.email=email;
        this.senha=senha;
        
    }

    Ver_dados_func(){ //exibe os dados dos funcionarios; funcional
        
        console.log('Nome: ', this.nome_func);
        console.log('ID: ', this.ID_funcionario);
        console.log('CPF: ', this.cpf);
        console.log('E-mail: ', this.email);        
    }

    Lista_reservas(){  //exibe a lista de reservas; funcional
        console.log(lista_reserva); 
    }

    Lista_quartos(){  //exibe a lista de todos os quartos do hotel; 
        console.log(lista_quartos);
    }

    Lista_clientes(){ //exibe a lista de todos os clientes do hotel
        console.log(lista_clientes);
    }

    Alterar_reserva(){ 

    }

    Adicionar_quarto(){ //acessa a lista de quartos e adiciona um quarto definido pelo funcionario; funcional
        var requisicao = require('readline-sync')
        var quarto_adicionado = requisicao.question("Qual quarto deseja adicionar? Exemplo: quarto10 \n")

        //quarto_novo= quarto_adicionado;

        var add_valor = requisicao.question("Qual o valor da diaria?\n")
        var add_categoria = requisicao.question("Qual o tipo de quarto? (Solteiro/Casal/Luxo) \n")
        var add_camas = requisicao.question("Quantas camas ha no quarto?\n")

        let quarto_novo = new quarto(quarto_adicionado, add_camas, add_valor, "Sim", add_categoria ); 
        lista_quartos.push(quarto_novo)
        //criando o novo quarto
    }

    Excluir_quarto(){ //acessa a lista de quartos e exclui um quarto definido pelo funcionario; nao-funcional
        var requisicao = require('readline-sync')
        var quarto_removido = requisicao.question("Qual o ID do quarto a ser removido?\n")
        
        const index = lista_quartos.indexOf(quarto_removido) 
        if (index > -1) {
            lista_quartos.splice(index, 1)};
  }
    
}

let funcionario1 = new funcionario_logado("123","Andre","12345678910","andre@gmail.com", "senha");
let funcionario2 = new funcionario_logado("789","Maria","99999999999","maria@gmail.com", "password");

funcionario1.Adicionar_quarto();

console.log(lista_quartos);

//funcionario1.Ver_dados_func();

//funcionario2.Ver_dados_func();


//funcionario1.Lista_reservas();

//funcionario2.Lista_clientes();

