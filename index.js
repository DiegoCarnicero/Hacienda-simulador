const seleccionInput = document.querySelector("input");

const seleccionButton = document.querySelector("button");

const texto1 = document.getElementById("neto");
const texto2 = document.getElementById("recibido");


const neto = document.getElementById("montoNeto");
const recibido = document.getElementById("porcentaje");

seleccionButton.addEventListener("click", () => {

   const salario = Number(seleccionInput.value);

  let retencion;

  if (salario === 30000) {
    retencion = 20;

    texto1.scrollIntoView({ behavior: "smooth" });
    texto1.classList.add("coloreo");
     texto2.scrollIntoView({ behavior: "smooth" });
    texto2.classList.add("coloreo");
  } else {
    retencion = 15;

    texto1.scrollIntoView({ behavior: "smooth" });
    texto1.classList.add("coloreado");
     texto2.scrollIntoView({ behavior: "smooth" });
    texto2.classList.add("coloreado");
  }
  recibido.textContent = retencion;

  const netoAnual = salario * (1 - retencion / 100);
  const netoMensual = netoAnual / 12;

    neto.textContent = netoMensual.toFixed(2);

    recibido.classList.remove("hidden");

})