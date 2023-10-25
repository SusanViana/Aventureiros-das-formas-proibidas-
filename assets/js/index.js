function circulo(){
    let resultado = document.getElementById("resultado")

    let raio = parseFloat(document.getElementById("raio").value);

    let area = Math.PI * Math.pow(raio,2)

    resultado.innerHTML = area.toFixed(2)
}

function coroa_do_circulo(){

        const resultado = document.getElementById('resultado');
      
        const raio_externoElement = document.getElementById('raio_externo');
        const raio_externo = raio_externoElement
          ? parseFloat(raio_externoElement.value)
          : 0;
      
        const raio_internoElement = document.getElementById('raio_interno');
        const raio_interno = raio_internoElement
          ? parseFloat(raio_internoElement.value)
          : 0;
      
        const area = Math.PI * (Math.pow(raio_externo, 2) - Math.pow(raio_interno, 2));
      
        console.log('area', area);
      
        resultado.innerHTML=area
}

function polígono(){

    let resultado = document.getElementById('resultado');
    let verticesElement = document.getElementById('vertices');
    let vertices = verticesElement ? verticesElement.value : "";

    if (vertices) {
        let coordinates = vertices.split(" ").map(coord => {
            let [x, y] = coord.split(",").map(parseFloat);
            return { x, y };
        });

        let area = coordinates.reduce((acc, current, index, array) => {
            let next = array[(index + 1) % array.length];
            return acc + (current.x * next.y - next.x * current.y);
        }, 0) / 2;

        resultado.innerHTML = Math.abs(area);
    } else {
        resultado.innerHTML = "Por favor, insira as coordenadas dos vértices.";
    }
}

function Quadrado(){

let resultado = document.getElementById("resultado")

var lado_1 = parseFloat(document.getElementById("lado_1").value);

var lado_2 = parseFloat(document.getElementById("lado_2").value);

var area = lado_1 * lado_2 /2

resultado.innerHTML= area
}

function retangulo(){

let resultado = document.getElementById("resultado")

var comprimento = parseFloat(document.getElementById("comprimento").value);

var largura = parseFloat(document.getElementById("largura").value);

var area = comprimento * largura

resultado.innerHTML =area
}

function setor_circular(){

    let resultado = document.getElementById("resultado");

    let raio = parseFloat(document.getElementById("raio").value);

    let angulo = parseFloat(document.getElementById("angulo").value);

    if (raio > 0 && angulo >= 0 && angulo <= 360) {
        let area = (angulo / 360) * Math.PI * (raio ** 2);
        resultado.innerHTML = area;
    } else {
        resultado.innerHTML = "Por favor, insira valores válidos para raio e ângulo.";
    }

    resultado.innerHTML =area

}

function trapezoide_irregular(){

    let resultado = document.getElementById("resultado");
    let base1 = parseFloat(document.getElementById("base1").value);
    let base2 = parseFloat(document.getElementById("base2").value);
    let altura = parseFloat(document.getElementById("altura").value);

    if (base1 > 0 && base2 > 0 && altura > 0) {
        let area = (base1 + base2) * altura / 2;
        resultado.innerHTML = area;
    } else {
        resultado.innerHTML = "Por favor, insira valores válidos para as bases e altura.";
    }

}

function tronco_da_piramide(){

    let resultado = document.getElementById("resultado");
    let apotemaMaior = parseFloat(document.getElementById("apotema_maior").value);
    let apotemaMenor = parseFloat(document.getElementById("apotema_menor").value);
    let altura = parseFloat(document.getElementById("altura").value);

    if (apotemaMaior > 0 && apotemaMenor > 0 && altura > 0) {
        let area = (apotemaMaior + apotemaMenor) * Math.sqrt(apotemaMaior * apotemaMenor + altura ** 2);
        resultado.innerHTML = area;
    } else {
        resultado.innerHTML = "Por favor, insira valores válidos para as apótemas e altura.";
    }

}
