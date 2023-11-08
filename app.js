//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
let listaDeNumerosSorteados = [];
let numeromaximo = 50;
let numerosecreto = gerarNumeroAleatorio();
let tentativas = 1;
function textoInicial() {
    exibirNaTela('h1', 'Jogo do número secreto');
    exibirNaTela('p', 'Escolha um número entre 1 e ' + numeromaximo);
}
function exibirNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

textoInicial()

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numerosecreto) {
        exibirNaTela('h1', 'Parabéns!');
        let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavratentativa}! `;
        exibirNaTela('p', mensagemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (chute > numerosecreto) {
            exibirNaTela('p', 'Numero secreto é menor');
        } else {
            exibirNaTela('p', 'Numero secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeromaximo + 1);
    let quantidadeDeElementosDaLista = listaDeNumerosSorteados.length
    if(quantidadeDeElementosDaLista == numeromaximo) {
        listaDeNumerosSorteados = []
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio(); 
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
} 

function limparCampo() {
    chute = document.querySelector('input')
    chute.value = '';
}

function reiniciarJogo() {
    numerosecreto = gerarNumeroAleatorio();
    tentativas = 1;
    limparCampo();
    textoInicial()
    document.getElementById('reiniciar').setAttribute('disabled',
    true)
}
