const obtenerDatos = document.getElementById('obtenerDatos');
const resultado = document.getElementById('resultadoApi');

obtenerDatos.addEventListener('click', () => {
    fetch('https://api.bluelytics.com.ar/v2/latest')
        .then(response => response.json())
        .then(data => {
            mostrarResultado(data);
        })
        .catch(error => {
            console.error('Hubo un error al obtener los datos:', error);
            mostrarError();
        });
});

function mostrarResultado(data) {
    const dolarOficial = data.oficial;
    const dolarBlue = data.blue;
    const euroOficial = data.oficial_euro;
    const euroBlue = data.blue_euro;
    const lastUpdate = data.last_update;

    resultado.innerHTML = `
        
        <div>
            <h3>Dólar Oficial</h3>
            <p>Compra: ${dolarOficial.value_buy}</p>
            <p>Venta: ${dolarOficial.value_sell}</p>
            <p>Promedio: ${dolarOficial.value_avg}</p>
        </div>
        <div>
            <h3>Dólar Blue</h3>
            <p>Compra: ${dolarBlue.value_buy}</p>
            <p>Venta: ${dolarBlue.value_sell}</p>
            <p>Promedio: ${dolarBlue.value_avg}</p>
        </div>
        <div>
            <h3>Euro Oficial</h3>
            <p>Compra: ${euroOficial.value_buy}</p>
            <p>Venta: ${euroOficial.value_sell}</p>
            <p>Promedio: ${euroOficial.value_avg}</p>
        </div>
        <div>
            <h3>Euro Blue</h3>
            <p>Compra: ${euroBlue.value_buy}</p>
            <p>Venta: ${euroBlue.value_sell}</p>
            <p>Promedio: ${euroBlue.value_avg}</p>
        </div>
        <p>Última actualización: ${new Date(lastUpdate).toLocaleString()}</p>
    `;
}


function mostrarError() {
    resultado.innerHTML = '<p>Ocurrió un error al obtener los datos de la API.</p>';
}
