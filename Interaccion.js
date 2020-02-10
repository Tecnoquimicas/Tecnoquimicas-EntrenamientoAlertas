// Get the modal
var modal = document.getElementById("modalEnrolamiento");
var modalAsignacion = document.getElementById("modalAsignacionTurnos");
var modalNovedades = document.getElementById("modalNovedades");
var modalIngreso = document.getElementById("modalIngreso");
var modalNomina = document.getElementById("modalNomina");

// Get the button that opens the modal
var btn = document.getElementById("btnUno");
var btnAsignacion = document.getElementById("btnAsignacion");
var btnNovedades = document.getElementById("btnNovedades");
var btnIngreso = document.getElementById("btnIngreso");
var botonNomina = document.getElementById("botonNomina");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var spanTurnos = document.getElementsByClassName("close")[1];
var spanNovedades = document.getElementsByClassName("close")[2];
var spanIngreso = document.getElementsByClassName("close")[3];
var spanNomina = document.getElementsByClassName("close")[4];

// When the user clicks the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";
}

btnAsignacion.onclick = function () {
  modalAsignacion.style.display = "block";
}

btnNovedades.onclick = function () {
  modalNovedades.style.display = "block";
}

btnIngreso.onclick = function () {
  modalIngreso.style.display = "block";
}

botonNomina.onclick = function () {
  modalNomina.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}
spanTurnos.onclick = function () {
  modalAsignacion.style.display = "none";
}
spanNovedades.onclick = function () {
  modalNovedades.style.display = "none";
}
spanIngreso.onclick = function () {
  modalIngreso.style.display = "none";
}
spanNomina.onclick = function () {
  modalNomina.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modalAsignacion) {
    modalAsignacion.style.display = "none";
  }
  if (event.target == modalNovedades) {
    modalNovedades.style.display = "none";
  }
  if (event.target == modalIngreso) {
    modalIngreso.style.display = "none";
  }
  if (event.target == modalNomina) {
    modalNomina.style.display = "none";
  }
}

// Ocultar o mostrar texto

function mostrarMas() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Leer más";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Leer menos";
    moreText.style.display = "inline";
  }
}

//mostrarMasNormas

function mostrarMasNormas() {
  var dots = document.getElementById("dotsNormas");
  var moreText = document.getElementById("moreNormas");
  var btnText = document.getElementById("myBtnNormas");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Leer más";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Leer menos";
    moreText.style.display = "inline";
  }

  //------------------

  var dotsNov = document.getElementById("dotsNormasNovedades");
  var moreTextNov = document.getElementById("moreNormasNovedades");
  var btnTextNov = document.getElementById("myBtnNormasNovedades");

  if (dotsNov.style.display === "none") {
    dotsNov.style.display = "inline";
    btnTextNov.innerHTML = "Leer más";
    moreTextNov.style.display = "none";
  } else {
    dotsNov.style.display = "none";
    btnTextNov.innerHTML = "Leer menos";
    moreTextNov.style.display = "inline";
  }

}

//Pop up interactions

// When the user clicks on div, open the popup
function myFunctionShow() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

function myFunctionHide() {
  var popup = document.getElementById("myPopup");
  popup.classList.remove("show");
}