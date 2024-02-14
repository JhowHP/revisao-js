function pessoa() {
    this.idade = 0
    
    const self = this
    setInterval(function() {
        self.idade++
        console.log('Teste', self.idade)
       
        if (self.idade === 10) {
            self.idade = 0; // Reinicia a contagem quando a idade chegar a 10
            console.log('Reiniciando a contagem...');
           
          }
        
    }/*.bind(this)*/, 1000) // ou usa o this ou usa uma const atribuindo o THIS para ela
    }
    
    new pessoa