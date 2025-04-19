document.getElementById("formLogin").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const nombre = document.getElementById("nombre").value.trim();
    const contrasena = document.getElementById("contrasena").value.trim();
  
    const nombreCorrecto = "Leidy";
    const contrasenaCorrecta = "Lisa";
  
    if (nombre === nombreCorrecto && contrasena === contrasenaCorrecta) {
      window.location.href = "views/firstView.html";
    } else {
      alert("Nombre o contraseña incorrectos. Intenta de nuevo por favor.");
    }
  });
  