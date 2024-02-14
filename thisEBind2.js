function pessoa() {
this.idade = 0

setInterval(function() {
    this.idade++
    console.log('Teste', this.idade)
   
    if (this.idade === 25) {
        this.idade = 0; // Reinicia a contagem quando a idade chegar a 10
        console.log('Reiniciando a contagem...');
      }
}.bind(this), 1000)
}

new pessoa