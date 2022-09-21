function showResult(text) {

  document.getElementById("noworks").textContent = text;

}
function showResult2(text) {

  document.getElementById("works").textContent = text;

}
//-----------------------reach html----------------------//

function tilldelning(v) {

  v = "Volvo";

  showResult2(typeof v + "Volvoooooo");

}


showResult(typeof tilldelning());