// Listas de palavras para cada parte do nome
const nomes = ['João', 'Maria', 'Pedro', 'Ana', 'Carlos'];
const sobrenomes = ['Silva', 'Santos', 'Oliveira', 'Pereira', 'Rodrigues'];

// Função para gerar um nome aleatório
function gerarNomeAleatorio() {
  const nomeAleatorio = nomes[Math.floor(Math.random() * nomes.length)];
  const sobrenomeAleatorio = sobrenomes[Math.floor(Math.random() * sobrenomes.length)];
  return `${nomeAleatorio} ${sobrenomeAleatorio}`;
}

// Exemplo de uso para gerar um nome aleatório
const nomeGerado = gerarNomeAleatorio();
console.log(nomeGerado);
