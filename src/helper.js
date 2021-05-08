
export function tirarRandom(num1, num2, carasMax){

    if(carasMax === ''){
        return null;
    } else {
        num1 = Math.floor( Math.random() * carasMax) + 1;

    while(num1 === num2){
    num1 = Math.floor( Math.random() * carasMax) + 1;
    }
    return num1;   
    }

}


export function mostrarDado(cara){
    switch(cara){
        case 0: return null;
        case 1: return <i className="bi bi-dice-1"></i>;
        case 2: return <i className="bi bi-dice-2"></i>;
        case 3: return <i className="bi bi-dice-3"></i>;
        case 4: return <i className="bi bi-dice-4"></i>;
        case 5: return <i className="bi bi-dice-5"></i>;
        case 6: return <i className="bi bi-dice-6"></i>;
        default: return null;
    }
}

export function sumar(primer, segundo, tercero, cuarto){

    if(primer === null || primer === '' || primer === undefined){
        primer = 0;
    }
    if(segundo === null || segundo === '' || segundo === undefined){
        segundo = 0;
    }
    if(tercero === null || tercero === '' || tercero === undefined){
        tercero = 0;
    }
    if(cuarto === null || cuarto === '' || cuarto === undefined){
        cuarto = 0;
    }

    let resultado = primer + segundo + tercero + cuarto;

    return resultado

}