function Pessoa() {
    this.idade = 0;
  
    const interval = setInterval(() => {
      this.idade++;
      console.log('Teste', this.idade);
  
      if (this.idade === 10) {
        this.idade = 0; // Reinicia a contagem quando a idade chegar a 10
        console.log('Reiniciando a contagem...');
      }
    }, 1000);
}
  new Pessoa();
  