let montoDisponible = 0;
let ingresos = [];
let egresosFijos = [];
let egresosVariables = [];
let ahorro = [];
let saldoFavor = [];

function calcularMontoDisponible() {
  let ingresoTotal = parseFloat(prompt("Ingrese su salario mensual:"));
  return ingresoTotal;
}

// Pide el salario mensual una sola vez y asigna el valor a montoDisponible
montoDisponible = calcularMontoDisponible();

function ingresarIngresos() {
  let monto = parseFloat(prompt("Ingrese el monto de ingresos:"));
  let empresa = prompt("Ingrese el nombre de la empresa:");
  let fechaCobro = prompt("Ingrese la fecha de cobro:");
  
  montoDisponible -= monto; // Restar el monto ingresado al disponible

  console.log("Ingreso registrado:");
  console.log("Monto:", monto);
  console.log("Empresa:", empresa);
  console.log("Fecha de Cobro:", fechaCobro);
  console.log("Monto Disponible:", montoDisponible);
}

function ingresarEgresosFijos() {
  let monto = parseFloat(prompt("Ingrese el monto de egresos fijos:"));
  let concepto = prompt("Ingrese el concepto de egresos fijos:");
  let fechaVencimiento = prompt("Ingrese la fecha de vencimiento:");
  
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
  
  montoDisponible -= monto; // Restar el monto ingresado al disponible

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
  
  montoDisponible -= monto; // Restar el monto ingresado al disponible

  console.log("Ahorro registrado:");
  console.log("Monto:", monto);
  console.log("Objetivo:", objetivo);
  console.log("Fecha de Meta:", fechaMeta);
  console.log("Monto Disponible:", montoDisponible);
}

function ingresarSaldoFavor(){
    let montoFavor = parseFloat(prompt("Ingrese el saldo que desea tener a favor"))

}

function mostrarResumen() {
  console.log("Monto Disponible:", montoDisponible);
  console.log("Resumen de Ingresos:", ingresos);
  console.log("Resumen de Egresos Fijos:", egresosFijos);
  console.log("Resumen de Egresos Variables:", egresosVariables);
  console.log("Resumen de Ahorro:", ahorro);
}

function main() {
  let opcion;
  do {
    opcion = parseInt(prompt("Menú:\n1. Ingresos\n2. Egresos Fijos\n3. Egresos Variables\n4. Ahorro\n5. Finalizar"));
    switch (opcion) {
      case 1:
        ingresarIngresos();
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
  } while (opcion !== 5 && montoDisponible > 0);

  if (montoDisponible > 0) {
    console.log("Has terminado con saldo a favor de $" + montoDisponible.toFixed(2));
  } else if (montoDisponible < 0) {
    console.log("Has terminado con un saldo en negativo de $" + Math.abs(montoDisponible).toFixed(2));
  } else {
    console.log("Has gastado todo tu salario, tu saldo es $0.");
  }

  // crear 2 else if, uno por si queda saldo a favor y otro por si queda saldo negativo 
}

main();
