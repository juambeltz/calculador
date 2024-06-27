const formatearDinero = (valor) => {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });
    return formatter.format(valor)
}



const calculaMontoMasInteres = (valor, meses) => {
    
    let total
    
    //TIEMPO a mayor plazo mayor interes
    if (meses === 6){
         total = valor * 1.1
    } 
    else if (meses === 12) {
        total = valor * 1.2
    }
    else {
        total = valor * 1.3
    }

    // VALOR / a mas cantidad menor interes
    if (valor < 5000) {
        total *= 1.5
    } 
    else if (valor >= 5000 && valor < 10000) {
        total *= 1.4
    } 
    else if (valor >= 10000 && valor <= 15000) {
        total *= 1.3
    }
    else {
        total *= 1.2
    }

    return total
}



export{
    formatearDinero,
    calculaMontoMasInteres
}