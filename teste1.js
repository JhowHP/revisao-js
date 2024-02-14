const cliente = {
    nome1: 'Val',
    idade2: 24,
    caract: {
        a: 'legal, bonita e engraçada',
        b: 200
    }
}
const {nome1, caract} = cliente
console.log(nome1, caract)

const {caract: {a, b}} = cliente
console.log(nome1, a)


