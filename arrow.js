function subtracao(a, b) {
    return a - b;
}

const subratracao2 = (a, b) =>  a - b;

function somar1(a) {
    return a + 2;
}

const somar2 = a => a + 2;


function diaDoMes() {
    return new Date().getDate();
}

const diaDoMes2 = () => new Date().getDate();


console.log(diaDoMes());
console.log(diaDoMes2());

function superFuncao(a,b) {
    let subtracao = a - b;
    subtracao = subratracao - 2;
    let diaDoMes = new Date().getDate();
    return diaDoMes
}

const superFuncao2 = (a,b) => {
    let subtracao = a - b;
    subtracao = subratracao - 2;
    let diaDoMes = new Date().getDate();
    return diaDoMes
}