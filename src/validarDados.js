var verificacaoValorAposta = 0, verificacaoRodadas = 0, verificacaoNumerosApostados = 0;
var PegaValorApostado, PegaQtdNumerosApostados, numApostados = [], PegaValorRodada;

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

function validaNumRodadas() {
    var recebeQtdApostas = document.getElementById("numeroRodadas").value;
    
    if(recebeQtdApostas < 1) {
        document.getElementById("numeroRodadas").style.borderColor = "red";
        document.getElementById("iconInvalidacaoRodadas").style.display = "flex";
        document.getElementById("iconValidacaoRodadas").style.display = "none";
        return false;
    }
    PegaValorRodada = recebeQtdApostas;
    document.getElementById("numeroRodadas").style.border = "solid";
    document.getElementById("numeroRodadas").style.borderColor = "green";
    document.getElementById("iconInvalidacaoRodadas").style.display = "none";
    document.getElementById("iconValidacaoRodadas").style.display = "flex";
    verificacaoRodadas = 1;
    return true;
}

function validaNumApostados() {
    var recebeNumerosApostados = document.getElementById("numeroApostado").value;
    var xx = recebeNumerosApostados.split(" "); //retira espaços desnecessários
    var novoVetor = Array.from(xx); //transforma em novo array
    
    var vetorNumerosOrdenados = ordenaNumeros(novoVetor);
    var recebeValorRepeticao = buscaNumerosRepetidos(vetorNumerosOrdenados); //retorna valor booleano
    var recebeQtdNumerosApostados = validaQuantidadeNumerosApostado(vetorNumerosOrdenados);

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
var vetorzinho = [];
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
    numApostados = vetorOrdenado;

    for(var i = 0; i < vetorOrdenado.length; i++) { //converte string para int
        vetorzinho[i] = vetorOrdenado[i];
    }

    
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
    var resultadoVerificacao = verificacaoValorAposta + verificacaoRodadas + verificacaoNumerosApostados;

    if(resultadoVerificacao == 3) {
        alert("Aposta lida com sucesso! \nVocê apostará $:" + PegaValorApostado + "." + "\nJogará " + PegaValorRodada + " rodadas, apostando $" + valorApostaPorRodada() + " créditos por rodada." + "\nSua aposta tem " + PegaQtdNumerosApostados + " números, eles são " + numApostados + "\n Clique em 'OK' para iniciar o jogo.");
        window.location.assign("introducaoAposta.html");
    } else {
        alert("Dados fornecidos não estão totalmente corretos.");
    }
}

/* função que calcula o valor que sera apostado em cada rodada*/
function valorApostaPorRodada() {
    var valorPorRodada = PegaValorApostado/PegaValorRodada;
    return valorPorRodada.toFixed(2);
}

/* Essa parte corresponde ao arquivo introducaoApostas.html*/ 

var contadorDeRodadas = 1; // variavel q atualiza valor a cada rodada

//função informa qual rodada atual
function bannerRodadas() {
    document.getElementById("informaRodadaAtual").innerHTML = contadorDeRodadas + 'º Rodada'
    setInterval(preencheBolasPrimaria, 2000);
}

function preencheBolasPrimaria() {
   
    document.getElementById("n1").innerHTML = PegaValorApostado;
    /*document.getElementById("n2").innerHTML = numApostados[1];
    document.getElementById("n3").innerHTML = numApostados[2];
    document.getElementById("n4").innerHTML = numApostados[3];
    document.getElementById("n5").innerHTML = numApostados[4];
    document.getElementById("n6").innerHTML = numApostados[5];
    document.getElementById("n7").innerHTML = numApostados[6];
    document.getElementById("n8").innerHTML = numApostados[7];
    document.getElementById("n9").innerHTML = numApostados[8];
    document.getElementById("n10").innerHTML = numApostados[9];*/
    setInterval(preencheBolasSecudaria, 1000);

}

function preencheBolasSecudaria() {
    document.getElementById("n11").innerHTML = 8;
    document.getElementById("n12").innerHTML = 18;
    document.getElementById("n13").innerHTML = 3;
    document.getElementById("n14").innerHTML = 16;
    document.getElementById("n15").innerHTML = 25;
    document.getElementById("n16").innerHTML = 8;
    document.getElementById("n17").innerHTML = 18;
    document.getElementById("n18").innerHTML = 3;
    document.getElementById("n19").innerHTML = 16;
    document.getElementById("n20").innerHTML = 25;
    
}

