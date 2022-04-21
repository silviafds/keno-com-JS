function validaValorApostado() {
    var valorApostado = document.getElementById("valorApostar").value;

    if(valorApostado <= 0) {
        document.getElementById("valorApostar").style.borderColor = "red";
        document.getElementById("respostaValorAposta").style.color = "red";
        document.getElementById("respostaValorAposta").innerHTML = "Informe um valor maior que 0."
        return false;
    }

    document.getElementById("valorApostar").style.borderColor = "green";
    document.getElementById("respostaValorAposta").style.color = "green";
    document.getElementById("respostaValorAposta").innerHTML = "Valor informado válido.";
    return true;
}

function validaNumRodadas() {
    var recebeQtdApostas = document.getElementById("numeroRodadas").value;

    if(recebeQtdApostas < 1) {
        document.getElementById("respostasNumeroRodadas").style.borberColor = "red";
        document.getElementById("respostaNumeroRodadas").style.color = "red";
        document.getElementById("resostaNumeroRodadas").innerHTML = "O número mńimo de jogadas é 1";
        return false;
    }

    document.getElementById("respostasNumeroRodadas").style.borberColor = "green";
    document.getElementById("respostaNumeroRodadas").style.color = "green";
    document.getElementById("resostaNumeroRodadas").innerHTML = "Informação válida";
    return true;
}

function validaNumApostados() {
    var recebeNumerosApostados = document.getElementById("numeroApostado").value;
    var xx = recebeNumerosApostados.split(" "); //retira espaços desnecessários
    var novoVetor = Array.from(xx); //transforma em novo array
    
    var vetorNumerosOrdenados = ordenaNumeros(novoVetor);

    if(50 > 6) {
        document.getElementById("numeroApostado").style.borderColor = "red";
        document.getElementById("respostaNumApostados").innerHTML = vetorNumerosOrdenados;
        
        return false;
    }
    return true;
}

/* Função na qual coloca os números apostados em ordem crescente 
    @vetorOrdenado vetor com os números em ordem crescente
*/
function ordenaNumeros(novoVetor_) {
    var vetorOrdenado = [];

    for(var i = 0; i < novoVetor_.length; i++) { //converte string para int
        vetorOrdenado[i] = parseInt(novoVetor_[i]);
    }

    vetorOrdenado.sort(function (a, b) { //números ficam em ordem crescente
	    return (a > b) ? 1 : ((b > a) ? -1 : 0);
    });

    return vetorOrdenado;
}

