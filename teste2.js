function Pessoa() {
    this.idade = 0;
  
    this.atualizarIdade = function() {
      if (this.idade === 10) {
        this.idade = 0; // Reiniciando a contagem para 0
      } else {
        this.idade++; // Incrementando a idade normalmente
      }
      console.log('Teste', this.idade);
    };
  
    setInterval(this.atualizarIdade.bind(this), 1000);
  }
  
  new Pessoa();
  