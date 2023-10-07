// declaramos el monto disponible en 0 para que el usuario pueda ingresar su salario y lo utilizamos para que se sume o reste dependiendo la funcion

let montoDisponible = 0;
let ingresos = [];
let egresosFijos = [];
let egresosVariables = [];
let ahorro = [];


// Función para mostrar el formulario después de calcular el monto disponible

function mostrarFormulario() {
  document.getElementById('ingreso-mensual').style.display = 'none';
  document.getElementById('formulario').style.display = 'block';
}

// Manejar el botón "Calcular Monto Disponible"
document.getElementById('calcular-monto').addEventListener('click', () => {
  const montoDisponible = calcularMontoDisponible();
  
  mostrarFormulario(); // Mostrar el formulario después de calcular el monto
});


// capturo el id salario del formulario y muestro en pantalla como en consola el valor del input ingresado en el formulario

function calcularMontoDisponible() {
    let ingresoTotal = document.getElementById("salario")
    console.log(ingresoTotal.value)
 
}

// Pide el salario mensual una sola vez y asigna el valor a montoDisponible
montoDisponible = calcularMontoDisponible();


// Función constructora para crear objetos de ingresos
function Ingreso(monto, empresa, fechaCobro) {
  this.monto = monto;
  this.empresa = empresa;
  this.fechaCobro = fechaCobro;
}

// Función constructora para crear objetos de egresos
function Egreso(monto, concepto, fechaVencimiento) {
  this.monto = monto;
  this.concepto = concepto;
  this.fechaVencimiento = fechaVencimiento;
}

// Función constructora para crear objetos de ahorro
function Ahorro(monto, objetivo, fechaMeta) {
  this.monto = monto;
  this.objetivo = objetivo;
  this.fechaMeta = fechaMeta;
}


function ingresarIngresosExtra() {
    let montoExtra;
    do {
      montoExtra = parseFloat(prompt("Ingrese el monto de ingreso extra:"));
    } while (isNaN(montoExtra) || montoExtra <= 0);

    let trabajo;
    do {
      trabajo = prompt("Ingrese el nombre del trabajo realizado:");
      if (!trabajo || !isNaN(trabajo)) {
        alert("Los datos ingresados son incorrectos. Por favor, ingrese el nombre del trabajo.");
      }
    } while (!trabajo || !isNaN(trabajo));


    let fechaCobro;
    do {
      fechaCobro = prompt("Ingrese la fecha de cobro, por ejemplo, dd/mm/aa:");
      if (fechaCobro === null || fechaCobro.match(/^\d{1,2}[/-]\d{1,2}[/-]\d{4}$/)) {
        break; // Si la entrada es válida, sale del bucle
      } else {
        alert("Lo siento, ingresa la fecha en formato numérico");
      }
    } while (true);
    
    
    

  let ingreso = new Ingreso(montoExtra, trabajo, fechaCobro);
  ingresos.push(ingreso); 

  montoDisponible += montoExtra; // Sumar el monto ingresado al disponible

  console.log("Ingreso registrado:");
  console.log("Monto extra:", montoExtra);
  console.log("Trabajo:", trabajo);
  console.log("Fecha de Cobro:", fechaCobro);
  console.log("Monto Disponible:", montoDisponible);
}

function ingresarEgresosFijos() {
    let monto;
    do {
      monto = parseFloat(prompt("Ingrese el monto de egresos fijos:"));
    } while (isNaN(monto) || monto <= 0); // Se asegura de que monto sea un número positivo
  
    let concepto;
    do {
      concepto = prompt("Ingrese el concepto de egresos fijos, por ejemplo, alquiler o servicios:");
      if (concepto === null || !isNaN(concepto)) {
        alert("Por favor, escribe los conceptos de tus egresos.");
      } else {
        break; 
      }
    } while (true);
    
    
    let fechaVencimiento;
do {
  fechaVencimiento = prompt("Ingrese la fecha de vencimiento mas cercana del egreso fijo que abonara:");
  
  if (!fechaVencimiento) {
    alert("Lo siento, el campo de fecha no puede estar vacío.");
  } else if (!/^\d{1,2}[/-]\d{1,2}[/-]\d{4}$/.test(fechaVencimiento)) {
    alert("Lo siento, ingresa la fecha en formato numérico (dd/mm/aa).");
  } else {
    break;
  }
} while (true);




  let egreso = new Egreso(monto, concepto, fechaVencimiento);
  egresosFijos.push(egreso);

  montoDisponible -= monto; // Restar el monto ingresado al disponible

  console.log("Egreso fijo registrado:");
  console.log("Monto:", monto);
  console.log("Concepto:", concepto);
  console.log("Fecha de Vencimiento:", fechaVencimiento);
  console.log("Monto Disponible:", montoDisponible);
}

function ingresarEgresosVariables() {
    let monto;
  do {
    monto = parseFloat(prompt("Ingrese el monto de egresos variables:"));
  } while (isNaN(monto) || monto <= 0); // Se asegura de que monto sea un número positivo

  let descripción;
  do {
    descripción = prompt("Ingrese la descripción de egresos variables:");
    if (descripción === null) {
      alert("Has cancelado la entrada. Por favor, ingrese una descripción válida.");
    } else if (descripción === "") {
      alert("La descripción es un campo requerido. Por favor, ingrésela.");
    } else if (!isNaN(descripción)) {
      alert("Por favor, ingrese una descripción válida (texto).");
    }
  } while (descripción === null || descripción === "" || !isNaN(descripción));
  
  

  let fecha = prompt("Ingrese la fecha de compra de su gasto variable mas alto:");
  if (!fecha) {
    console.log("Fecha es un campo requerido.");
    return;
  }

  let egreso = new Egreso(monto, descripción, fecha);
  egresosVariables.push(egreso); // Agregar el egreso al array de egresos variables

  montoDisponible -= monto;

  console.log("Egreso variable registrado:");
  console.log("Monto:", monto);
  console.log("Descripción:", descripción);
  console.log("Fecha:", fecha);
  console.log("Monto Disponible:", montoDisponible);
}

function ingresarAhorro() {
    let monto;
    do {
      monto = parseFloat(prompt("Ingrese el monto de ahorro:"));
    } while (isNaN(monto) || monto <= 0); // Se asegura de que monto sea un número positivo
  
    let objetivo;
    do {
      objetivo = prompt("Ingrese el objetivo de ahorro:");
      if (objetivo === null) {
        alert("Has cancelado la entrada. Por favor, ingrese un objetivo válido.");
      } else if (objetivo === "") {
        alert("El objetivo es un campo requerido. Por favor, ingréselo.");
      } else if (!isNaN(objetivo)) {
        alert("Por favor, ingrese un objetivo válido (texto).");
      }
    } while (objetivo === null || objetivo === "" || !isNaN(objetivo));
    
    // Continúa con el objetivo válido.
    
  
    let fechaMeta = prompt("Ingrese la fecha de meta de ahorro:");
    if (!fechaMeta) {
      console.log("Fecha de Meta es un campo requerido.");
      return;
    }

  let ahorroObj = new Ahorro(monto, objetivo, fechaMeta);
  ahorro.push(ahorroObj); 

  montoDisponible -= monto;

  console.log("Ahorro registrado:");
  console.log("Monto:", monto);
  console.log("Objetivo:", objetivo);
  console.log("Fecha de Meta:", fechaMeta);
  console.log("Monto Disponible:", montoDisponible);
}

//mostramos un resumen final de cada instancia

function mostrarResumen() {
  console.log("Monto Disponible:", montoDisponible);
  console.log("Resumen de Ingresos:", ingresos);
  console.log("Resumen de Egresos Fijos:", egresosFijos);
  console.log("Resumen de Egresos Variables:", egresosVariables);
  console.log("Resumen de Ahorro:", ahorro);
}

//invocamos el menu para navegar dentro de las distintas opciones

// function main() {
//   let opcion;
//   do {
//     opcion = parseInt(prompt("Menú:\n1. Ingreso extra\n2. Egresos Fijos\n3. Egresos Variables\n4. Ahorro\n5. Finalizar"));
//     switch (opcion) {
//       case 1:
//         ingresarIngresosExtra();
//         break;
//       case 2:
//         ingresarEgresosFijos();
//         break;
//       case 3:
//         ingresarEgresosVariables();
//         break;
//       case 4:
//         ingresarAhorro();
//         break;
//       case 5:
//         console.log("Finalizando el programa.");
//         mostrarResumen();
//         break;
//       default:
//         console.log("Opción no válida. Inténtelo de nuevo.");
//     }

//     // creamos el bucle while y los condicionales necesarios en caso de que el usuario le quede saldo a favor, quede en 0 y si queda en negativo

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

// Obtén el nodo del botón "Aceptar" por su ID
const botonAceptar = document.getElementById('calcular-monto');

// Agrega un evento click al botón "Aceptar"
botonAceptar.addEventListener('click', function() {
    // Captura los valores de los campos de texto
    const salarioMensual = document.getElementById('salario').value;
    const nombreUsuario = document.getElementById('nombreUsuario').value;

    // Obtén el nodo del elemento donde deseas mostrar la información
    const resultadoDiv = document.getElementById('resultado');

    // Actualiza el contenido del elemento con la información capturada
    resultadoDiv.textContent = `Salario Mensual: ${salarioMensual}, Nombre del Usuario: ${nombreUsuario}`;
});

