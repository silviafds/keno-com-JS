var verificacaoValorAposta = 0, verificacaoNumerosApostados = 0;
var PegaValorApostado, PegaQtdNumerosApostados, vetorNumerosJogados = [];

// função valida o valor apostado pelo jogador
function validaValorApostado() {
    var valorApostado = document.getElementById("valorApostar").value;
    
    if(valorApostado <= 0) {
        document.getElementById("valorApostar").style.borderColor = "red";
        document.getElementById("iconInvalidacao").style.display = "flex";
        document.getElementById("iconValidacao").style.display = "none";
        return false;
    }
    
    document.getElementById("valorApostar").style.border = "solid";
    document.getElementById("valorApostar").style.borderColor = "green";
    document.getElementById("iconValidacao").style.display = "flex";
    document.getElementById("iconInvalidacao").style.display = "none";
    PegaValorApostado = valorApostado;
    verificacaoValorAposta = 1;
    
    return true;
}

// função valida os numeros apostados pela jogador
function validaNumApostados() {
    var recebeNumerosApostados = document.getElementById("numeroApostado").value;
    var xx = recebeNumerosApostados.split(" "); //retira espaços desnecessários
    var novoVetor = Array.from(xx); //transforma em novo array
    
    var vetorNumerosOrdenados = ordenaNumeros(novoVetor);
    var recebeValorRepeticao = buscaNumerosRepetidos(vetorNumerosOrdenados); //retorna valor booleano
    var recebeQtdNumerosApostados = validaQuantidadeNumerosApostado(vetorNumerosOrdenados);

    //preenche vetor com numeros do jogador
    for(var i = 0; i < vetorNumerosOrdenados.length; i++) {
        vetorNumerosJogados[i] = vetorNumerosOrdenados[i];
    }

    if(recebeValorRepeticao == false && recebeQtdNumerosApostados == 0) {
        document.getElementById("numeroApostado").style.border = "solid";
        document.getElementById("numeroApostado").style.borderColor = "green";
        document.getElementById("iconValidacaoNumeros").style.display = "flex"
        document.getElementById("iconInvalidacaoNumeros").style.display = "none"
        verificacaoNumerosApostados = 1;
        return true;
    } else {
        document.getElementById("numeroApostado").style.borderColor = "red";
        document.getElementById("iconValidacaoNumeros").style.display = "none"
        document.getElementById("iconInvalidacaoNumeros").style.display = "flex";
        return false;
    }

}

/* Função na qual coloca os números apostados em ordem crescente 
    @vetorOrdenado vetor com os números em ordem crescente
*/
function ordenaNumeros(vetorNumerosDesordenados_) {
    var vetorOrdenado = [];

    for(var i = 0; i < vetorNumerosDesordenados_.length; i++) { //converte string para int
        vetorOrdenado[i] = parseInt(vetorNumerosDesordenados_[i]);
    }

    vetorOrdenado.sort(function (a, b) { //números ficam em ordem crescente
	    return (a > b) ? 1 : ((b > a) ? -1 : 0);
    });

    return vetorOrdenado;
}

/* Função busca elemento repetido no vetor */
function buscaNumerosRepetidos(vetorOrdenado_) {
    return (new Set(vetorOrdenado_)).size !== vetorOrdenado_.length;
}

/* Função valida quantidade de numeros */
function validaQuantidadeNumerosApostado(vetorNumerosOrdenados_) {
    if (vetorNumerosOrdenados_.length > 15 || vetorNumerosOrdenados_.length < 1) {
        return 1;
    }
    PegaQtdNumerosApostados = vetorNumerosOrdenados_.length;
    return 0;
}

/* função que mostra o valor real da aposta do jogador, apenas se ele digitou
os valores corretos, caso contrário, o jogo não continua*/ 
function validaDadosFornecidos() {
    var resultadoVerificacao = verificacaoValorAposta + verificacaoNumerosApostados;

    if(resultadoVerificacao == 2) {
        alert("Aposta lida com sucesso! \nVocê apostará $:" + PegaValorApostado + "." + "\nJogará 3 rodadas, apostando $" + valorApostaPorRodada() + " créditos por rodada." + "\nSua aposta tem " + PegaQtdNumerosApostados + " números, eles são " + vetorNumerosJogados + "\n Clique em 'OK' para iniciar o jogo.");
        //window.location.assign("introducaoAposta.html");
        preencheBolasSorteadaRodadaUm();
    } else {
        alert("Dados fornecidos não estão totalmente corretos.");
    }
}

/* função que calcula o valor que sera apostado em cada rodada*/
function valorApostaPorRodada() {
    var valorPorRodada = PegaValorApostado/3;
    return valorPorRodada.toFixed(2);
}






/*======Essa parte corresponde ao inicio do jogo=========*/ 






//função que chama a proxima rodada, inicia na segunda rodada
function RodadaDois() {
    preencheBolasSorteadasRodadaDois();
}

//função que chama a proxima rodada, inicia a terceira rodada
function RodadaTres() {
    preencheBolasSorteadasRodadaTres();
}

// função que sorteia numeros
function sorteiaBolas() {
    var listaOrdenada = [];
    var listaNumerosSorteados = [];
    //gera numeros ordenados
    for(var i = 0; i < 90; i++) {
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
        for(var j=0; j<vetorNumerosJogados.length; j++){
            if(listaNumerosSorteados[i] == vetorNumerosJogados[j]){
                numerosAcertados[x] = vetorNumerosJogados[j];
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


