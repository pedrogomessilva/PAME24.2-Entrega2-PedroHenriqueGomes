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

class funcionario{
    constructor(ID_funcionario, nome_func, cpf, email, senha){
        this.ID_funcionario= ID_funcionario;
        this.nome_func=nome_func;
        this.cpf=cpf;
        this.email=email;
        this.senha=senha;
        
    }
}

class cliente{
    constructor(ID_cliente, nome_cli, aniversario, cpf,email,senha){
        this.ID_cliente=ID_cliente;
        this.nome_cli=nome_cli;
        this.aniversario=aniversario;
        this.cpf=cpf;
        this.email=email;
        this.senha=senha;
        
    }
}

class quartos{
    constructor(camas, valor, quantidade, disponivel, categoria){
        this.camas=camas;
        this.valor=valor;
        this.quantidade=quantidade;
        this.disponivel=disponivel;
        this.categoria=categoria;
        
    }
}

class sistema{
    constructor(){
        
    }
}