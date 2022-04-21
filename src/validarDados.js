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
    var xx = recebeNumerosApostados.split(" ");
    var novoVetor = Array.from(xx);
    
    var vetorNum = [];

    for(var i = 0; i < novoVetor.length; i++) {
        vetorNum[i] = parseInt(novoVetor[i]);
    }

    vetorNum.sort(function (a, b) {
	    return (a > b) ? 1 : ((b > a) ? -1 : 0);
    });
        
    if(50 > 6) {
        document.getElementById("numeroApostado").style.borderColor = "red";
        document.getElementById("respostaNumApostados").innerHTML = vetorNum;
        
        return false;
    }
    return true;
}

/*function validaNum() {
    var input = document.getElementsByName('array[]');
    var aux;
    /*var input2 = x(input);*/
    /*for(var i = 0; i <input.length; i++) {
        if(input[i] > input[i+1]) {
            aux = input[i];
            input[i] = input[i+1];
            input[i+1] = aux;
        }
    }*/
/*    
    for(var i = 0; i <input.length; i++) {
        document.getElementById("respostaNumApostados").innerHTML = input[i];
    }
    //document.getElementById("respostaNumApostados").innerHTML = input[];

}*/

/*function x(input1) {
    input1.sort((a, b) => {
        if(a > b) return 1;
        if(a < b) return -1;

        return 0;
    });

}*/

/*function converteStringToInt(_recebeNumerosApostados) {
    var array = _recebeNumerosApostados.split(" ");
    length = array.length;
    var ArrayN = [];


    var arrayNew = [];
    length = array.length;
    for(var i = 0; i <length; i++){
        /*if(_recebeNumerosApostados != "NaN") {
            arrayNew.push(parseInt(_recebeNumerosApostados[i]));
        }*/
 /*       arrayNew.push(parseInt(_recebeNumerosApostados[i]));
    }
    return arrayNew;
}*/

/*function ordemCrescente(numConvertido) {

}*/