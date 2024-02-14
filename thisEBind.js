const pessoa = {
    saudacao: "Bom dia!",
    falar() {
        console.log(this.saudacao) //acessa o atributo de um objeto
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() // conflito de paradigmas funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) //passa um objeto o qual quer que seja resolvido o this. Sempre o this será resolvido para onde seja apontado.
falarDePessoa()

//metodo por amarrar um determinado objeto, pra ele ser dono daquele metodo que for chamado
//sempre que referenciar o this, ele será o objeto da função bind.

