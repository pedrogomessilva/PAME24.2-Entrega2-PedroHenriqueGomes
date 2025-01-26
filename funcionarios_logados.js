//arquivo de teste para funcionarios_logados

//Lembrete: pesquisar maneira de criar objetos dentro das classes diferenciando-os automaticamente se possivel,
//para evitar sobreposicao ou redefinicao acidental de um objeto adicionado anteriormente

//as listas abaixo foram criadas para realizer testes com o codigo
//let lista_quartos = [["quarto01", "1", "100", "Sim", "Solteiro"],["quarto02", "1", "150", "Nao","Casal"],["quarto03", "2", "280", "Sim","Luxo"]];
let lista_clientes = [[345,"Victor", "1/1/2000", 22222222,"victor@gmail.com","java"],"Joao","Ana"];
//let lista_reserva = [["quarto01", 345, "feita","25/01/2025","30/01/2025"],["quarto03", 100,"adiada","21/12/2025","29/12/2025"]];


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
    
    let lista_reserva=[];


    class reservas{
        constructor(ID_quarto, ID_cliente, status,entrada,saida){
            this.ID_quarto= ID_quarto;
            this.ID_cliente= ID_cliente;
            this.status= status;
            this.entrada= entrada;
            this.saida=saida;
        }
    
    }

    let reserva1 = new reservas("quarto01","345","Feita","21/03/2025", "29/03/2025");
    let reserva2 = new reservas("quarto01","100","Adiada","10/06/2025", "10/07/2025");


    lista_reserva.push(reserva1)
    lista_reserva.push(reserva2)
    

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

        console.log('Nome: ', this.nome_cli);
        console.log('ID: ', this.ID_cliente);
        console.log('CPF: ', this.cpf);
        console.log('E-mail: ', this.email);

    }

    Consultar_quartos(){

        console.log("Exibindo todos os quartos: \n")
        console.log(lista_quartos);


    }

    Fazer_reserva(){

        var requisicao = require('readline-sync')
        var quarto_reservado = requisicao.question("Qual quarto deseja reservar? Exemplo: quarto10 \n")

        var inicio_reserva = requisicao.question("Quando comecara a sua estadia no hotel? Use o formato dd/mm/aa \n")

        var fim_reserva = requisicao.question("Quando terminara a sua estadia no hotel? Use o formato dd/mm/aa \n")

        var ID_reserva = requisicao.question("Por favor, insira o  seu ID: \n")


        let reserva_nova = new reservas(quarto_reservado, ID_reserva, "Feita", inicio_reserva, fim_reserva);


        

        lista_reserva.push(reserva_nova)

        console.log("Sua reserva foi confirmada com sucesso")

        console.log(lista_reserva)
        

    }

    Cancelar_reserva(){

        var requisicao = require('readline-sync')
        var ID_verificar = requisicao.question("Por favor, insira o  seu ID: \n")

        var numero_elementos= lista_reserva.length;

        for(let i=0; i< numero_elementos; i=i+1){

            if (lista_reserva[i].ID_cliente == ID_verificar){

                console.log(lista_reserva[i]);

                var confirmacao= requisicao.question("Tem certeza que deseja cancelar sua reseva? Sim/Nao \n")
        
                if(confirmacao == "Sim" || confirmacao=="sim" || confirmacao=="SIM"){

                    lista_reserva.splice(i, i+1);

                    console.log("Pronto, sua reserva foi cancelada com sucesso \n");

                    console.log(lista_reserva);

                }
                return lista_reserva[i]
            }

            console.log("Ok, sua reserva esta mantida! \n");

        }

    }

    Verificar_reserva(){

        var requisicao = require('readline-sync')
        var ID_verificar = requisicao.question("Por favor, insira o  seu ID: \n")

        var numero_elementos= lista_reserva.length;

        for(let i=0; i< numero_elementos; i=i+1){

            if (lista_reserva[i].ID_cliente == ID_verificar){

                console.log(lista_reserva[i]);

                return lista_reserva[i]
            }

        }

        console.log("Infelizmente, a sua reserva não foi encontrada. \n Verifique se seu o ID foi digitado corretamente.")
        
        
    }

    Alterar_dados(){

        console.log("Dados atuais: \n")
        console.log('Nome: ', this.nome_cli);
        console.log('ID: ', this.ID_cliente);
        console.log('CPF: ', this.cpf);
        console.log('E-mail: ', this.email);
        console.log('Senha:', this.senha);


        console.log("Selecione o dado que deseja alterar com o numero correspondente: \n");
        console.log("1- Alterar Nome");
        console.log("2- Alterar ID");
        console.log("3- Alterar CPF");
        console.log("4- Alterar email");
        console.log("Pressione qualquer outro botao para sair")

        var requisicao = require('readline-sync')
        var dado_alterado = requisicao.question("Por favor, escolha uma das opcoes acima: \n")

        if(dado=="1"){

            //mudar nome

        } else if(dado_alterado=="2"){

            //mudar  id do cliente

        } else if(dado_alterado=="3"){

            //mudar cpf do cliente

        } else if(dado_alterado=="4"){

            //mudar email

        } else{

            console.log("Sem alteracao de dados");
        }

        



    }


}




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
        var quarto_removido = requisicao.question("Qual o ID do quarto a ser removido? Exemplo: quarto01\n")
        
        //const index = lista_quartos.indexOf(quarto_removido) 
        //if (index > -1) {
        //    lista_quartos.splice(index, 1)};


  }
    
}

let funcionario1 = new funcionario_logado("123","Andre","12345678910","andre@gmail.com", "senha");
let funcionario2 = new funcionario_logado("789","Maria","99999999999","maria@gmail.com", "password");

//funcionario1.Adicionar_quarto();

console.log(lista_reserva);

//funcionario1.Ver_dados_func();

//funcionario2.Ver_dados_func();


//funcionario1.Lista_reservas();

//funcionario2.Lista_clientes();


// (ID_cliente, nome_cli, aniversario, cpf,email,senha)
let cliente1 = new cliente_logado("345","Joao das Couves","5/11/1961","88888888","password");

cliente1.Cancelar_reserva();