// formas de tipar
// forma 1
let idade:number;
//forma 2
const nome = 'seu Zezo';
// forma 3 não recomendado por ser redundante
const Noome:string = 'da silva'
// tipagem especiais
type usuario = {'nick':string, 'age' :number}
// chamado type novo
let jogador:usuario = {nick: 'Ricardo', age:18};

let jogadorVelho:usuario = {nick:'Toin', age:76};

function verificarIdade(usuarioAtual: usuario){
    if (usuarioAtual.age>=21){
        console.log(`Acesso liberado: o jogador $(usuarioAtual.nick) tem $(usuarioAtual.age) anos e pode jogar o joguinho muito massa de pei pei`);
    }else{
        console.log(`EI $(usuarioAtual.nick)
            É de menor pode ta pei pei não tem só $(usuarioAtual.age) anos um bebê`);
    }
};
verificarIdade(jogador);
verificarIdade(jogadorVelho);

// 1. type com no mínimo dois campos
type Produto = {
  nome: string;
  preco: number;
};

// 2. Chame variáveis para utilizar esse type
const produtoBarato: Produto = { nome: 'Teclado', preco: 80 };
const produtoCaro: Produto = { nome: 'Monitor', preco: 1200 };

// 3 e 4. Crie uma função com esse type e utilize uma condição ternária
function verificarFreteGratis(item: Produto): void {
  const mensagem = item.preco >= 100 
    ? `O produto ${item.nome} custa R$ ${item.preco} e tem frete grátis!` 
    : `O produto ${item.nome} custa R$ ${item.preco} e paga frete.`;

  console.log(mensagem);
}

// 5. Chame a função e execute
verificarFreteGratis(produtoBarato);
verificarFreteGratis(produtoCaro);

