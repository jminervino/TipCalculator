

//DEIXA OS VALORES INVISIVEIS ATE A CHAMADA DO BOTÃO (CALCULAR) SER ACIONADA
document.getElementById("text-gorjeta").style.display = "none"
document.getElementById("real").style.display = "none"
document.getElementById("number").style.display = "none"

const number = window.document.getElementById("number")

function calcGorjeta() {   // CALCULA O VALOR DA GORJETA A SER PAGO POR PESSOA
    let totalCount = document.getElementById("total-count").value;
    let taxaServico = document.getElementById("taxa-servico").value;
    let qtPessoas = document.getElementById("qtPessoas").value

    if(totalCount === "" || taxaServico == 0 || isNaN(totalCount) || isNaN(qtPessoas)){ //EVITANDO ERROS
        alert("Por Favor, coloque um valor válido");
        return
    }

    if(qtPessoas == 0 || qtPessoas == ""){
        qtPessoas = 1
        document.getElementById("text-gorjeta").style.display = "none"
    } else {  
        document.getElementById("real").style.display = "flex"
        document.getElementById("number").style.display = "flex"
        document.getElementById("text-gorjeta").style.display = "flex"
    }

    let totalTaxaServico = (totalCount * taxaServico) / qtPessoas
    let total = totalTaxaServico + (totalCount / qtPessoas)
    total = Math.round(total * 100) / 100 //ARREDONDA PARA O VALOR INTEIRO MAIS PROXIMO
    total = total.toFixed(2) // FORMATA PARA 2 PONTOS FLUTUANTES

    document.getElementById("text-gorjeta").style.display = "flex" 
    document.getElementById("number").innerHTML = total;
}

document.getElementById("calcular").onclick = function(){ //FAZ A CHAMADA DA FUNÇÃO CalcGorjeta() ao acionar o botão CALCULAR
    calcGorjeta()
}