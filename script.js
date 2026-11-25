const lampada = document.getElementById("lampada");
const estado = document.getElementById("estado");
const interruptor = document.getElementById("interruptor");

let acesa = false;

interruptor.addEventListener("click", function () {
  if (acesa) {
    acesa = false;
    lampada.className = "lampada apagada";
    lampada.setAttribute("aria-label", "Lampada apagada");
    estado.textContent = "A lâmpada está apagada.";
    interruptor.textContent = "Acender";
    document.body.classList.remove("acessa");
  } else {
    acesa = true;
    lampada.className = "lampada acesa";
    lampada.setAttribute("aria-label", "Lampada acesa");
    estado.textContent = "A lâmpada está acesa.";
    interruptor.textContent = "Apagar";
    document.body.classList.add("acessa");
  }
});
