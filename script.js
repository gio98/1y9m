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
    var front = document.getElementById("front");
    // Si cambia la proprietà top dello stile dell'elemento
    front.style.backgroundImage = "none";
    var back = document.getElementById("back");
    // Si cambia la proprietà top dello stile dell'elemento
    back.style.backgroundImage = "none";
  } else {
         // Si seleziona l'elemento con id="letter"
         var letter = document.getElementById("letter");
         // Si cambia la proprietà top dello stile dell'elemento
         letter.style.top = "76px";
         var front = document.getElementById("front");
          // Si cambia la proprietà top dello stile dell'elemento
          front.style.backgroundImage = "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/144467/after.png')";
          var back = document.getElementById("back");
          // Si cambia la proprietà top dello stile dell'elemento
          back.style.backgroundImage = "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/144467/before1.png')";
  }
});
