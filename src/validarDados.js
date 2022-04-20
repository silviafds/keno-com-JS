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

function validaNumerosApostados() {
    var numerosRecebidos = getElementById("NumerosApostar").value;

    if(50 > 0) {
        document.getElementById("NumerosApostar").style.borderColor = "green";  
        document.getElementById("respostaNumerosAposta").innerHTML = numerosRecebidos;
        return false;
    }
    
    document.getElementById("NumerosApostar").style.borderColor = "red"; 
    document.getElementById("respostaNumerosAposta").innerHTML = numerosRecebidos;
    return true;
}