/*var verificacaoValorAposta = 0, verificacaoNumerosApostados = 0;
var PegaValorApostado, PegaQtdNumerosApostados, vetorNumerosJogados = [];
*/
// INICIO NOVA CONFIG
var vetorEx = [];
var vetorNumerosApostados = [];
var tamanhoNumerosAcertados;


function bolasEscolhidas(x) {
    preencheBolasEscolhidas(x);
}

var quantidadeNumSelecionados = 0;
// função que preenche vetor com numeros escolhidos pelo jogador
function preencheBolasEscolhidas(numeroEscolhidoJogador) {
    var contadora = 0, posicaoVetor = vetorEx.length;

    if(vetorEx.length >= 1) {
        for(var i = 0; i < posicaoVetor; i++) {
            if(vetorEx[i] == numeroEscolhidoJogador) { //jogador quer mudar número escolhido
                for(var j = i; j < posicaoVetor; j++) {
                    vetorEx[j] = vetorEx[j+1];
                }
                posicaoVetor--;
                contadora = 1;
                mudaCordeFundo(numeroEscolhidoJogador, 1);
                quantidadeNumSelecionados--;
                QuatidadeNumerosSelecionados(quantidadeNumSelecionados, 2);
            } 
        }
    }

    //preenche com novo numero no vetor
    if(contadora == 0){
        vetorEx[posicaoVetor] = numeroEscolhidoJogador;
        mudaCordeFundo(numeroEscolhidoJogador, 0); //num 0 = muda cor do fundo 
        quantidadeNumSelecionados++;
        QuatidadeNumerosSelecionados(quantidadeNumSelecionados, 1);
    }
    
}

// função que muda as cores de fundo ao clicar em algum número
function mudaCordeFundo(numero, gatilho) {
    switch (numero) {
        case 1: 
            var container = document.getElementById("bola1");
            if (gatilho == 0) { container.style.backgroundColor = '#40b625';
            } else { container.style.backgroundColor = '#d2d2d2';
            
            }
            break;
        case 2: 
            var container = document.getElementById("bola2");
            if (gatilho == 0) { container.style.backgroundColor = '#40b625';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 3: 
            var container = document.getElementById("bola3");
            if (gatilho == 0) { container.style.backgroundColor = '#40b625';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 4: 
            var container = document.getElementById("bola4");
            if (gatilho == 0) { container.style.backgroundColor = '#40b625';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 5: 
            var container = document.getElementById("bola5");
            if (gatilho == 0) { container.style.backgroundColor = '#40b625';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 6: 
            var container = document.getElementById("bola6");
            if (gatilho == 0) { container.style.backgroundColor = '#40b625';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 7: 
            var container = document.getElementById("bola7");
            if (gatilho == 0) { container.style.backgroundColor = '#40b625';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 8: 
            var container = document.getElementById("bola8");
            if (gatilho == 0) { container.style.backgroundColor = '#40b625';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 9: 
            var container = document.getElementById("bola9");
            if (gatilho == 0) { container.style.backgroundColor = '#40b625';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 10: 
            var container = document.getElementById("bola10");
            if (gatilho == 0) { container.style.backgroundColor = '#40b625';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 11: 
            var container = document.getElementById("bola11");
            if (gatilho == 0) { container.style.backgroundColor = '#40b625';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 12: 
            var container = document.getElementById("bola12");
            if (gatilho == 0) { container.style.backgroundColor = '#40b625';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 13: 
            var container = document.getElementById("bola13");
            if (gatilho == 0) { container.style.backgroundColor = '#40b625';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 14: 
            var container = document.getElementById("bola14");
            if (gatilho == 0) { container.style.backgroundColor = '#40b625';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 15: 
            var container = document.getElementById("bola15");
            if (gatilho == 0) { container.style.backgroundColor = '#40b625';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 16: 
            var container = document.getElementById("bola16");
            if (gatilho == 0) { container.style.backgroundColor = '#40b625';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 17: 
            var container = document.getElementById("bola17");
            if (gatilho == 0) { container.style.backgroundColor = '#40b625';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break; 
        case 18: 
            var container = document.getElementById("bola18");
            if (gatilho == 0) { container.style.backgroundColor = '#40b625';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 19: 
            var container = document.getElementById("bola19");
            if (gatilho == 0) { container.style.backgroundColor = '#40b625';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 20: 
            var container = document.getElementById("bola20");
            if (gatilho == 0) { container.style.backgroundColor = '#40b625';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 21: 
            var container = document.getElementById("bola21");
            if (gatilho == 0) { container.style.backgroundColor = '#40b625';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 22: 
            var container = document.getElementById("bola22");
            if (gatilho == 0) { container.style.backgroundColor = '#40b625';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 23: 
            var container = document.getElementById("bola23");
            if (gatilho == 0) { container.style.backgroundColor = '#40b625';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 24: 
            var container = document.getElementById("bola24");
            if (gatilho == 0) { container.style.backgroundColor = '#40b625';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 25: 
            var container = document.getElementById("bola25");
            if (gatilho == 0) { container.style.backgroundColor = '#40b625';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 26: 
            var container = document.getElementById("bola26");
            if (gatilho == 0) { container.style.backgroundColor = '#40b625';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 27: 
            var container = document.getElementById("bola27");
            if (gatilho == 0) { container.style.backgroundColor = '#40b625';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 28: 
            var container = document.getElementById("bola28");
            if (gatilho == 0) { container.style.backgroundColor = '#40b625';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 29: 
            var container = document.getElementById("bola29");
            if (gatilho == 0) { container.style.backgroundColor = '#40b625';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 30: 
            var container = document.getElementById("bola30");
            if (gatilho == 0) { container.style.backgroundColor = '#40b625';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 31: 
            var container = document.getElementById("bola31");
            if (gatilho == 0) { container.style.backgroundColor = '#40b625';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 32: 
            var container = document.getElementById("bola32");
            if (gatilho == 0) { container.style.backgroundColor = '#40b625';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 33: 
            var container = document.getElementById("bola33");
            if (gatilho == 0) { container.style.backgroundColor = '#40b625';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 34: 
            var container = document.getElementById("bola34");
            if (gatilho == 0) { container.style.backgroundColor = '#40b625';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 35: 
            var container = document.getElementById("bola35");
            if (gatilho == 0) { container.style.backgroundColor = '#40b625';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 36: 
            var container = document.getElementById("bola36");
            if (gatilho == 0) { container.style.backgroundColor = '#40b625';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 37: 
            var container = document.getElementById("bola37");
            if (gatilho == 0) { container.style.backgroundColor = '#40b625';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 38: 
            var container = document.getElementById("bola38");
            if (gatilho == 0) { container.style.backgroundColor = '#40b625';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 39: 
            var container = document.getElementById("bola39");
            if (gatilho == 0) { container.style.backgroundColor = '#40b625';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 40: 
            var container = document.getElementById("bola40");
            if (gatilho == 0) { container.style.backgroundColor = '#40b625';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 41: 
            var container = document.getElementById("bola41");
            if (gatilho == 0) { container.style.backgroundColor = '#40b625';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 42: 
            var container = document.getElementById("bola42");
            if (gatilho == 0) { container.style.backgroundColor = '#40b625';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 43: 
            var container = document.getElementById("bola43");
            if (gatilho == 0) { container.style.backgroundColor = '#40b625';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 44: 
            var container = document.getElementById("bola44");
            if (gatilho == 0) { container.style.backgroundColor = '#40b625';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 45: 
            var container = document.getElementById("bola45");
            if (gatilho == 0) { container.style.backgroundColor = '#40b625';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 46: 
            var container = document.getElementById("bola46");
            if (gatilho == 0) { container.style.backgroundColor = '#40b625';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 47: 
            var container = document.getElementById("bola47");
            if (gatilho == 0) { container.style.backgroundColor = '#40b625';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 48: 
            var container = document.getElementById("bola48");
            if (gatilho == 0) { container.style.backgroundColor = '#40b625';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 49: 
            var container = document.getElementById("bola49");
            if (gatilho == 0) { container.style.backgroundColor = '#40b625';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 50: 
            var container = document.getElementById("bola50");
            if (gatilho == 0) { container.style.backgroundColor = '#40b625';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        default:
            text = "Looking forward to the Weekend";
    }
}

// função descobre quantos numeros o jogador escolheu
// minimo = 1 numero e maximo = 12 numeros
function validaNumerosEscolhidos() {
var contadora = 0;

    //procura espaços em brancos ou undefined
    for(var i = 0; i < vetorEx.length; i++) {
        if(vetorEx[i] == "" || vetorEx[i] == undefined) {
            contadora++;
        } else {
            vetorNumerosApostados[i] = vetorEx[i];
        }
    }

    var totalNumerosApostados = vetorEx.length - contadora;
    return totalNumerosApostados;
}

// funcao que mostra a quantidade de numeros que o jogador 
// esta selecionando, direto na interface
function QuatidadeNumerosSelecionados(quantidadeNumSelec, gatilho) {
    
    if(gatilho == 0) { //iniciou o jogo
        document.getElementById("QtdBolasEsc").innerHTML = 0;
    } else {
        document.getElementById("QtdBolasEsc").innerHTML = quantidadeNumSelec;
    }

    if(quantidadeNumSelec == 12) {
        document.getElementById("MsgBolasMax").style.display= 'flex';    
    } else {
        document.getElementById("MsgBolasMax").style.display= 'none';
    }
    
}

// função apos clicar no botao de enviar os dados
// faz a validação dos dados inseridos

var recebeValorApostadoJ = 0;
function validarDados() {
    recebeValorApostadoJ = document.getElementById("valorAposta").value;
    aposta = recebeValorApostadoJ;
    if(recebeValorApostadoJ >= 1 && validaNumerosEscolhidos() >= 1 && validaNumerosEscolhidos() <= 12) {
        alert("Aposta lida com sucesso! \nVocê apostará $:" + recebeValorApostadoJ + "." + "\nSua aposta tem " + validaNumerosEscolhidos() + " números, eles são " + ordenaNumeros(vetorNumerosApostados) + "\nClique em 'OK' para iniciar o jogo");
        //preencheBolasSorteadaRodadaUm();
        setTimeout(preencheBolasSorteadaRodadaUm, 2000);

    } else {
        alert("Número máximo de bolas é 12 e valor minimo de aposta é R$: 1,00.");
    }
}

// funcao que ordena numeros
function ordenaNumeros(vetorNumerosDesordenados_) {

    vetorNumerosDesordenados_.sort(function (a, b) { //números ficam em ordem crescente
	    return (a > b) ? 1 : ((b > a) ? -1 : 0);
    });

    return vetorNumerosDesordenados_;
}

/*======Essa parte corresponde ao inicio do jogo=========*/ 


// função que sorteia numeros
function sorteiaBolas() {
    var listaOrdenada = [];
    var listaNumerosSorteados = [];
    //gera numeros ordenados
    for(var i = 0; i < 50; i++) {
        listaOrdenada[i] = i + 1;
    }
    var tmp, n;
    //embaralha numeros
    for(var p = listaOrdenada.length; p;) {
        n = Math.random() * p-- | 0;
        tmp = listaOrdenada[n];
        listaOrdenada[n] = listaOrdenada[p];
        listaOrdenada[p] = tmp;
    }

    //preenche com os primeiros 20 numeros embaralhados
    for(var l = 0; l < 20; l++) {
        listaNumerosSorteados[l] = listaOrdenada[l];
    }
    return listaNumerosSorteados;
}

// função que preenche as bolas da primeira rodada
function preencheBolasSorteadaRodadaUm() {
    var listaNumerosSorteados = [];
    listaNumerosSorteados = sorteiaBolas();
    listaNumerosSorteados = ordenaNumeros(listaNumerosSorteados);
    document.getElementById("n1").innerHTML = listaNumerosSorteados[0];
    document.getElementById("n2").innerHTML = listaNumerosSorteados[1];
    document.getElementById("n3").innerHTML = listaNumerosSorteados[2];
    document.getElementById("n4").innerHTML = listaNumerosSorteados[3];
    document.getElementById("n5").innerHTML = listaNumerosSorteados[4];
    document.getElementById("n6").innerHTML = listaNumerosSorteados[5];
    document.getElementById("n7").innerHTML = listaNumerosSorteados[6];
    document.getElementById("n8").innerHTML = listaNumerosSorteados[7];
    document.getElementById("n9").innerHTML = listaNumerosSorteados[8];
    document.getElementById("n10").innerHTML = listaNumerosSorteados[9];
    setInterval(preencheBolasSorteadaRodadaUmS(listaNumerosSorteados), 1000);
}

// função que preenche as bolas da primeira rodada
function preencheBolasSorteadaRodadaUmS(listaNumerosSorteados) {
    document.getElementById("n11").innerHTML = listaNumerosSorteados[10];
    document.getElementById("n12").innerHTML = listaNumerosSorteados[11];
    document.getElementById("n13").innerHTML = listaNumerosSorteados[12];
    document.getElementById("n14").innerHTML = listaNumerosSorteados[13];
    document.getElementById("n15").innerHTML = listaNumerosSorteados[14];
    document.getElementById("n16").innerHTML = listaNumerosSorteados[15];
    document.getElementById("n17").innerHTML = listaNumerosSorteados[16];
    document.getElementById("n18").innerHTML = listaNumerosSorteados[17];
    document.getElementById("n19").innerHTML = listaNumerosSorteados[18];
    document.getElementById("n20").innerHTML = listaNumerosSorteados[19];
    preencheBolasAcertadasRodadaUm(listaNumerosSorteados);
}


var vetorteste = [];
// função compara bolas para descobrir acertos do jogador
function comparaBolas(listaNumerosSorteados) {
    var numerosAcertados = [];

    var x = 0;
    for(var i=0; i<20; i++){
        for(var j=0; j<vetorNumerosApostados.length; j++) {
            if(listaNumerosSorteados[i] == vetorNumerosApostados[j]) {
                numerosAcertados[x] = vetorNumerosApostados[j];
                x++;
            }
        }
    }

    tamanhoNumerosAcertados = numerosAcertados.length;

    for(var j=0; j<=12; j++){ // preenche valores vazios com 'x'
        if(numerosAcertados[j] == undefined){
            numerosAcertados[j] = "x";
        } else {
            vetorteste[j] = numerosAcertados[j];
        }
    }
    return numerosAcertados;
}

//função preenche as bolas que foram acertadas
function preencheBolasAcertadasRodadaUm(listaNumerosSorteados) {
    var numerosAcertados = [];
    numerosAcertados = comparaBolas(listaNumerosSorteados);
    document.getElementById("a1-r1").innerHTML = numerosAcertados[0];
    document.getElementById("a2-r1").innerHTML = numerosAcertados[1];
    document.getElementById("a3-r1").innerHTML = numerosAcertados[2];
    document.getElementById("a4-r1").innerHTML = numerosAcertados[3];
    document.getElementById("a5-r1").innerHTML = numerosAcertados[4];
    document.getElementById("a6-r1").innerHTML = numerosAcertados[5];
    document.getElementById("a7-r1").innerHTML = numerosAcertados[6];
    document.getElementById("a8-r1").innerHTML = numerosAcertados[7];
    document.getElementById("a8-r1").innerHTML = numerosAcertados[8];
    document.getElementById("a9-r1").innerHTML = numerosAcertados[9];
    document.getElementById("a10-r1").innerHTML = numerosAcertados[10];
    document.getElementById("a11-r1").innerHTML = numerosAcertados[11];
    document.getElementById("a12-r1").innerHTML = numerosAcertados[12];

    calculaValorRodada();

   
}

//funcao retira o "x" de dentro do vetor
function eliminaX() {
    var novoVetor = [];

    for(var i = 0; numerosAcertados.length; i++) {
        if(numerosAcertados[i] != 'x') {
            novoVetor[i] = numerosAcertados[i];
        }
    }
    return novoVetor;
}


/* parte referencia ao calculo e resultado do jogo*/

// linha matriz = qtd numeros jogados
// coluna matriz = qtd numeros sorteados que foram sorteados
function matrizPontos() {
    var y = validaNumerosEscolhidos();
    y = y - 1;

    var matriz = [  [0, 3],
                [0, 1, 9],
                [0, 1, 2, 16],
                [0, 0.5, 2, 6, 12],
                [0, 0.5, 1, 3, 15, 50],
                [0, 0.5, 1, 2, 3, 30, 75],
                [0, 0.5, 0.5, 1, 6, 12, 36, 100],
                [0, 0.5, 0.5, 1, 3, 6, 19, 90, 720],
                [0, 0.5, 0.5, 1, 2, 4, 8,  20, 80, 1.200],
                [0, 0, 0.5, 1, 2, 3, 5, 10, 30, 600, 1800],
                [0, 0, 0.5, 1, 1, 2, 6, 15, 25, 180, 1000, 3000],
                [0, 0, 0, 0.5, 1, 2, 4, 24, 72, 250, 500, 2000, 4000],
                [0, 0, 0, 0.5, 0.5, 3, 4, 5, 20, 80, 240, 500, 3000, 6000] ];

    var valorMatriz = matriz[y][tamanhoNumerosAcertados];
    
    return valorMatriz;
}

// funcao calcula o valor que ganhou ou perdeu na rodada
function calculaValorRodada() {
    var recebeValorApostado = document.getElementById("valorAposta").value;
    
    var x = matrizPontos();
    
    var valorResultado = x * recebeValorApostado;
    
    calculaValorTotal(valorResultado);

    return valorResultado;
}

//calcula quanto a pessoa ganhou/perdeu no final do jogo
function calculaValorTotal(valor) {
    var xy = document.getElementById("valorAposta").value;
    var valorGanhoTotal = 0;

    if(valor == 0) {
        valorGanhoTotal = 0;
    } else {
        valorGanhoTotal = (xy * 1) + valor;
    }

    return valorGanhoTotal;
}

function preencheInterface() {
    //preenche o valor apostado
    document.getElementById("retornoDinheiro").innerHTML = recebeValorApostadoJ;

    //preenche com os numeros apostados
    document.getElementById("numApost").innerHTML = vetorNumerosApostados;
    

    //preenche o valor ganho na rodada
    var x = calculaValorRodada();
    if (x < 1) {
        document.getElementById("valorRod").innerHTML = " Infelizmente você não ganhou nada";
        document.getElementById("valorRod").style.color= "red";
    } else {
        document.getElementById("valorRod").innerHTML = calculaValorRodada();
        acertoBall
        document.getElementById("valorRod").style.color= "green";
    }
    
    
    //preenche o valor total ganho
    var w = document.getElementById("RecebeuFinal").innerHTML = calculaValorTotal(calculaValorRodada());
    if(w == 0) {
        document.getElementById("RecebeuFinal").innerHTML = calculaValorTotal(calculaValorRodada());
        document.getElementById("RecebeuFinal").style.color= "red";
    } else {
        document.getElementById("RecebeuFinal").innerHTML = calculaValorTotal(calculaValorRodada());
        document.getElementById("RecebeuFinal").style.color= "green";
    }
    


    //preenche bolas que acertou
    if(vetorteste.length == 0) {
        document.getElementById("acertoBall").innerHTML = " Infelizmente você não acertou nenhum número";
        document.getElementById("acertoBall").style.color= "red";
    } else {
        document.getElementById("acertoBall").innerHTML = vetorteste;

    }
    
}

