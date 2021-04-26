// Função para calcular o gasto de combustível


function calcularGasto(km, lt) {
    return parseFloat(km) / parseFloat(lt)
};

function verificarClassificacao(resultado) {
    if (resultado > 12) {
        return 'A';
    }
    else if (resultado < 12 && resultado >= 10) {
        return 'B';
    }
    else if (resultado < 10 && resultado >= 8) {
        return 'C';
    }
    else if (resultado < 8 && resultado >= 4) {
        return 'D';
    }
    else if (resultado < 4 && resultado >= 2) {
        return 'E';
    }
    else if (resultado < 2 && resultado >= 1) {
        return 'F';
    }
    else if (resultado < 1) {
        return 'G';
    }
}


export default {
    calcularGasto,
    verificarClassificacao
};