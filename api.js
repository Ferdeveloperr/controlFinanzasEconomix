const obtenerDatos = document.getElementById('obtenerDatos');
const resultado = document.getElementById('resultado');

obtenerDatos.addEventListener('click', () => {
    fetch('https://api.bluelytics.com.ar/v2/latest')
        .then(response => response.json())
        .then(data => {
            // Procesa los datos de la API aquí
            mostrarResultado(data);
        })
        .catch(error => {
            console.error('Hubo un error al obtener los datos:', error);
            mostrarError();
        });
});

function mostrarResultado(data) {
    resultado.innerHTML = `
        <h2>Datos de la API</h2>
        <pre>${JSON.stringify(data, null, 2)}</pre>`;
}

function mostrarError() {
    resultado.innerHTML = '<p>Ocurrió un error al obtener los datos de la API.</p>';
}