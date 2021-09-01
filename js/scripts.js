// inserire 100 quadratini nel div #campo
function numeroQuadrati(quadratini) {
    for (var i = 1; i <= quadratini; i++) {
        document.getElementById("campo").innerHTML += `<div class="quadrato">$i</div>`;
    }
}
var quadratini = prompt("inserisci il numero di Quadratini");
numeroQuadrati(quadratini);

document.getElementById("campo").addEventListener("click",
    function(event) {
        event.target.classList.add("click")
    }

);