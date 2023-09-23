// declaramos el monto disponible en 0 para que el usuario pueda ingresar su salario y lo utilizamos para que se sume o reste dependiendo la funcion

let montoDisponible = 0;
let ingresos = [];
let egresosFijos = [];
let egresosVariables = [];
let ahorro = [];


function calcularMontoDisponible() {
  let ingresoTotal = parseFloat(prompt("Ingrese su salario mensual:"));
  return ingresoTotal;

}

// Pide el salario mensual una sola vez y asigna el valor a montoDisponible
montoDisponible = calcularMontoDisponible();
console.log("Monto total:", montoDisponible); 

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
  let montoExtra = parseFloat(prompt("Ingrese el monto de ingreso extra:"));
  let trabajo = prompt("Ingrese el nombre del trabajo realizado:");
  let fechaCobro = prompt("Ingrese la fecha de cobro:");

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
  let monto = parseFloat(prompt("Ingrese el monto de egresos fijos:"));
  let concepto = prompt("Ingrese el concepto de egresos fijos:");
  let fechaVencimiento = prompt("Ingrese la fecha de vencimiento:");

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
  let monto = parseFloat(prompt("Ingrese el monto de egresos variables:"));
  let descripción = prompt("Ingrese la descripción de egresos variables:");
  let fecha = prompt("Ingrese la fecha de egresos variables:");

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
  let monto = parseFloat(prompt("Ingrese el monto de ahorro:"));
  let objetivo = prompt("Ingrese el objetivo de ahorro:");
  let fechaMeta = prompt("Ingrese la fecha de meta de ahorro:");

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

function main() {
  let opcion;
  do {
    opcion = parseInt(prompt("Menú:\n1. Ingreso extra\n2. Egresos Fijos\n3. Egresos Variables\n4. Ahorro\n5. Finalizar"));
    switch (opcion) {
      case 1:
        ingresarIngresosExtra();
        break;
      case 2:
        ingresarEgresosFijos();
        break;
      case 3:
        ingresarEgresosVariables();
        break;
      case 4:
        ingresarAhorro();
        break;
      case 5:
        console.log("Finalizando el programa.");
        mostrarResumen();
        break;
      default:
        console.log("Opción no válida. Inténtelo de nuevo.");
    }

    // creamos el bucle while y los condicionales necesarios en caso de que el usuario le quede saldo a favor, quede en 0 y si queda en negativo

  } while (opcion !== 5 && montoDisponible > 0);

  if (montoDisponible > 0) {
    console.log("Has terminado con saldo a favor de $" + montoDisponible.toFixed(2));
  } else if (montoDisponible < 0) {
    console.log("Has terminado con un saldo en negativo de $" + Math.abs(montoDisponible).toFixed(2));
  } else {
    console.log("Has gastado todo tu salario, tu saldo es $0.");
  }
}

main();
