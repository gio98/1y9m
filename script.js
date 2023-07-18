// Selezionare la checkbox con id checkbox1
var checkbox = document.getElementById("checkbox");

// Aggiungere un listener per l'evento change della checkbox
checkbox.addEventListener("change", function() {
  // Verificare se la checkbox è true
  if (checkbox.checked) {
        // Si seleziona l'elemento con id="letter"
    var letter = document.getElementById("letter");
    // Si cambia la proprietà top dello stile dell'elemento
    letter.style.top = "-41px";
  } else {
         // Si seleziona l'elemento con id="letter"
         var letter = document.getElementById("letter");
         // Si cambia la proprietà top dello stile dell'elemento
         letter.style.top = "76px";
  }
});