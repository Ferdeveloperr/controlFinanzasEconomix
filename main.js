// declaramos el monto disponible en 0 para que el usuario pueda ingresar su salario y lo utilizamos para que se sume o reste dependiendo la funcion

let montoDisponible = 0;
let ingresos = [];
let egresosFijos = [];
let egresosVariables = [];
let ahorro = [];




// Pide el salario mensual una sola vez y asigna el valor a montoDisponible
montoDisponible = calcularMontoDisponible();





// let btnIngreso = document.getElementById("ingresar-ingreso-extra")
// btnIngreso.addEventListener("click", () =>{
//     montoDisponible += montoExtra;
//     console.log(montoDisponible)
//   } )  


// ---------PRIMER CAMPO DEL FORMULARIO----------------

//arrays para elementos
const ingresosExtrasArray = [];


function crearIngresoExtra(monto, trabajo, fechaCobro) {
  

this.montoExtra = monto;
       
this.trabajoRealizado = trabajo;
      
this.fechaCobro = fechaCobro;
  
}

// Obtén los nodos de los campos de entrada y el botón "Finalizar" por sus IDs
const montoExtraInput = document.getElementById('monto-extra');
const trabajoExtraInput = document.getElementById('trabajo-extra');
const fechaCobroExtraInput = document.getElementById('fecha-cobro-extra');
const botonIngresoExtra = document.getElementById('ingresar-ingreso-extra');
const resultadoDosDiv = document.getElementById('resultadoIngreso');

// Agrega un evento clic al botón "IngresoExtra"
botonIngresoExtra.addEventListener('click', function() {
    
    const montoExtra = montoExtraInput.value;
    const trabajoRealizado = trabajoExtraInput.value;
    const fechaCobro = fechaCobroExtraInput.value;

    
    console.log("Monto Extra:", montoExtra);
    console.log("Trabajo Realizado:", trabajoRealizado);
    console.log("Fecha de Cobro:", fechaCobro);

    // crearIngresoExtra() 
    
  const nuevoIngresoExtra = new crearIngresoExtra(montoExtra, trabajoRealizado, fechaCobro);

  ingresosExtrasArray.push(nuevoIngresoExtra);

  });








// ------- SEGUNDO CAMPO DEL FORMULARIO -----------

// Arrays para elementos
const egresoFijoArray = [];

function crearEgresosExtra(montosFijos, descripcionesFijo, fechasFijo) {
  

this.montosFijo = montosFijos;
       
this.descripcionFijo = descripcionesFijo;
      
this.fechaFijo = fechasFijo;
  
} 

// Obtén los nodos de los campos de entrada y el botón "Finalizar" por sus IDs
const montoFijoInput = document.getElementById('monto-fijo');
const descripcionFijoInput = document.getElementById('concepto-fijo');
const fechaFijoInput = document.getElementById('fecha-vencimiento-fijo');
const EgresoFijo = document.getElementById('ingresar-egreso-fijo')

// Agrega un evento clic al botón "Finalizar"
EgresoFijo.addEventListener('click', function() {
    
    const montoFijo = montoFijoInput.value;
    const descripcionFijo = descripcionFijoInput.value;
    const fechaFijo = fechaFijoInput.value;

    
    console.log("Monto Fijo:", montoFijo);
    console.log("Descripción de Egreso Fijo:", descripcionFijo);
    console.log("Fecha de Compra de Egreso Fijo:", fechaFijo);


});



// -----------------------TERCER CAMPO DEL FORMULARIO--------------------

// Array para elementos
const egresosVariablesArray = [];

function crearEgresosVariables(montosVariables, descripcionesVariables, fechasVariables){
  

    this.montoVariable = montosVariables;

    this.descripcionVariable = descripcionesVariables;

    this.fechaCompraVariable = fechasVariables;

  
}

// Obtén los nodos de los campos de entrada y el botón "Ingresar Egreso Variable" por sus IDs
const montoVariableInput = document.getElementById('monto-variable');
const descripcionVariableInput = document.getElementById('descripcion-variable');
const fechaVariableInput = document.getElementById('fecha-variable');
const botonIngresarEgresoVariable = document.getElementById('ingresar-egreso-variable');

// Agrega un evento clic al botón "Ingresar Egreso Variable"
botonIngresarEgresoVariable.addEventListener('click', function() {
    
    const montoVariable = montoVariableInput.value;
    const descripcionVariable = descripcionVariableInput.value;
    const fechaCompraVariable = fechaVariableInput.value;

    
    console.log("Monto Variable:", montoVariable);
    console.log("Descripción de Egreso Variable:", descripcionVariable);
    console.log("Fecha de Compra de Egreso Variable:", fechaCompraVariable);
});


// ----------------------------CUARTO CAMPO DEL FORMULARIO------------------------------

// Arrays de elementos

const ahorrosArrays = [];

function crearAhorros(montosDeAhorro, objetivosDeAhorro, fechasMetaAhorro){
 

    this.montoAhorro = montosDeAhorro;

    this.objetivoAhorro = objetivosDeAhorro;

    this.fechaMetaAhorro = fechasMetaAhorro;
  
}

// Obtén los nodos de los campos de entrada y el botón "Ingresar Ahorro" por sus IDs
const montoAhorroInput = document.getElementById('monto-ahorro');
const objetivoAhorroInput = document.getElementById('objetivo-ahorro');
const fechaMetaAhorroInput = document.getElementById('fecha-meta-ahorro');
const botonIngresarAhorro = document.getElementById('ingresar-ahorro');

// Agrega un evento clic al botón "Ingresar Ahorro"
botonIngresarAhorro.addEventListener('click', function() {
    
    const montoAhorro = montoAhorroInput.value;
    const objetivoAhorro = objetivoAhorroInput.value;
    const fechaMetaAhorro = fechaMetaAhorroInput.value;

    
    console.log("Monto de Ahorro:", montoAhorro);
    console.log("Objetivo de Ahorro:", objetivoAhorro);
    console.log("Fecha de Meta de Ahorro:", fechaMetaAhorro);
});


// ------------CREO FUNCION PARA RESTAR EL SALARIO DE CADA VALOR INGRESADO-------------------


function operacionMontoFinal() {

  let salarioInicial = parseFloat(document.getElementById('salario').value)
  let calcIngresoExtra = parseFloat(document.getElementById('monto-extra').value)
  let calcEgresoExtra = parseFloat(document.getElementById('monto-fijo').value)
  let caclEgresoVariable = parseFloat(document.getElementById('monto-variable').value)
  let calcAhorro = parseFloat(document.getElementById('monto-ahorro').value)

  let resultado = (salarioInicial + calcIngresoExtra) - ( + calcEgresoExtra + caclEgresoVariable + calcAhorro);
  
  
  let resultadoFinal = document.getElementById('resultadoFinal');

  // Actualiza el contenido del elemento con la información capturada
    resultadoFinal.textContent = `Su monto disponible es ${resultado}`;
    
    
  }
  
  
  document.getElementById('finalizar-btn').addEventListener('click', () => {
    operacionMontoFinal();
    console.log(operacionMontoFinal())
  
  })
  

// --------------CREO OBJETOS PARA CADA SECCION DEL FORMULARIO------------------

// Función constructora para crear objetos de ingresos
// function Ingreso(monto, empresa, fechaCobro) {
//   this.monto = monto;
//   this.empresa = empresa;
//   this.fechaCobro = fechaCobro;
// }

// // Función constructora para crear objetos de egresos
// function Egreso(monto, concepto, fechaVencimiento) {
//   this.monto = monto;
//   this.concepto = concepto;
//   this.fechaVencimiento = fechaVencimiento;
// }

// // Función constructora para crear objetos de ahorro
// function Ahorro(monto, objetivo, fechaMeta) {
//   this.monto = monto;
//   this.objetivo = objetivo;
//   this.fechaMeta = fechaMeta;
// }


// function mostrarResumen() {
//   console.log("Monto Disponible:", montoDisponible);

//   console.log("Resumen de Ingresos:", ingresos);
//   console.log("Resumen de Egresos Fijos:", egresosFijos);
//   console.log("Resumen de Egresos Variables:", egresosVariables);
//   console.log("Resumen de Ahorro:", ahorro);
// }

//invocamos el menu para navegar dentro de las distintas opciones

// function main() {
  //   let opcion;
  //   do {
    //     opcion = parseInt(prompt("Menú:\n1. Ingreso extra\n2. Egresos Fijos\n3. Egresos Variables\n4. Ahorro\n5. Finalizar"));
    //     switch (opcion) {
      //       case 1:
      //         ingresarIngresosExtra();
//         break;
      // case 2:
      //   ingresarEgresosFijos();
      //   break;
      // case 3:
      //   ingresarEgresosVariables();
      //   break;
      // case 4:
      //   ingresarAhorro();
      //   break;
      //   case 5:
      //     console.log("Finalizando el programa.");
      //     mostrarResumen();
      //     break;
    //   default:
    //     console.log("Opción no válida. Inténtelo de nuevo.");
    // }
    
    // creamos el bucle while y los condicionales necesarios en caso de que el usuario le quede saldo a favor, quede en 0 y si queda en negativo
    
//   } while (opcion !== 5 && montoDisponible > 0);

//   if (montoDisponible > 0) {
//     console.log("Has terminado con saldo a favor de $" + montoDisponible.toFixed(2));
//   } else if (montoDisponible < 0) {
//     console.log("Has terminado con un saldo en negativo de $" + Math.abs(montoDisponible).toFixed(2));
//   } else {
  //     console.log("Has gastado todo tu salario, tu saldo es $0.");
  //   }
  // }
  
  // main(); 
  
  
  
  // EMPIEZO A CAPTURAR EL DOM ----------------------------------------------------------------
  

// Función para mostrar el formulario después de calcular el monto disponible
  function mostrarFormulario() {
    document.getElementById('ingreso-mensual').style.display = 'none';
    document.getElementById('formulario').style.display = 'block';
  }

// Manejar el botón "Calcular Monto Disponible"
  document.getElementById('calcular-monto').addEventListener('click', () => {
    const montosDisponible = calcularMontoDisponible();
    
    mostrarFormulario(); // Mostrar el formulario después de calcular el monto
  });



// capturo el id salario del formulario y muestro en pantalla como en consola el valor del input ingresado en el formulario
  function calcularMontoDisponible() {
  let ingresoTotal = document.getElementById("salario")
    ingresoTotal = ingresoTotal.value


  }


  // ----------Funcion para el boton ACEPTAR--------------

// Obtén el nodo del botón "Aceptar" por su ID
  const botonAceptar = document.getElementById('calcular-monto');
  

  botonAceptar.addEventListener('click', function() {
    const salarioMensual = document.getElementById('salario').value;
    const nombreUsuario = document.getElementById('nombreUsuario').value;
    
  // Obtén el nodo del elemento donde deseas mostrar la información
    const resultadoDiv = document.getElementById('resultado');

  // Actualiza el contenido del elemento con la información capturada
    resultadoDiv.textContent = `Salario Mensual: ${salarioMensual}, Nombre del Usuario: ${nombreUsuario}`;
});





document.getElementById('calcular-monto').addEventListener('click', () => {
  
  calcularMontoDisponible(); // Mostrar el formulario después de calcular el monto
  
});

// document.getElementById('finalizar-btn').addEventListener('click', () => {
//    mostrarResumen();
// })

document.getElementById('monto-extra').addEventListener


// -------Incluyo libreria Luxon--------

let fechaDiv = document.getElementById("fechaDiv")
const DateTime = luxon.DateTime
setInterval(()=>{
let fechaAhora = DateTime.now()
  fechaDiv.innerHTML = `${fechaAhora.toLocaleString(DateTime.TIME_WITH_SECONDS)}`
},1000)


