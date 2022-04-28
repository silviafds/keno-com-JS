var verificacaoValorAposta = 0, verificacaoRodadas = 0, verificacaoNumerosApostados = 0;

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
    return 0;
}

function validaDadosFornecidos() {
    var resultadoVerificacao = verificacaoValorAposta + verificacaoRodadas + verificacaoNumerosApostados;

    if(resultadoVerificacao == 3) {
        alert("Dados preenchidos com sucesso. Clique em 'OK' para iniciar jogo");
    } else {
        alert("Dados fornecidos não estão totalmente corretos.");
    }
}