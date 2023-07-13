function go(){ //N sei pk só tá a funcionar assim
  window.location.href= '../escolherRestaurante/escolherRestaurante.html' 
}

window.onload = function () {
  document.getElementById("reserva").addEventListener("submit", (event) => {
    let dia = formatDate(document.getElementById("fdate").value);
    let hora = document.getElementById("fhour").value;
    let quant = document.getElementById("fquantity").value;
    if (dia && hora && quant) {
      let objeto = {
        dia: dia,
        hora: hora,
        quantiadePessoas: quant,
      };
      sessionStorage.setItem("pedido", JSON.stringify(objeto));
    }
  });
};


function formatDate(date) {
  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}`;
}