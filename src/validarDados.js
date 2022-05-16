var verificacaoValorAposta = 0, verificacaoNumerosApostados = 0;
var PegaValorApostado, PegaQtdNumerosApostados, vetorNumerosJogados = [];

// INICIO NOVA CONFIG
var vetorEx = [];
var vetorNumerosApostados = [];
function bolasEscolhidas(x) {
    preencheBolasEscolhidas(x);
}

// função que preenche vetor com numeros escolhidos pelo jogador
function preencheBolasEscolhidas(numeroEscolhidoJogador) {
    var contadora = 0, posicaoVetor = vetorEx.length;

    if(vetorEx.length > 0) {
        for(var i = 0; i < posicaoVetor; i++) {
            if(vetorEx[i] == numeroEscolhidoJogador) { //jogador quer mudar número escolhido
                for(var j = i; j < posicaoVetor; j++) {
                    vetorEx[j] = vetorEx[j+1];
                }
                posicaoVetor--;
                contadora = 1;
                mudaCordeFundo(numeroEscolhidoJogador, 1);
            } 
        }
    }

    //preenche com novo numero no vetor
    if(contadora == 0){
        vetorEx[posicaoVetor] = numeroEscolhidoJogador;
        mudaCordeFundo(numeroEscolhidoJogador, 0); //num 0 = muda cor do fundo 
    }
    
}

// função que muda as cores de fundo ao clicar em algum número
function mudaCordeFundo(numero, gatilho) {
    switch (numero) {
        case 1: 
            var container = document.getElementById("bola1");
            if (gatilho == 0) { container.style.backgroundColor = '#2d7404';
            } else { container.style.backgroundColor = '#b3cfe1';}
            break;
        case 2: 
            var container = document.getElementById("bola2");
            if (gatilho == 0) { container.style.backgroundColor = '#2d7404';
            } else { container.style.backgroundColor = '#b3cfe1';}
            break;
        case 3: 
            var container = document.getElementById("bola3");
            if (gatilho == 0) { container.style.backgroundColor = '#2d7404';
            } else { container.style.backgroundColor = '#b3cfe1';}
            break;
        case 4: 
            var container = document.getElementById("bola4");
            if (gatilho == 0) { container.style.backgroundColor = '#2d7404';
            } else { container.style.backgroundColor = '#b3cfe1';}
            break;
        case 5: 
            var container = document.getElementById("bola5");
            if (gatilho == 0) { container.style.backgroundColor = '#2d7404';
            } else { container.style.backgroundColor = '#b3cfe1';}
            break;
        case 6: 
            var container = document.getElementById("bola6");
            if (gatilho == 0) { container.style.backgroundColor = '#2d7404';
            } else { container.style.backgroundColor = '#b3cfe1';}
            break;
        case 7: 
            var container = document.getElementById("bola7");
            if (gatilho == 0) { container.style.backgroundColor = '#2d7404';
            } else { container.style.backgroundColor = '#b3cfe1';}
            break;
        case 8: 
            var container = document.getElementById("bola8");
            if (gatilho == 0) { container.style.backgroundColor = '#2d7404';
            } else { container.style.backgroundColor = '#b3cfe1';}
            break;
        case 9: 
            var container = document.getElementById("bola9");
            if (gatilho == 0) { container.style.backgroundColor = '#2d7404';
            } else { container.style.backgroundColor = '#b3cfe1';}
            break;
        case 10: 
            var container = document.getElementById("bola10");
            if (gatilho == 0) { container.style.backgroundColor = '#2d7404';
            } else { container.style.backgroundColor = '#b3cfe1';}
            break;
        case 11: 
            var container = document.getElementById("bola11");
            if (gatilho == 0) { container.style.backgroundColor = '#2d7404';
            } else { container.style.backgroundColor = '#b3cfe1';}
            break;
        case 12: 
            var container = document.getElementById("bola12");
            if (gatilho == 0) { container.style.backgroundColor = '#2d7404';
            } else { container.style.backgroundColor = '#b3cfe1';}
            break;
        case 13: 
            var container = document.getElementById("bola13");
            if (gatilho == 0) { container.style.backgroundColor = '#2d7404';
            } else { container.style.backgroundColor = '#b3cfe1';}
            break;
        case 14: 
            var container = document.getElementById("bola14");
            if (gatilho == 0) { container.style.backgroundColor = '#2d7404';
            } else { container.style.backgroundColor = '#b3cfe1';}
            break;
        case 15: 
            var container = document.getElementById("bola15");
            if (gatilho == 0) { container.style.backgroundColor = '#2d7404';
            } else { container.style.backgroundColor = '#b3cfe1';}
            break;
        case 16: 
            var container = document.getElementById("bola16");
            if (gatilho == 0) { container.style.backgroundColor = '#2d7404';
            } else { container.style.backgroundColor = '#b3cfe1';}
            break;
        case 17: 
            var container = document.getElementById("bola17");
            if (gatilho == 0) { container.style.backgroundColor = '#2d7404';
            } else { container.style.backgroundColor = '#b3cfe1';}
            break; 
        case 18: 
            var container = document.getElementById("bola18");
            if (gatilho == 0) { container.style.backgroundColor = '#2d7404';
            } else { container.style.backgroundColor = '#b3cfe1';}
            break;
        case 19: 
            var container = document.getElementById("bola19");
            if (gatilho == 0) { container.style.backgroundColor = '#2d7404';
            } else { container.style.backgroundColor = '#b3cfe1';}
            break;
        case 20: 
            var container = document.getElementById("bola20");
            if (gatilho == 0) { container.style.backgroundColor = '#2d7404';
            } else { container.style.backgroundColor = '#b3cfe1';}
            break;
        case 21: 
            var container = document.getElementById("bola21");
            if (gatilho == 0) { container.style.backgroundColor = '#2d7404';
            } else { container.style.backgroundColor = '#b3cfe1';}
            break;
        case 22: 
            var container = document.getElementById("bola22");
            if (gatilho == 0) { container.style.backgroundColor = '#2d7404';
            } else { container.style.backgroundColor = '#b3cfe1';}
            break;
        case 23: 
            var container = document.getElementById("bola23");
            if (gatilho == 0) { container.style.backgroundColor = '#2d7404';
            } else { container.style.backgroundColor = '#b3cfe1';}
            break;
        case 24: 
            var container = document.getElementById("bola24");
            if (gatilho == 0) { container.style.backgroundColor = '#2d7404';
            } else { container.style.backgroundColor = '#b3cfe1';}
            break;
        case 25: 
            var container = document.getElementById("bola25");
            if (gatilho == 0) { container.style.backgroundColor = '#2d7404';
            } else { container.style.backgroundColor = '#b3cfe1';}
            break;
        case 26: 
            var container = document.getElementById("bola26");
            if (gatilho == 0) { container.style.backgroundColor = '#2d7404';
            } else { container.style.backgroundColor = '#b3cfe1';}
            break;
        case 27: 
            var container = document.getElementById("bola27");
            if (gatilho == 0) { container.style.backgroundColor = '#2d7404';
            } else { container.style.backgroundColor = '#b3cfe1';}
            break;
        case 28: 
            var container = document.getElementById("bola28");
            if (gatilho == 0) { container.style.backgroundColor = '#2d7404';
            } else { container.style.backgroundColor = '#b3cfe1';}
            break;
        case 29: 
            var container = document.getElementById("bola29");
            if (gatilho == 0) { container.style.backgroundColor = '#2d7404';
            } else { container.style.backgroundColor = '#b3cfe1';}
            break;
        case 30: 
            var container = document.getElementById("bola30");
            if (gatilho == 0) { container.style.backgroundColor = '#2d7404';
            } else { container.style.backgroundColor = '#b3cfe1';}
            break;
        case 31: 
            var container = document.getElementById("bola31");
            if (gatilho == 0) { container.style.backgroundColor = '#2d7404';
            } else { container.style.backgroundColor = '#b3cfe1';}
            break;
        case 32: 
            var container = document.getElementById("bola32");
            if (gatilho == 0) { container.style.backgroundColor = '#2d7404';
            } else { container.style.backgroundColor = '#b3cfe1';}
            break;
        case 33: 
            var container = document.getElementById("bola33");
            if (gatilho == 0) { container.style.backgroundColor = '#2d7404';
            } else { container.style.backgroundColor = '#b3cfe1';}
            break;
        case 34: 
            var container = document.getElementById("bola34");
            if (gatilho == 0) { container.style.backgroundColor = '#2d7404';
            } else { container.style.backgroundColor = '#b3cfe1';}
            break;
        case 35: 
            var container = document.getElementById("bola35");
            if (gatilho == 0) { container.style.backgroundColor = '#2d7404';
            } else { container.style.backgroundColor = '#b3cfe1';}
            break;
        case 36: 
            var container = document.getElementById("bola36");
            if (gatilho == 0) { container.style.backgroundColor = '#2d7404';
            } else { container.style.backgroundColor = '#b3cfe1';}
            break;
        case 37: 
            var container = document.getElementById("bola37");
            if (gatilho == 0) { container.style.backgroundColor = '#2d7404';
            } else { container.style.backgroundColor = '#b3cfe1';}
            break;
        case 38: 
            var container = document.getElementById("bola38");
            if (gatilho == 0) { container.style.backgroundColor = '#2d7404';
            } else { container.style.backgroundColor = '#b3cfe1';}
            break;
        case 39: 
            var container = document.getElementById("bola39");
            if (gatilho == 0) { container.style.backgroundColor = '#2d7404';
            } else { container.style.backgroundColor = '#b3cfe1';}
            break;
        case 40: 
            var container = document.getElementById("bola40");
            if (gatilho == 0) { container.style.backgroundColor = '#2d7404';
            } else { container.style.backgroundColor = '#b3cfe1';}
            break;
        case 41: 
            var container = document.getElementById("bola41");
            if (gatilho == 0) { container.style.backgroundColor = '#2d7404';
            } else { container.style.backgroundColor = '#b3cfe1';}
            break;
        case 42: 
            var container = document.getElementById("bola42");
            if (gatilho == 0) { container.style.backgroundColor = '#2d7404';
            } else { container.style.backgroundColor = '#b3cfe1';}
            break;
        case 43: 
            var container = document.getElementById("bola43");
            if (gatilho == 0) { container.style.backgroundColor = '#2d7404';
            } else { container.style.backgroundColor = '#b3cfe1';}
            break;
        case 44: 
            var container = document.getElementById("bola44");
            if (gatilho == 0) { container.style.backgroundColor = '#2d7404';
            } else { container.style.backgroundColor = '#b3cfe1';}
            break;
        case 45: 
            var container = document.getElementById("bola45");
            if (gatilho == 0) { container.style.backgroundColor = '#2d7404';
            } else { container.style.backgroundColor = '#b3cfe1';}
            break;
        case 46: 
            var container = document.getElementById("bola46");
            if (gatilho == 0) { container.style.backgroundColor = '#2d7404';
            } else { container.style.backgroundColor = '#b3cfe1';}
            break;
        case 47: 
            var container = document.getElementById("bola47");
            if (gatilho == 0) { container.style.backgroundColor = '#2d7404';
            } else { container.style.backgroundColor = '#b3cfe1';}
            break;
        case 48: 
            var container = document.getElementById("bola48");
            if (gatilho == 0) { container.style.backgroundColor = '#2d7404';
            } else { container.style.backgroundColor = '#b3cfe1';}
            break;
        case 49: 
            var container = document.getElementById("bola49");
            if (gatilho == 0) { container.style.backgroundColor = '#2d7404';
            } else { container.style.backgroundColor = '#b3cfe1';}
            break;
        case 50: 
            var container = document.getElementById("bola50");
            if (gatilho == 0) { container.style.backgroundColor = '#2d7404';
            } else { container.style.backgroundColor = '#b3cfe1';}
            break;
        default:
            text = "Looking forward to the Weekend";
    }
}

function ola() {
    document.getElementById("debug").innerHTML = vetorEx;
    document.getElementById("tamanhoVetor").innerHTML = vetorEx.length;

    var resposta = validaNumerosEscolhidos();
    document.getElementById("tamVetoSemEspaco").innerHTML = resposta;
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

function validarDados() {
    var recebeValorApostadoJ = document.getElementById("valorAposta").value;

    if(recebeValorApostadoJ >= 1 && validaNumerosEscolhidos() >= 1 && validaNumerosEscolhidos() <= 12) {
        alert("Aposta lida com sucesso! \nVocê apostará $:" + recebeValorApostadoJ + "." + "\nSua aposta tem " + validaNumerosEscolhidos() + " números, eles são " + ordenaNumeros(vetorNumerosApostados) + "\nClique em 'OK' para iniciar o jogo");
        preencheBolasSorteadaRodadaUm();
    } else {
        alert("Informe os dados corretos.");
    }
}

// funcao que ordena numeros
function ordenaNumeros(vetorNumerosDesordenados_) {
    //var vetorOrdenado = [];

    /*for(var i = 0; i < vetorNumerosDesordenados_.length; i++) { //converte string para int
        vetorOrdenado[i] = parseInt(vetorNumerosDesordenados_[i]);
    }*/

    vetorNumerosDesordenados_.sort(function (a, b) { //números ficam em ordem crescente
	    return (a > b) ? 1 : ((b > a) ? -1 : 0);
    });

    return vetorNumerosDesordenados_;
}

/*======Essa parte corresponde ao inicio do jogo=========*/ 




//função que chama a proxima rodada, inicia na segunda rodada
/*
function RodadaDois() {
    preencheBolasSorteadasRodadaDois();
}*/

//função que chama a proxima rodada, inicia a terceira rodada
/*
function RodadaTres() {
    preencheBolasSorteadasRodadaTres();
}*/

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

// função compara bolas para descobrir acertos do jogador
function comparaBolas(listaNumerosSorteados) {
    var numerosAcertados = [];

    //numerosAcertados.length = 0;
    var x = 0;
    for(var i=0; i<20; i++){
        for(var j=0; j<vetorNumerosApostados.length; j++){
            if(listaNumerosSorteados[i] == vetorNumerosApostados[j]){
                numerosAcertados[x] = vetorNumerosApostados[j];
                x++;
            }
        }
    }
    // preenche valores vazios com 'x'
    for(var j=0; j<=15; j++){
        if(numerosAcertados[j] == undefined){
            numerosAcertados[j] = "x";
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
    document.getElementById("a13-r1").innerHTML = numerosAcertados[13];
    document.getElementById("a14-r1").innerHTML = numerosAcertados[14];
    document.getElementById("a15-r1").innerHTML = numerosAcertados[15];
}





/*
//função que preenche as bolas da 2º rodada
function preencheBolasSorteadasRodadaDois() {
    var listaNumerosSorteados = [];
    listaNumerosSorteados = sorteiaBolas();
    listaNumerosSorteados = ordenaNumeros(listaNumerosSorteados);

    document.getElementById("n1-r2").innerHTML = listaNumerosSorteados[0];
    document.getElementById("n2-r2").innerHTML = listaNumerosSorteados[1];
    document.getElementById("n3-r2").innerHTML = listaNumerosSorteados[2];
    document.getElementById("n4-r2").innerHTML = listaNumerosSorteados[3];
    document.getElementById("n5-r2").innerHTML = listaNumerosSorteados[4];
    document.getElementById("n6-r2").innerHTML = listaNumerosSorteados[5];
    document.getElementById("n7-r2").innerHTML = listaNumerosSorteados[6];
    document.getElementById("n8-r2").innerHTML = listaNumerosSorteados[7];
    document.getElementById("n9-r2").innerHTML = listaNumerosSorteados[8];
    document.getElementById("n10-r2").innerHTML = listaNumerosSorteados[9];
    setInterval(preencheBolasSorteadasRodadaDoisS(listaNumerosSorteados), 1000);
}

function preencheBolasSorteadasRodadaDoisS(listaNumerosSorteados) {
    document.getElementById("n11-r2").innerHTML = listaNumerosSorteados[10];
    document.getElementById("n12-r2").innerHTML = listaNumerosSorteados[11];
    document.getElementById("n13-r2").innerHTML = listaNumerosSorteados[12];
    document.getElementById("n14-r2").innerHTML = listaNumerosSorteados[13];
    document.getElementById("n15-r2").innerHTML = listaNumerosSorteados[14];
    document.getElementById("n16-r2").innerHTML = listaNumerosSorteados[15];
    document.getElementById("n17-r2").innerHTML = listaNumerosSorteados[16];
    document.getElementById("n18-r2").innerHTML = listaNumerosSorteados[17];
    document.getElementById("n19-r2").innerHTML = listaNumerosSorteados[18];
    document.getElementById("n20-r2").innerHTML = listaNumerosSorteados[19];
    preencheBolasAcertadasRodadaDois(listaNumerosSorteados);
}

//função que preenche as bolas acertadas na 2º rodada
function preencheBolasAcertadasRodadaDois(listaNumerosSorteados) {
    var numerosAcertados = [];
    numerosAcertados = comparaBolas(listaNumerosSorteados);
    document.getElementById("a1-r2").innerHTML = numerosAcertados[0];
    document.getElementById("a2-r2").innerHTML = numerosAcertados[1];
    document.getElementById("a3-r2").innerHTML = numerosAcertados[2];
    document.getElementById("a4-r2").innerHTML = numerosAcertados[3];
    document.getElementById("a5-r2").innerHTML = numerosAcertados[4];
    document.getElementById("a6-r2").innerHTML = numerosAcertados[5];
    document.getElementById("a7-r2").innerHTML = numerosAcertados[6];
    document.getElementById("a8-r2").innerHTML = numerosAcertados[7];
    document.getElementById("a8-r2").innerHTML = numerosAcertados[8];
    document.getElementById("a9-r2").innerHTML = numerosAcertados[9];
    document.getElementById("a10-r2").innerHTML = numerosAcertados[10];
    document.getElementById("a11-r2").innerHTML = numerosAcertados[11];
    document.getElementById("a12-r2").innerHTML = numerosAcertados[12];
    document.getElementById("a13-r2").innerHTML = numerosAcertados[13];
    document.getElementById("a14-r2").innerHTML = numerosAcertados[14];
    document.getElementById("a15-r2").innerHTML = numerosAcertados[15];
}

//função que preenche as bolas da 3º rodada
function preencheBolasSorteadasRodadaTres() {
    var listaNumerosSorteados = [];
    listaNumerosSorteados = sorteiaBolas();
    listaNumerosSorteados = ordenaNumeros(listaNumerosSorteados);

    document.getElementById("n1-r3").innerHTML = listaNumerosSorteados[0];
    document.getElementById("n2-r3").innerHTML = listaNumerosSorteados[1];
    document.getElementById("n3-r3").innerHTML = listaNumerosSorteados[2];
    document.getElementById("n4-r3").innerHTML = listaNumerosSorteados[3];
    document.getElementById("n5-r3").innerHTML = listaNumerosSorteados[4];
    document.getElementById("n6-r3").innerHTML = listaNumerosSorteados[5];
    document.getElementById("n7-r3").innerHTML = listaNumerosSorteados[6];
    document.getElementById("n8-r3").innerHTML = listaNumerosSorteados[7];
    document.getElementById("n9-r3").innerHTML = listaNumerosSorteados[8];
    document.getElementById("n10-r3").innerHTML = listaNumerosSorteados[9];
    setInterval(preencheBolasSorteadasRodadaTresS(listaNumerosSorteados), 1000);
}

function preencheBolasSorteadasRodadaTresS(listaNumerosSorteados) {
    document.getElementById("n11-r3").innerHTML = listaNumerosSorteados[10];
    document.getElementById("n12-r3").innerHTML = listaNumerosSorteados[11];
    document.getElementById("n13-r3").innerHTML = listaNumerosSorteados[12];
    document.getElementById("n14-r3").innerHTML = listaNumerosSorteados[13];
    document.getElementById("n15-r3").innerHTML = listaNumerosSorteados[14];
    document.getElementById("n16-r3").innerHTML = listaNumerosSorteados[15];
    document.getElementById("n17-r3").innerHTML = listaNumerosSorteados[16];
    document.getElementById("n18-r3").innerHTML = listaNumerosSorteados[17];
    document.getElementById("n19-r3").innerHTML = listaNumerosSorteados[18];
    document.getElementById("n20-r3").innerHTML = listaNumerosSorteados[19];
    preencheBolasAcertadasRodadaTres(listaNumerosSorteados);
}

//função que preenche as bolas acertadas na 3º rodada
function preencheBolasAcertadasRodadaTres(listaNumerosSorteados) {
    var numerosAcertados = [];
    numerosAcertados = comparaBolas(listaNumerosSorteados);
    document.getElementById("a1-r3").innerHTML = numerosAcertados[0];
    document.getElementById("a2-r3").innerHTML = numerosAcertados[1];
    document.getElementById("a3-r3").innerHTML = numerosAcertados[2];
    document.getElementById("a4-r3").innerHTML = numerosAcertados[3];
    document.getElementById("a5-r3").innerHTML = numerosAcertados[4];
    document.getElementById("a6-r3").innerHTML = numerosAcertados[5];
    document.getElementById("a7-r3").innerHTML = numerosAcertados[6];
    document.getElementById("a8-r3").innerHTML = numerosAcertados[7];
    document.getElementById("a8-r3").innerHTML = numerosAcertados[8];
    document.getElementById("a9-r3").innerHTML = numerosAcertados[9];
    document.getElementById("a10-r3").innerHTML = numerosAcertados[10];
    document.getElementById("a11-r3").innerHTML = numerosAcertados[11];
    document.getElementById("a12-r3").innerHTML = numerosAcertados[12];
    document.getElementById("a13-r3").innerHTML = numerosAcertados[13];
    document.getElementById("a14-r3").innerHTML = numerosAcertados[14];
    document.getElementById("a15-r3").innerHTML = numerosAcertados[15];
}
*/