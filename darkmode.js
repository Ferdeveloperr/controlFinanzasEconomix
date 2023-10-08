let btnToggle = document.getElementById("btnToggle")
console.log(btnToggle)


// APLICACION DE STORAGE PARA SETEAR CONFIGURACIONES

if(localStorage.getItem("ModoOscuro") == "true"){
    document.body.classList.toggle("darkMode")
    btnToggle.innerText = "Modo Claro"
}

btnToggle.addEventListener("click", () => {
    document.body.classList.toggle("darkMode")
    if(btnToggle.innerText == "Modo Oscuro"){
        btnToggle.innerText = "Modo Claro"
        localStorage.setItem("ModoOscuro", true )

    }else if(btnToggle.innerText == "Modo Claro"){
        btnToggle.innerText = "Modo Oscuro"
        localStorage.setItem("ModoOscuro", false )
    }
})