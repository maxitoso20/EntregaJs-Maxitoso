
// VARIABLE
let stockRam = 0;

// INICIO DEL CICLO
alert("Bienvenido a Stocker Pc Consultor de Stock de memorias Ram");


function inicioCiclo() {
    let pedirAccion = Number(prompt(`¿Que quiere hacer? 
1-Consultar Stock. 
2-Agregar Componente.
3-Quitar Componente.
4-Salir`));
    return accionCiclo1 = pedirAccion;
}

let accionCiclo1 = 0;

// arranca
inicioCiclo();

// Recibe 1, 2, 3 o 4

function accionEfectuar() {
    while (accionCiclo1 != 4) {
        if (accionCiclo1 === 1) {
            bodega();
        } else if (accionCiclo1 === 2) {
            agregarMenu();
        }
        else if (accionCiclo1 === 3) {
            quitarMenu();
        }
        else {
        }
    }
};
// Bodega 
function bodega() {
    alert(`Actualmente en la bodega hay ${stockRam} Memorias rams`);
    inicioCiclo();
}

// funcion Agregar.
function agregarMenu() {
    let cantidadSuma = Number(prompt("Cuanta rams desea agregar"));
    alert("Ram agregada con exito!");
    inicioCiclo();
    return stockRam = stockRam + cantidadSuma;
};

// Funcion quitar.

function quitarMenu() {
    let cantidadResta = Number(prompt("Cuanta rams desea quitar"));
    alert("Ram quitada con exito!");
    inicioCiclo();
    return stockRam = stockRam - cantidadResta;
};

accionEfectuar();
alert("Gracias por usar Stocker");