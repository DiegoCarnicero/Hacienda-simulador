const seleccionInput = document.querySelector("input");

const seleccionButton = document.querySelector("button");


const neto = document.getElementById("montoNeto");
const recibido = document.getElementById("porcentaje");

seleccionButton.addEventListener("click", () => {

   const salario = Number(seleccionInput.value);

  let retencion;

  if (salario === 30000) {
    retencion = 20;
  } else {
    retencion = 15;
  }
  recibido.textContent = retencion;

  const netoAnual = salario * (1 - retencion / 100);
  const netoMensual = netoAnual / 12;

    neto.textContent = netoMensual.toFixed(2);

    recibido.classList.remove("hidden");

})