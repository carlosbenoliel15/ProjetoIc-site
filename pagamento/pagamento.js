let total=0;
let totalInicio=0;
let pedidos;
window.onload = (event) => {
  pedidos= JSON.parse(sessionStorage.getItem("order"))
  for (let i = 0; i < pedidos.length; i++) {
    const quantidade= Number(pedidos[i].quantity);
    const preco= Number(pedidos[i].price);
    totalInicio += quantidade * preco;
  }
  document.getElementById("totalPedido").innerHTML = totalInicio + "€";
  document.getElementById("total").innerHTML = totalInicio + "€";
  document.getElementById("gorjeta").addEventListener("keyup", (event) => {
    let totalPedido = totalInicio;
    const gorjeta = Number(
      document.getElementById("gorjeta").value.replace("€", "")
    );
    totalPedido += gorjeta;
    document.getElementById("total").innerHTML = totalPedido;
  });
};
let displayTip = false;
function checkTip() {
  displayTip = !displayTip;
  if (displayTip) {
    document.getElementById("gorjeta").style.display = "Block";
  } else {
    document.getElementById("gorjeta").style.display = "None";
  }
}

function saveTotal() {
  const gorjeta = Number(
    document.getElementById("gorjeta").value.replace("€", "")
  );
  sessionStorage.setItem(
    "pagamento",
    JSON.stringify({
      total: totalInicio + gorjeta,
    })
  );
  window.location.href = "../pagar/pagar.html";
}

