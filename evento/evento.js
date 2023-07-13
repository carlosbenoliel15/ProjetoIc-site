window.onload = function () {
  const selectElement = document.getElementById("fdecoracao");
  selectElement.addEventListener("change", function (event) {
    let valor = document.getElementById("fdecoracao").value;
    if (valor == "outro") {
      document.getElementById("outros").style.display = "flex";
    } else {
      document.getElementById("outros").style.display = "none";
    }
  });
};

function go() {
  let dia = formatDate(document.getElementById("fdate").value);
  let hora = document.getElementById("fhour").value;
  let quant = document.getElementById("fquantity").value;
  let cor = document.getElementById("cores").value;
  let cor2 = document.getElementById("cores2").value;
  let decoracao = document.getElementById("fdecoracao").value;
  let observacoes = document.getElementById("fobservacoes").value;
  if (dia && hora && quant && cor && cor2 && decoracao) {
    let objeto = {
      dia: dia,
      hora: hora,
      quantiadePessoas: quant,
      cor1: cor,
      cor2: cor2,
      decoracao:
        decoracao == "outro"
          ? document.getElementById("foutros").value
          : decoracao,
      obs: observacoes,
    };
    sessionStorage.setItem("pedido", JSON.stringify(objeto));
    window.location.href = "../escolherRestaurante/escolherRestaurante.html";
  } else {
    alert("Preencha todos os campos");
  }
}

function formatDate(date) {
  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}`;
}
