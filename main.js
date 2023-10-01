// // declaramos el monto disponible en 0 para que el usuario pueda ingresar su salario y lo utilizamos para que se sume o reste dependiendo la funcion

// let montoDisponible = 0;
// let ingresos = [];
// let egresosFijos = [];
// let egresosVariables = [];
// let ahorro = [];


// // Función para mostrar el formulario después de calcular el monto disponible
// function mostrarFormulario() {
//   document.getElementById('ingreso-mensual').style.display = 'none';
//   document.getElementById('formulario').style.display = 'block';
// }

// // Manejar el botón "Calcular Monto Disponible"
// document.getElementById('calcular-monto').addEventListener('click', () => {
//   const montoDisponible = calcularMontoDisponible();
//   console.log("Monto total:", montoDisponible);
//   mostrarFormulario(); // Mostrar el formulario después de calcular el monto
// });


// function calcularMontoDisponible() {
//     let ingresoTotal;
//     do{
//   ingresoTotal = parseFloat(prompt("Ingrese su salario mensual:"));
//     } while (isNaN(ingresoTotal) || ingresoTotal <= 0);
//     return ingresoTotal;  
  
// }

// // Pide el salario mensual una sola vez y asigna el valor a montoDisponible
// montoDisponible = calcularMontoDisponible();
// console.log("Monto total:", montoDisponible); 

// // Función constructora para crear objetos de ingresos
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


// function ingresarIngresosExtra() {
//     let montoExtra;
//     do {
//       montoExtra = parseFloat(prompt("Ingrese el monto de ingreso extra:"));
//     } while (isNaN(montoExtra) || montoExtra <= 0);

//     let trabajo;
//     do {
//       trabajo = prompt("Ingrese el nombre del trabajo realizado:");
//       if (!trabajo || !isNaN(trabajo)) {
//         alert("Los datos ingresados son incorrectos. Por favor, ingrese el nombre del trabajo.");
//       }
//     } while (!trabajo || !isNaN(trabajo));


//     let fechaCobro;
//     do {
//       fechaCobro = prompt("Ingrese la fecha de cobro, por ejemplo, dd/mm/aa:");
//       if (fechaCobro === null || fechaCobro.match(/^\d{1,2}[/-]\d{1,2}[/-]\d{4}$/)) {
//         break; // Si la entrada es válida, sale del bucle
//       } else {
//         alert("Lo siento, ingresa la fecha en formato numérico");
//       }
//     } while (true);
    
    
    

//   let ingreso = new Ingreso(montoExtra, trabajo, fechaCobro);
//   ingresos.push(ingreso); 

//   montoDisponible += montoExtra; // Sumar el monto ingresado al disponible

//   console.log("Ingreso registrado:");
//   console.log("Monto extra:", montoExtra);
//   console.log("Trabajo:", trabajo);
//   console.log("Fecha de Cobro:", fechaCobro);
//   console.log("Monto Disponible:", montoDisponible);
// }

// function ingresarEgresosFijos() {
//     let monto;
//     do {
//       monto = parseFloat(prompt("Ingrese el monto de egresos fijos:"));
//     } while (isNaN(monto) || monto <= 0); // Se asegura de que monto sea un número positivo
  
//     let concepto;
//     do {
//       concepto = prompt("Ingrese el concepto de egresos fijos, por ejemplo, alquiler o servicios:");
//       if (concepto === null || !isNaN(concepto)) {
//         alert("Por favor, escribe los conceptos de tus egresos.");
//       } else {
//         break; 
//       }
//     } while (true);
    
    
//     let fechaVencimiento;
// do {
//   fechaVencimiento = prompt("Ingrese la fecha de vencimiento mas cercana del egreso fijo que abonara:");
  
//   if (!fechaVencimiento) {
//     alert("Lo siento, el campo de fecha no puede estar vacío.");
//   } else if (!/^\d{1,2}[/-]\d{1,2}[/-]\d{4}$/.test(fechaVencimiento)) {
//     alert("Lo siento, ingresa la fecha en formato numérico (dd/mm/aa).");
//   } else {
//     break;
//   }
// } while (true);




//   let egreso = new Egreso(monto, concepto, fechaVencimiento);
//   egresosFijos.push(egreso);

//   montoDisponible -= monto; // Restar el monto ingresado al disponible

//   console.log("Egreso fijo registrado:");
//   console.log("Monto:", monto);
//   console.log("Concepto:", concepto);
//   console.log("Fecha de Vencimiento:", fechaVencimiento);
//   console.log("Monto Disponible:", montoDisponible);
// }

// function ingresarEgresosVariables() {
//     let monto;
//   do {
//     monto = parseFloat(prompt("Ingrese el monto de egresos variables:"));
//   } while (isNaN(monto) || monto <= 0); // Se asegura de que monto sea un número positivo

//   let descripción;
//   do {
//     descripción = prompt("Ingrese la descripción de egresos variables:");
//     if (descripción === null) {
//       alert("Has cancelado la entrada. Por favor, ingrese una descripción válida.");
//     } else if (descripción === "") {
//       alert("La descripción es un campo requerido. Por favor, ingrésela.");
//     } else if (!isNaN(descripción)) {
//       alert("Por favor, ingrese una descripción válida (texto).");
//     }
//   } while (descripción === null || descripción === "" || !isNaN(descripción));
  
  

//   let fecha = prompt("Ingrese la fecha de compra de su gasto variable mas alto:");
//   if (!fecha) {
//     console.log("Fecha es un campo requerido.");
//     return;
//   }

//   let egreso = new Egreso(monto, descripción, fecha);
//   egresosVariables.push(egreso); // Agregar el egreso al array de egresos variables

//   montoDisponible -= monto;

//   console.log("Egreso variable registrado:");
//   console.log("Monto:", monto);
//   console.log("Descripción:", descripción);
//   console.log("Fecha:", fecha);
//   console.log("Monto Disponible:", montoDisponible);
// }

// function ingresarAhorro() {
//     let monto;
//     do {
//       monto = parseFloat(prompt("Ingrese el monto de ahorro:"));
//     } while (isNaN(monto) || monto <= 0); // Se asegura de que monto sea un número positivo
  
//     let objetivo;
//     do {
//       objetivo = prompt("Ingrese el objetivo de ahorro:");
//       if (objetivo === null) {
//         alert("Has cancelado la entrada. Por favor, ingrese un objetivo válido.");
//       } else if (objetivo === "") {
//         alert("El objetivo es un campo requerido. Por favor, ingréselo.");
//       } else if (!isNaN(objetivo)) {
//         alert("Por favor, ingrese un objetivo válido (texto).");
//       }
//     } while (objetivo === null || objetivo === "" || !isNaN(objetivo));
    
//     // Continúa con el objetivo válido.
    
  
//     let fechaMeta = prompt("Ingrese la fecha de meta de ahorro:");
//     if (!fechaMeta) {
//       console.log("Fecha de Meta es un campo requerido.");
//       return;
//     }

//   let ahorroObj = new Ahorro(monto, objetivo, fechaMeta);
//   ahorro.push(ahorroObj); 

//   montoDisponible -= monto;

//   console.log("Ahorro registrado:");
//   console.log("Monto:", monto);
//   console.log("Objetivo:", objetivo);
//   console.log("Fecha de Meta:", fechaMeta);
//   console.log("Monto Disponible:", montoDisponible);
// }

// //mostramos un resumen final de cada instancia

// function mostrarResumen() {
//   console.log("Monto Disponible:", montoDisponible);
//   console.log("Resumen de Ingresos:", ingresos);
//   console.log("Resumen de Egresos Fijos:", egresosFijos);
//   console.log("Resumen de Egresos Variables:", egresosVariables);
//   console.log("Resumen de Ahorro:", ahorro);
// }

// //invocamos el menu para navegar dentro de las distintas opciones

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

// Declaramos el monto disponible en 0 para que el usuario pueda ingresar su salario y lo utilizamos para que se sume o reste dependiendo de la función

// ---------------------------------------------------------------

// let montoDisponible = 0;
// let ingresos = [];
// let egresosFijos = [];
// let egresosVariables = [];
// let ahorro = [];

// // Función para mostrar el formulario después de calcular el monto disponible
// function mostrarFormulario() {
//   document.getElementById('ingreso-mensual').style.display = 'none';
//   document.getElementById('formulario').style.display = 'block';
// }

// // Manejar el botón "Calcular Monto Disponible"
// document.getElementById('calcular-monto').addEventListener('click', () => {
//   montoDisponible = calcularMontoDisponible();
//   mostrarFormulario(); // Mostrar el formulario después de calcular el monto
//   generarFormulario(); // Generar dinámicamente el formulario
// });

// function calcularMontoDisponible() {
//   let ingresoTotal = parseFloat(document.getElementById('salario').value);
//   if (isNaN(ingresoTotal) || ingresoTotal <= 0) {
//     alert("Por favor, ingrese un salario mensual válido.");
//     return 0;
//   }
//   return ingresoTotal;
// }

// function generarFormulario() {
//   const form = document.getElementById('finanzas-form');
//   // Eliminar cualquier contenido previo del formulario
//   form.innerHTML = '';

//   // Crear elementos para el formulario (por ejemplo, ingresos, egresos, ahorro)
//   // Puedes personalizar esto según tus necesidades
  
//   // Campo para ingreso extra
//   const ingresoExtraFieldset = document.createElement('fieldset');
//   ingresoExtraFieldset.innerHTML = `
//     <legend>Ingreso Extra</legend>
//     <input type="number" placeholder="Monto de ingreso extra">
//     <input type="text" placeholder="Trabajo realizado">
//     <input type="date" placeholder="Fecha de cobro">
//     <button class="agregar-ingreso-extra">Agregar Ingreso Extra</button>
//   `;
//   form.appendChild(ingresoExtraFieldset);

//   // Campo para egresos fijos
//   const egresosFijosFieldset = document.createElement('fieldset');
//   egresosFijosFieldset.innerHTML = `
//     <legend>Egresos Fijos</legend>
//     <input type="number" placeholder="Monto de egresos fijos">
//     <input type="text" placeholder="Concepto">
//     <input type="date" placeholder="Fecha de vencimiento">
//     <button class="agregar-egreso-fijo">Agregar Egreso Fijo</button>
//   `;
//   form.appendChild(egresosFijosFieldset);

//   // Campo para egresos variables
//   const egresosVariablesFieldset = document.createElement('fieldset');
//   egresosVariablesFieldset.innerHTML = `
//     <legend>Egresos Variables</legend>
//     <input type="number" placeholder="Monto de egresos variables">
//     <input type="text" placeholder="Descripción">
//     <input type="date" placeholder="Fecha de compra">
//     <button class="agregar-egreso-variable">Agregar Egreso Variable</button>
//   `;
//   form.appendChild(egresosVariablesFieldset);

//   // Campo para ahorro
//   const ahorroFieldset = document.createElement('fieldset');
//   ahorroFieldset.innerHTML = `
//     <legend>Ahorro</legend>
//     <input type="number" placeholder="Monto de ahorro">
//     <input type="text" placeholder="Objetivo de ahorro">
//     <input type="date" placeholder="Fecha de meta">
//     <button class="agregar-ahorro">Agregar Ahorro</button>
//   `;
//   form.appendChild(ahorroFieldset);

//   // Agregar eventos para agregar ingresos, egresos, ahorro, etc.
//   ingresoExtraFieldset.querySelector('.agregar-ingreso-extra').addEventListener('click', (e) => {
//     e.preventDefault();
//     agregarIngresoExtra();
//   });

//   egresosFijosFieldset.querySelector('.agregar-egreso-fijo').addEventListener('click', (e) => {
//     e.preventDefault();
//     agregarEgresoFijo();
//   });

//   egresosVariablesFieldset.querySelector('.agregar-egreso-variable').addEventListener('click', (e) => {
//     e.preventDefault();
//     agregarEgresoVariable();
//   });

//   ahorroFieldset.querySelector('.agregar-ahorro').addEventListener('click', (e) => {
//     e.preventDefault();
//     agregarAhorro();
//   });
// }

// // Función para agregar ingresos extra
// function agregarIngresoExtra() {
//   // Obtener los valores del campo de ingreso extra
//   const montoExtra = parseFloat(document.querySelector('#finanzas-form fieldset:nth-child(1) input[type="number"]').value);
//   const trabajo = document.querySelector('#finanzas-form fieldset:nth-child(1) input[type="text"]').value;
//   const fechaCobro = document.querySelector('#finanzas-form fieldset:nth-child(1) input[type="date"]').value;

//   // Validar que los campos no estén vacíos y el monto sea válido
//   if (!trabajo || isNaN(montoExtra) || montoExtra <= 0 || !fechaCobro) {
//     alert("Por favor, complete todos los campos de ingreso extra correctamente.");
//     return;
//   }

//   // Crear un objeto de ingreso y agregarlo al arreglo de ingresos
//   const ingreso = { monto: montoExtra, trabajo, fechaCobro };
//   ingresos.push(ingreso);

//   // Actualizar el monto disponible
//   montoDisponible += montoExtra;

//   // Limpiar los campos del formulario de ingreso extra
//   document.querySelector('#finanzas-form fieldset:nth-child(1) input[type="number"]').value = '';
//   document.querySelector('#finanzas-form fieldset:nth-child(1) input[type="text"]').value = '';
//   document.querySelector('#finanzas-form fieldset:nth-child(1) input[type="date"]').value = '';
// }

// // Función para agregar egresos fijos
// function agregarEgresoFijo() {
//   // Obtener los valores del campo de egresos fijos
//   const monto = parseFloat(document.querySelector('#finanzas-form fieldset:nth-child(2) input[type="number"]').value);
//   const concepto = document.querySelector('#finanzas-form fieldset:nth-child(2) input[type="text"]').value;
//   const fechaVencimiento = document.querySelector('#finanzas-form fieldset:nth-child(2) input[type="date"]').value;

//   // Validar que los campos no estén vacíos y el monto sea válido
//   if (!concepto || isNaN(monto) || monto <= 0 || !fechaVencimiento) {
//     alert("Por favor, complete todos los campos de egresos fijos correctamente.");
//     return




let montoDisponible = 0;
let ingresos = [];
let egresosFijos = [];
let egresosVariables = [];
let ahorro = [];

function mostrarFormulario() {
    document.getElementById('ingreso-mensual').style.display = 'none';
    document.getElementById('formulario').style.display = 'block';
    document.getElementById('finalizar').style.display = 'block';
}

document.getElementById('calcular-monto').addEventListener('click', () => {
    montoDisponible = calcularMontoDisponible();
    mostrarFormulario();
    generarFormulario();
});

document.getElementById('finalizar').addEventListener('click', () => {
    // Almacenar datos en el Storage (localStorage)
    const datos = {
        montoDisponible,
        ingresos,
        egresosFijos,
        egresosVariables,
        ahorro,
    };
    localStorage.setItem('datosFinanzas', JSON.stringify(datos));
    alert("Datos almacenados con éxito en el Storage.");
});

function calcularMontoDisponible() {
    const salario = parseFloat(document.getElementById('salario').value);
    if (isNaN(salario) || salario <= 0) {
        alert("Por favor, ingrese un salario mensual válido.");
        return 0;
    }
    return salario;
}

function generarFormulario() {
  const form = document.getElementById('finanzas-form');
  form.innerHTML = ''; // Limpiar el formulario antes de agregar campos dinámicos

  // Crear campos de ingresos
  const ingresoFieldset = document.createElement('fieldset');
  ingresoFieldset.innerHTML = `
      <legend>Ingresos</legend>
      <input type="number" placeholder="Monto de ingreso" id="montoIngreso">
      <input type="text" placeholder="Empresa" id="empresaIngreso">
      <input type="date" id="fechaCobro">
      <button class="agregar-ingreso">Agregar Ingreso</button>
  `;
  form.appendChild(ingresoFieldset);

  // Agregar evento para agregar ingresos
  ingresoFieldset.querySelector('.agregar-ingreso').addEventListener('click', (e) => {
      e.preventDefault();
      agregarIngreso();
  });

  // Crear campos de egresos fijos
  const egresosFijosFieldset = document.createElement('fieldset');
  egresosFijosFieldset.innerHTML = `
      <legend>Egresos Fijos</legend>
      <input type="number" placeholder="Monto de egreso fijo" id="montoEgresoFijo">
      <input type="text" placeholder="Concepto" id="conceptoEgresoFijo">
      <input type="date" id="fechaVencimientoEgresoFijo">
      <button class="agregar-egreso-fijo">Agregar Egreso Fijo</button>
  `;
  form.appendChild(egresosFijosFieldset);

  // Agregar evento para agregar egresos fijos
  egresosFijosFieldset.querySelector('.agregar-egreso-fijo').addEventListener('click', (e) => {
      e.preventDefault();
      agregarEgresoFijo();
  });

  // Crear campos de egresos variables
  const egresosVariablesFieldset = document.createElement('fieldset');
  egresosVariablesFieldset.innerHTML = `
      <legend>Egresos Variables</legend>
      <input type="number" placeholder="Monto de egreso variable" id="montoEgresoVariable">
      <input type="text" placeholder="Descripción" id="descripcionEgresoVariable">
      <input type="date" id="fechaEgresoVariable">
      <button class="agregar-egreso-variable">Agregar Egreso Variable</button>
  `;
  form.appendChild(egresosVariablesFieldset);

  // Agregar evento para agregar egresos variables
  egresosVariablesFieldset.querySelector('.agregar-egreso-variable').addEventListener('click', (e) => {
      e.preventDefault();
      agregarEgresoVariable();
  });

  // Crear campos de ahorro
  const ahorroFieldset = document.createElement('fieldset');
  ahorroFieldset.innerHTML = `
      <legend>Ahorro</legend>
      <input type="number" placeholder="Monto de ahorro" id="montoAhorro">
      <input type="text" placeholder="Objetivo de ahorro" id="objetivoAhorro">
      <input type="date" id="fechaMetaAhorro">
      <button class="agregar-ahorro">Agregar Ahorro</button>
  `;
  form.appendChild(ahorroFieldset);

  // Agregar evento para agregar ahorro
  ahorroFieldset.querySelector('.agregar-ahorro').addEventListener('click', (e) => {
      e.preventDefault();
      agregarAhorro();
  });
}


    // Puedes agregar campos de egresos, ahorro, etc., de manera similar


function agregarIngreso() {
    const montoIngreso = parseFloat(document.getElementById('montoIngreso').value);
    const empresa = document.getElementById('empresaIngreso').value;
    const fechaCobro = document.getElementById('fechaCobro').value;

    if (!empresa || isNaN(montoIngreso) || montoIngreso <= 0 || !fechaCobro) {
        alert("Por favor, complete todos los campos de ingreso correctamente.");
        return;
    }

    const ingreso = { monto: montoIngreso, empresa, fechaCobro };
    ingresos.push(ingreso);

    // Actualizar el monto disponible
    montoDisponible += montoIngreso;

    // Limpiar los campos del formulario de ingreso
    document.getElementById('montoIngreso').value = '';
    document.getElementById('empresaIngreso').value = '';
    document.getElementById('fechaCobro').value = '';
}

// Obtener el botón de "Modo Oscuro" por su ID
const darkModeButton = document.getElementById('dark-mode-toggle');

// Agregar un evento de clic al botón
darkModeButton.addEventListener('click', () => {
    // Obtener el elemento <body> para cambiar su estilo
    const body = document.body;

    // Verificar si el cuerpo ya tiene la clase "dark-mode"
    if (body.classList.contains('dark-mode')) {
        // Si ya tiene la clase, quitarla para volver al modo claro
        body.classList.remove('dark-mode');
    } else {
        // Si no tiene la clase, agregarla para activar el modo oscuro
        body.classList.add('dark-mode');
    }
});


// Comprobar si hay datos almacenados en el Storage al cargar la página
window.addEventListener('load', () => {
    const datosGuardados = localStorage.getItem('datosFinanzas');
    if (datosGuardados) {
        const datos = JSON.parse(datosGuardados);
        montoDisponible = datos.montoDisponible;
        ingresos = datos.ingresos;
        egresosFijos = datos.egresosFijos;
        egresosVariables = datos.egresosVariables;
        ahorro = datos.ahorro;
        mostrarFormulario();
        generarFormulario();
    }
});


