
//Lembrete: pesquisar maneira de criar objetos dentro das classes diferenciando-os automaticamente se possivel,
//para evitar sobreposicao ou redefinicao acidental de um objeto adicionado anteriormente


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//INSTRUCOES PARA USO DO SISTEMA: Para facilitar o uso por parte do cliente ou funcionario, o sistema usa
//diversos menus para estruturar a sequencia de execucao das tarefas solicitadas, com as escolhas sendo feitas
//ao inserir apenas um digito que corresponda a tarefa desejada pelo usuario. Ao finalizar a acao, o usuario eh 
//sempre redirecionado para o menu principal.

//Inicialmente, eh exibido o menu principal, no qual o usuario podera definir se deseja fazer login(caso ja tenha uma
//conta existente no sistema) ou criar uma nova conta se cadastrando do zero no sistema do hotel. Esse modelo eh seguido
//tanto para clientes quanto para funcionarios do hotel. Existe tambem a opcao de desligar o sistema, a qual interrompe
//o terminal, deletando os dados inseridos durante o funcionamento.

//Uma vez logado no sistema, o cliente tera acesso as funcionalidades: ver dados, consultar quartos, fazer reserva,
//cancelar reserva, verificar os dados da sua reserva(caso esteja registrada no sistema) e alterar dados. A definicao
//da opcao desejada se da, novamente, atraves de um menu especifico para a classe de clientes, inserindo um digito
//correspondente a opcao desejada.

//Para os funcionarios logados, estao disponiveis as opcoes: ver dados, ver lista de reservas, ver lista de quartos, 
//ver lista de clientes, alterar uma reserva, adicionar quarto e excluir quarto. A definicao de escolha sera da mesma
//forma que para os clientes. 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//essa lista guardara todos os dados dos clientes cadastrados no sistema do hotel!
let lista_clientes=[];

//A classe quartos sera usada pela classe funcionarios logados dentro do sistema principal
//contem dados como o ID do quarto (numeracao do quarto), numero de camas, valor da diaria, se o quarto esta 
// disponivel (Sim) ou Ocupado (Nao) e a categoria(no exemplo foram criadas as seguintes: Solteiro/ Casal/ Luxo)
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

    //esses exemplos de quartos foram criados durante a fase de testes do codigo, caso nao deseje usa-los basta
    //comentar-los ou apagar-los.

    let quarto01 = new quarto("quarto01", "1", "100" , "Sim", "Solteiro" );
    let quarto02 = new quarto("quarto02", "1", "150" , "Nao", "Casal" );
    let quarto03 = new quarto("quarto03", "2", "280" , "Sim", "Luxo" );


    //criando a lista de quartos para o exemplo adicionando objetos criados a partir da classe em uma lista
    //vazia
    //a lista de quartos ira armazenar as informacoes sobre todos os quartos dentro do sistema!
    let lista_quartos=[];

    lista_quartos.push(quarto01)

    lista_quartos.push(quarto02)

    lista_quartos.push(quarto03)
    
    let lista_reserva=[];


    //a classe reservas ira guardar todos os dados referentes as reservas feitas no hotel, o ID do quarto( que eh apenas
    //a numeracao do quarto ex: quarto01), o ID do cliente que fez a reserva, o status da reserva (pendente, cancelada,
    //adiada ou realizada), a data de check-in do cliente e a data de check-out
    class reservas{
        constructor(ID_quarto, ID_cliente, status,entrada,saida){
            this.ID_quarto= ID_quarto;
            this.ID_cliente= ID_cliente;
            this.status= status;
            this.entrada= entrada;
            this.saida=saida;
        }
    
    }

    //essas reservas foram criadas na fase de testes, podem ser eliminadas caso o hotel deseje
    let reserva1 = new reservas("quarto01","345","Feita","21/03/2025", "29/03/2025");
    let reserva2 = new reservas("quarto01","000","Adiada","10/06/2025", "10/07/2025");

    //a lista_reserva guardara todas as informacoes sobre as reservas feitas!
    lista_reserva.push(reserva1)
    lista_reserva.push(reserva2)
    

//criando a classe cliente logado contendo o ID do cliente, o nome do cliente, a data de nascimento, cpf, email e senha 
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
        //esse metodo sera responsavel por exibir os dados atuais do usuario salvos no sistema

        console.log('Nome: ', this.nome_cli);
        console.log('ID: ', this.ID_cliente);
        console.log('CPF: ', this.cpf);
        console.log('E-mail: ', this.email);
        console.log('Senha: ', this.senha);

    }

    Consultar_quartos(){
        //esse metodo sera responsavel por exibir todos os quartos cadastrados no sistema do hotel

        console.log("Exibindo todos os quartos: \n")
        console.log(lista_quartos);


    }

    Fazer_reserva(){
        //esse metodo ira, primeiro, exibir os quartos do hotel e suas caracteristicas, depois ira realizar a reserva 
        //para o cliente, pedindo informacoes como quarto desejado, data de chegada, data de saida e o ID do cliente.
        //Por fim, a nova reserva sera adicionada a lista de reservas do hotel

        console.log("\nAqui esta a lista de quartos do nosso hotel:\n")

        console.log(lista_quartos);

        var requisicao = require('readline-sync')
        var quarto_reservado = requisicao.question("Qual quarto deseja reservar? Exemplo: quarto10 \n")

        var inicio_reserva = requisicao.question("Quando comecara a sua estadia no hotel? Use o formato dd/mm/aaaa \n")

        var fim_reserva = requisicao.question("Quando terminara a sua estadia no hotel? Use o formato dd/mm/aaaa \n")

        var ID_reserva = requisicao.question("Por favor, insira o  seu ID: \n")


        let reserva_nova = new reservas(quarto_reservado, ID_reserva, "Feita", inicio_reserva, fim_reserva);

        lista_reserva.push(reserva_nova)

        console.log("Sua reserva foi confirmada com sucesso")

        console.log(lista_reserva)
        

    }

    Cancelar_reserva(){
        //esse metodo ira cancelar a reserva feita por um cliente, identificando-a atraves do ID do cliente e entao
        //ira deletar a reserva encontrada da lista que contem os dados das reservas do hotel

        var requisicao = require('readline-sync')
        var ID_verificar = requisicao.question("Por favor, insira o  seu ID: \n")

        var numero_elementos= lista_reserva.length;

        for(let i=0; i< numero_elementos; i=i+1){

            if (lista_reserva[i].ID_cliente == ID_verificar){

                console.log(lista_reserva[i]);

                const index= i;

                var confirmacao= requisicao.question("Tem certeza que deseja cancelar sua reseva? Sim/Nao \n")
        
                if(confirmacao == "Sim" || confirmacao=="sim" || confirmacao=="SIM"){

                    if (index > -1) {
                        lista_quartos.splice(index, 1);
                    
                    }


                    console.log("Pronto, sua reserva foi cancelada com sucesso \n");

                    console.log(lista_reserva);

                }
                return lista_reserva[i]
            }

            console.log("Ok, sua reserva esta mantida! \n");

        }

    }

    Verificar_reserva(){
        //esse metodo vasculha a lista de reservas do hotel e exibe para o usuario apenas a reserva feita por ele
        //usando o ID do cliente para identificar a reserva.

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
        //esse metodo exibe os dados atuais do cliente e oferece a opcao de alterar-los
        //Lembrete: NAO TERMINADA

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

        if(dado_alterado=="1"){

            //mudar nome
            var nome_novo = requisicao.question("Por favor, digite o seu nome atualizado: \n")

            cliente_logado.setAttribute(this.nome_cli,nome_novo);





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

// esses clientes tambem foram criados durante a fase de testes, podem ser omitidos sem complicacoes
let cliente1 = new cliente_logado("345","Joao das Couves","5/11/1961","88888888","joao@gmail.com","password");
let cliente2 = new cliente_logado("000","Jim Carrey","8/9/2000","231334212","lisa@gmail.com","senha123");

lista_clientes.push(cliente1);
lista_clientes.push(cliente2);


//criando a classe funcionario logado contendo o ID do funcionario, o nome do funcionario, o cpf, email e senha
//OBS: 6 de 7 atributos funcionais
class funcionario_logado{
    constructor(ID_funcionario, nome_func, cpf, email, senha){
        this.ID_funcionario= ID_funcionario;
        this.nome_func=nome_func;
        this.cpf=cpf;
        this.email=email;
        this.senha=senha;
        
    }

    Ver_dados_func(){ 
        //esse metodo exibe os dados do funcionario
        
        console.log('Nome: ', this.nome_func);
        console.log('ID: ', this.ID_funcionario);
        console.log('CPF: ', this.cpf);
        console.log('E-mail: ', this.email);        
    }

    Lista_reservas(){ 
        //esse metodo exibe a lista de todas as reservas do hotel;
        console.log(lista_reserva); 
    }

    Lista_quartos(){
        //esse metodo exibe a lista de todos os quartos do hotel; 
        console.log(lista_quartos);
    }

    Lista_clientes(){ 
        //exibe a lista de todos os clientes do hotel;

        //OBS: Ao exibir a lista de clientes, tambem sao revelados os dados dos clientes, portanto, para evitar que
        //a senha do cliente fosse exposta, foi criada a lista auxiliar abaixo.
        //A lista auxiliar recebe os dados dos clientes, porem a senha do cliente eh trocada para "**********", assim
        //a senha do cliente nao sera acessada pelos funcionarios
        var lista_auxiliar=[]

        lista_auxiliar = lista_clientes;

        var numero_clientes= lista_auxiliar.length;

        for(let i=0; i< numero_clientes; i=i+1){

            lista_auxiliar[i].senha= "**********";
        }
        
        console.log(lista_auxiliar);
    }

    Alterar_reserva(){
        //esse metodo permite que funcionarios alterem os dados de uma reserva registrada no sistema, identificando a
        //reserva a partir do ID do cliente e definindo o dado a ser alterado usando um menu basico
        
        console.log("\n Aqui estao as reservas marcadas no momento: \n");

        console.log(lista_reserva);

        var requisicao = require('readline-sync')
        var mudar_reserva = requisicao.question("\n Qual a ID do cliente? Exemplo: 000 \n")

        var numero_reservas = lista_reserva.length;

        for(let i=0; i< numero_reservas; i=i+1){

            if(lista_reserva[i].ID_cliente==mudar_reserva){

                console.log("Aqui esta a reserva escolhida:\n");

                console.log(lista_reserva[i]);

                console.log("\nEscolha uma das opcoes abaixo para serem alteradas: \n \n");

                console.log("1- Mudar ID_quarto");
                 
                console.log("2- Status da reserva");
                
                console.log("3- Data de chegada");

                console.log("4- Data de saida \n \n");

                var mudar_item = requisicao.question("\n Digite o numero correspondente ao item da reserva que sera alterado:\n \n")


                if(mudar_item=="1"){

                    var mudar_quarto = requisicao.question("\n Digite o novo quarto destinado para essa reserva: Exemplo: quarto01 \n\n")

                    lista_reserva[i].ID_quarto=mudar_quarto;

                    console.log(lista_reserva[i]);

                    console.log("\nMudanca feita com sucesso!\n");



                } else if(mudar_item=="2"){

                    var mudar_status = requisicao.question("\nInforme o novo status da reserva. Opcoes (pendente/realizada/adiada/cancelada)\n\n")

                    lista_reserva[i].status= mudar_status;

                    console.log(lista_reserva[i]);

                    console.log("\nMudanca feita com sucesso!\n");


                } else if(mudar_item=="3"){

                    var mudar_chegada = requisicao.question("\nInforme a nova data de chegada do cliente: Use o formato dd/mm/aaaa")

                    lista_reserva[i].entrada= mudar_chegada;

                    console.log(lista_reserva[i]);

                    console.log("\nMudanca feita com sucesso! \n");

               
                } else if(mudar_item=="4"){

                    var mudar_saida = requisicao.question("\nInforme a nova data de saida do cliente: Use o formato dd/mm/aaaa")

                    lista_reserva[i].saida= mudar_saida;

                    console.log(lista_reserva[i]);

                    console.log("\nMudanca feita com sucesso! \n");



                } else{

                    console.log("Digito invalido");

                }
                

            }
        }






    }

    Adicionar_quarto(){
        //esse metodo acessa a lista de quartos e adiciona na lista um quarto com informacoes definidas pelo funcionario;
        var requisicao = require('readline-sync')
        var quarto_adicionado = requisicao.question("Qual quarto deseja adicionar? Exemplo: quarto08 \n")

        var add_valor = requisicao.question("Qual o valor da diaria?\n")
        var add_categoria = requisicao.question("Qual o tipo de quarto? (Solteiro/Casal/Luxo) \n")
        var add_camas = requisicao.question("Quantas camas ha no quarto?\n")

        let quarto_novo = new quarto(quarto_adicionado, add_camas, add_valor, "Sim", add_categoria ); 
        lista_quartos.push(quarto_novo)

        console.log(lista_quartos);
    }

    Excluir_quarto(){ 
        //esse metodo acessa a lista de quartos e exclui dela um quarto definido pelo funcionario; 
        
        console.log(lista_quartos);

        var requisicao = require('readline-sync')
        var quarto_removido = requisicao.question("Qual o ID do quarto a ser removido? Exemplo: quarto01\n")

        var numero_quartos= lista_quartos.length;

        for(let i=0; i< numero_quartos; i=i+1){

            if (lista_quartos[i].ID_quarto == quarto_removido){

                console.log("Aqui estao os dados do quarto escolhido: \n")
                console.log(lista_quartos[i]);

                const index = i; 

                var confirma_quarto= requisicao.question("Tem certeza que deseja deletar esse quarto? Sim/Nao \n")
        
                if(confirma_quarto == "Sim" || confirma_quarto=="sim" || confirma_quarto=="SIM"){
                    
                    if (index > -1) {
                        lista_quartos.splice(index, 1);
                    
                    }

                    console.log("Pronto, o quarto foi deletado com sucesso \n");

                    console.log(lista_quartos); 

                }
                
                return lista_quartos[i]
            }

            console.log("Nenhum quarto foi deletado do sistema \n");

        }

    }

  }
   
 

//a lista_funcionarios ira guardar os dados de todos os funcionarios cadastradados no sistema
let lista_funcionarios=[]

//funcionarios genericos criados para facilitar a fase de testes do codigo
let funcionario1 = new funcionario_logado("123","Andre","12345678910","andre@gmail.com", "senha");
let funcionario2 = new funcionario_logado("789","Maria","99999999999","maria@gmail.com", "password");

lista_funcionarios.push(funcionario1)
lista_funcionarios.push(funcionario2)



//a classe sistema eh responsavel por manejar todas as funcoes, classes, menus e opcoes do programa
class sistema{
    constructor(){
        
    }

    menu(){

        console.log("Ola! Seja bem-vindo(a) ao hotel F-Luxo! \n");
        console.log("Por favor, escolha uma das opcoes a seguir:\n");

        console.log("1- Fazer Login como cliente");
        console.log("2- Cadastrar-se como cliente");
        console.log("3- Fazer Login como funcionario");
        console.log("4- Cadastrar-se como funcionario");
        console.log("5- Sair do Programa \n \n \n");


        var requisicao = require('readline-sync')
        var inicio = requisicao.question("Insira o numero da opcao que deseja: \n")

        if(inicio=="1"){

            var ID_inserido_cliete = requisicao.question("Por favor, digite o seu ID de cliente: \n")

            var todos_clientes= lista_clientes.length

            for(let i=0; i< todos_clientes; i=i+1){

                if (lista_clientes[i].ID_cliente == ID_inserido_cliete){

                    var senha_inserida_cliente = requisicao.question("Por favor, digite a sua senha: \n")

                    if(lista_clientes[i].senha == senha_inserida_cliente){

                        var usuario_cliente_nome = lista_clientes[i].nome_cli;
                        var usuario_cliente_ID = lista_clientes[i].ID_cliente;
                        var usuario_cliente_email = lista_clientes[i].email;
                        var usuario_cliente_aniversario = lista_clientes[i].aniversario;
                        var usuario_cliente_cpf = lista_clientes[i].cpf;
                        var usuario_cliente_senha = lista_clientes[i].senha;


                        let cliente_operacional = new cliente_logado(usuario_cliente_ID,usuario_cliente_nome,usuario_cliente_aniversario,usuario_cliente_cpf,usuario_cliente_email,usuario_cliente_senha);


                        console.log("Bem vindo de volta! Selecione uma das opcoes disponiveis:\n");

                        console.log("1- Conferir meus dados");
                        console.log("2- Consultar quartos");
                        console.log("3- Fazer reserva");
                        console.log("4- Cancelar reserva");
                        console.log("5- Verificar reserva");
                        console.log("6- Alterar dados");
                        console.log("7- Sair")

                        var opcao_cliente = requisicao.question("Insira o numero correspondente a opcao que deseja: \n")

                        if(opcao_cliente == "1"){

                                console.log("\n Aqui estao os seus dados: \n")

                                cliente_operacional.Ver_dados_cli();

                                console.log("\n Redirecionado de volta para o menu principal!\n")

                                sistem1.menu();

                        } else if(opcao_cliente=="2"){

                                console.log("\n Aqui esta nossa lista de quartos: \n")
                                
                                cliente_operacional.Consultar_quartos();
                                
                                console.log("\n Redirecionado de volta para o menu principal!\n \n")

                                sistem1.menu();

                        } else if(opcao_cliente=="3"){

                                console.log("\n Iniciando funcao para realizar reservas \n")

                                cliente_operacional.Fazer_reserva();
                                
                                console.log("\n Redirecionado de volta para o menu principal!\n \n")

                                sistem1.menu();

                        } else if(opcao_cliente=="4"){
                        
                                console.log("\n Iniciando funcao de para cancelar reservas \n")
                                
                                cliente_operacional.Cancelar_reserva();

                                console.log("\n Redirecionado de volta para o menu principal!\n \n")

                                sistem1.menu();

                        } else if(opcao_cliente=="5"){
                                
                                console.log("\n Iniciando funcao para verificar sua reserva \n")

                                cliente_operacional.Verificar_reserva();

                                console.log("\n Redirecionado de volta para o menu principal!\n \n")
                                
                                sistem1.menu();
                        
                        } else if(opcao_cliente=="6"){

                                console.log("\n Iniciando funcao para alterar dados \n")
                        
                                cliente_operacional.Alterar_dados();
                                
                                console.log("\n Redirecionado de volta para o menu principal!\n \n")

                                sistem1.menu();
                        
                        } else if(opcao_cliente=="7"){
                            
                                console.log("\n Redirecionado de volta para o menu principal!\n \n")

                                sistem1.menu();
                            
                        } else{
                           
                            console.log("\n Por favor insira um digito valido \n \n");
                            sistem1.menu();
                        
                        
                        }
                                 
                    }

                    


                }

            }

           

        } else if(inicio=="2"){

            console.log("Seja muito bem vindo(a) ao nosso hotel! Vamos comecar seu cadastro! \n");

            var novo_cliente_nome = requisicao.question("Insira seu nome por favor:\n")

            var novo_cliente_ID = requisicao.question("Crie um ID de 3 numeros por favor:\n")

            var novo_cliente_aniversario = requisicao.question("Digite sua data de nascimento: Use o formato dd/mm/aaaa\n")

            var novo_cliente_cpf = requisicao.question("Insira seu CPF por favor:\n")

            var novo_cliente_email = requisicao.question("Insira seu email por favor:\n")

            var novo_cliente_senha = requisicao.question("Crie uma senha:\n")


            // (ID_cliente, nome_cli, aniversario, cpf,email,senha)
            let cliente3 = new cliente_logado(novo_cliente_ID, novo_cliente_nome, novo_cliente_aniversario, novo_cliente_cpf, novo_cliente_email, novo_cliente_senha);

            lista_clientes.push(cliente3);

            console.log("Aqui estao seus dados de cadastro! Tenha uma otima estadia conosco!\n")
            cliente3.Ver_dados_cli();

            sistem1.menu();

        } else if(inicio=="3"){

            var ID_inserido_func = requisicao.question("Por favor, digite o seu ID de funcionario: \n")

            var todos_funcionarios= lista_funcionarios.length

            for(let i=0; i< todos_funcionarios; i=i+1){

                if (lista_funcionarios[i].ID_funcionario == ID_inserido_func){

                    var senha_inserida_func = requisicao.question("Por favor, digite a sua senha: \n")

                    if(lista_funcionarios[i].senha == senha_inserida_func){

                        var usuario_func_nome = lista_funcionarios[i].nome_func;
                        var usuario_func_ID = lista_funcionarios[i].ID_funcionario;
                        var usuario_func_email = lista_funcionarios[i].email;
                        var usuario_func_cpf = lista_funcionarios[i].cpf;
                        var usuario_func_senha = lista_funcionarios[i].senha;

                        let func_operacional = new funcionario_logado(usuario_func_ID,usuario_func_nome,usuario_func_cpf,usuario_func_email,usuario_func_senha);

                        console.log("\n \n Bem vindo de volta! Selecione uma das opcoes disponiveis:\n");

                        console.log("1- Conferir meus dados");
                        console.log("2- Lista de quartos");
                        console.log("3- Lista de reseras");
                        console.log("4- Lista de clientes");
                        console.log("5- Alterar status de reserva");
                        console.log("6- Adicionar quarto");
                        console.log("7- Excluir quarto");
                        console.log("8- Sair");

                        var opcao_func = requisicao.question("Insira o numero correspondente a opcao que deseja: \n")

                        if(opcao_func=="1"){

                                console.log("\n Aqui estao os seus dados: \n")
                                func_operacional.Ver_dados_func();

                                console.log("\n Redirecionado de volta para o menu principal!\n \n")

                                sistem1.menu();

                        } else if(opcao_func=="2"){
                                
                                console.log("\n Aqui esta a lista de quartos: \n")
                                func_operacional.Consultar_quartos();

                                console.log("\n Redirecionado de volta para o menu principal!\n \n")

                                sistem1.menu();

                        } else if(opcao_func=="3"){
                                
                                console.log("\n Aqui esta a lista de reservas: \n")
                                func_operacional.Lista_reservas();

                                console.log("\n Redirecionado de volta para o menu principal!\n \n")

                                sistem1.menu();

                        } else if(opcao_func=="4"){

                                console.log("\n Aqui esta a lista de clientes do hotel: \n" )
                                func_operacional.Lista_clientes();

                                console.log("\n Redirecionado de volta para o menu principal!\n \n")

                                sistem1.menu();

                        } else if(opcao_func=="5"){

                                console.log("\n Iniciando funcao de alterar reserva \n")

                                func_operacional.Alterar_reserva();

                                console.log("Redirecionado de volta para o menu principal!\n \n")
                                sistem1.menu();   
            
                        } else if(opcao_func=="6"){

                                console.log("\n Iniciando funcao de adicionar quarto \n")

                                func_operacional.Adicionar_quarto();
                                
                                console.log("\n Redirecionado de volta para o menu principal!\n \n")

                                sistem1.menu();
                        
                        } else if(opcao_func=="7"){

                                console.log("\n Iniciando funcao de excluir quarto \n")

                                func_operacional.Excluir_quarto();
                                
                                console.log("\n Redirecionado de volta para o menu principal!\n \n")

                                sistem1.menu();
                        
                        } else if(opcao_func=="8"){

                            console.log("\n Redirecionado de volta para o menu principal!\n \n")
                         
                            sistem1.menu();
                        
                        } else{
                                console.log("Por favor insira um digito valido \n \n");
                                sistem1.menu();
                        
                        
                        }
                                 
                    }

                }

            }



        } else if (inicio=="4"){

            console.log("Seja muito bem vindo(a) a equipe do nosso hotel! Vamos comecar seu cadastro! \n");

            var novo_func_nome = requisicao.question("Insira seu nome por favor:\n")

            var novo_func_ID = requisicao.question("Crie um ID de 3 numeros por favor:\n")

            var novo_func_cpf = requisicao.question("Insira seu CPF por favor:\n")

            var novo_func_email = requisicao.question("Insira seu email por favor:\n")

            var novo_func_senha = requisicao.question("Crie uma senha:\n")


            let funcionario3 = new funcionario_logado(novo_func_ID, novo_func_nome, novo_func_cpf, novo_func_email, novo_func_senha);

            lista_funcionarios.push(funcionario3);

            console.log("Aqui estao seus dados de cadastro! Estamos ansiosos para trabalhar com voce!\n")
            funcionario3.Ver_dados_func();

            sistem1.menu();


        } else if(inicio=="5"){

            console.log("Tem certeza que deseja fechar o programa? Todos os dados salvos serao perdidos! \n" );

            var desligar= requisicao.question(" Digite se deseja realmente fechar o programa. Sim/Nao \n")
        
            if(desligar == "Sim" || desligar=="sim" || desligar=="SIM"){

                return null;

            } else{
                console.log("Comando de desligamento abortado. Redirecionando de volta para o menu principal \n");

                sistem1.menu();

            }

        
        } else{

            console.log("Opcao invalida, tente novamente. \n");
            sistem1.menu();
        }

    }

}

let sistem1 = new sistema();

sistem1.menu();