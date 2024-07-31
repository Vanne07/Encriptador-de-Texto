document.addEventListener("DOMContentLoaded", 
    function() {
    let textarea = document.getElementById("Ingrese_texto");

    textarea.addEventListener("focus", 
        function() {
            if (textarea.value === "Ingrese el texto aquí") {
                textarea.value = "";
            }
        });

    textarea.addEventListener("blur", 
        function() {
            if (textarea.value === "") {
            textarea.value = "Ingrese el texto aquí";
            }
        });
});


function encriptar(){
    let textarea = document.getElementById("Ingrese_texto");
    let valor = textarea.value;
    let contenedorSigno = document.querySelector(".contenedor_signo");
    let textoSigno = contenedorSigno.querySelector(".texto_signo");
    let regex = /^[a-z0-9]+$/;

    textarea.addEventListener("input", function() {
        const valor = textarea.value;
        if (valor === "") {
            contenedorSigno.style.color = "black";
            textoSigno.textContent = "Solo letras minúsculas y sin acentos";
        }
      });
  
    if (!regex.test(valor)) {
        contenedorSigno.style.color = "red";
        textoSigno.textContent = "Error: solo se permiten letras minúsculas y sin acentos";
    } else {
        
        let textoEncriptado = valor.replace(/e/g, "enter");
        textoEncriptado = textoEncriptado.replace(/i/g, "imes");
        textoEncriptado = textoEncriptado.replace(/a/g, "ai");
        textoEncriptado = textoEncriptado.replace(/o/g, "ober");
        textoEncriptado = textoEncriptado.replace(/u/g, "ufat");
        
        document.getElementById("texto_encriptado").innerHTML = textoEncriptado;
        document.getElementById("texto_encriptado").style.display = "block";

        document.querySelector(".imagen_muneco").style.display = "none";
        document.querySelector(".texto_imagen1").style.display = "none";
        document.querySelector(".texto_imagen2").style.display = "none";

        document.querySelector(".copiar").style.display = "block";
         
        textarea.value = "Ingrese el texto aquí";
        
    }
  }

  function copiarTexto() {
    let textoEncriptado = document.getElementById("texto_encriptado").value;
    navigator.clipboard.writeText(textoEncriptado);
  }

  
  function desencriptar(){
    let textoEncriptado = document.getElementById("texto_encriptado").value;
    let textoDesencriptado = textoEncriptado.replace(/enter/g, "e");
    textoDesencriptado = textoDesencriptado.replace(/imes/g, "i");
    textoDesencriptado = textoDesencriptado.replace(/ai/g, "a");
    textoDesencriptado = textoDesencriptado.replace(/ober/g, "o");
    textoDesencriptado = textoDesencriptado.replace(/ufat/g, "u");
    
    document.getElementById("texto_encriptado").value = textoDesencriptado;
    document.getElementById("Ingrese_texto").value = "Ingrese el texto aquí";
}