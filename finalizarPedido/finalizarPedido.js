function onPlusCartClick1(idx){
  //Add 1 quantity to the cart
  let productCounter = document.getElementById('cartProductN' + idx.toString());
  let totalElement = document.getElementById("total");

  //Get cart from session storage
  let cart = JSON.parse(sessionStorage.getItem('order'));
  //If the product is in the cart, reduce the quantity by 1, if it becomes 0, remove it from the cart
  if (cart != null) {
      let product = cart.find(x => x.name == cart[idx].name);
      if (product != null) {
          product.quantity++;
          //Update the price
            //Update the cart in the session storage
        sessionStorage.setItem('order', JSON.stringify(cart));
        window.location.reload();
      }
  }


}

function onMinusCartClick1(idx) {
  //Remove 1 quantity from the cart un
  let productCounter = document.getElementById('cartProductN' + idx.toString());
  let totalElement = document.getElementById("total");

  //Get cart from session storage
  let cart = JSON.parse(sessionStorage.getItem('order'));
  //If the product is in the cart, reduce the quantity by 1, if it becomes 0, remove it from the cart
  if (cart != null) {
      let product = cart.find(x => x.name == cart[idx].name);
      if (product != null) {
          
          if (product.quantity == 1) {
              //Alert asking if the user wants to remove the product from the cart
              if (confirm("De certeza que quer remover " + product.name + " do carrinho?")) {
                  //Remove the product from the cart
                  product.quantity--;
                  cart.splice(cart.indexOf(product), 1);
                  window.location.reload();
              }
              } else {
                  product.quantity--;
                  sessionStorage.setItem('order', JSON.stringify(cart));
                  window.location.reload();
                  
              }
      }
  }
  //Update the cart in the session storage
  sessionStorage.setItem('order', JSON.stringify(cart));

}

let totalInicio=0;
let pedidos;
window.onload = (event) => {
  const pedidos = JSON.parse(sessionStorage.getItem("order"));
  const detalhes = JSON.parse(sessionStorage.getItem("pedido"));
  let list = document.getElementById("pedidos");
  let summary = document.getElementById("sumario");
  let descrição = document.getElementById("detalhes");
  let sumario = document.createElement("div");
  sumario.className="summary";



  for (let i = 0; i < pedidos.length; i++) {
    let item = document.createElement("div");
    item.className="product"
    item.innerHTML = `
    <div class="row">
    <div class="col-md-3">
      <img class="img-fluid mx-auto d-block image" src="${pedidos[i].image}" style="height: 120px;
      width: 120px;">
    </div>
    <div class="col-md-8">
      <div class="info">
        <div class="row">
          <div class="col-md-5 product-name">
            <div class="product-name">
              <a href="#">${pedidos[i].name}</a>
            </div>
          </div>
          <div class="col-md-4 quantity style="display:flex;flex-direction:column">
          <a id="removeProduct" onclick="onMinusCartClick1(${i})" class="button icon-button" aria-label="Icon-only Button">
          <svg width="100px" height="80px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--emojione-monotone" preserveAspectRatio="xMidYMid meet"><path d="M2 26h60v12H2z" fill="currentColor"></path></svg>
          </a>
          <h1> x${pedidos[i].quantity} </h1>
          <a id="addProduct" onclick="onPlusCartClick1(${i})" class="button icon-button" aria-label="Icon-only Button">
          <svg width="64px" height="64px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--emojione" preserveAspectRatio="xMidYMid meet"><path fill="white" d="M38 26V2H26v24H2v12h24v24h12V38h24V26z"></path></svg>
          </a>
          </div>
          <div class="col-md-3 price">
            <span>${pedidos[i].price}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
    list.appendChild(item);
  }

  
  order= JSON.parse(sessionStorage.getItem("order"))
  for (let i = 0; i < order.length; i++) {
    const quantidade= Number(pedidos[i].quantity);
    const preco= Number(pedidos[i].price);
    totalInicio += quantidade * preco;
  }

  sumario.innerHTML=`
  <h3>Pedido</h3>
  <div class="summary-item"><span class="text">Subtotal</span><span class="price">${totalInicio.toFixed(2)}</span></div>
  <div class="summary-item"><span class="text">Descontos</span><span class="price">$0</span></div>
  <div class="summary-item"><span class="text">Total</span><span class="price">${totalInicio.toFixed(2)}</span></div>
  <a href="../finalizarPagamento/escolherPagamento.html"><button type="button" class="btn btn-primary btn-lg btn-block">Finalizar</button></a>
  `;
  summary.appendChild(sumario);
  if (detalhes.dia) {
    addDescription(detalhes.dia, descrição, "Dia");
  }

  if (detalhes.hora) {
    addDescription(detalhes.hora, descrição, "Hora");
  }
  if (detalhes.cor1) {
    addDescription(detalhes.cor1, descrição, "Cor 1");
  }
  if (detalhes.cor2) {
    addDescription(detalhes.cor2, descrição, "Cor 2");
  }

  if (detalhes.decoracao) {
    addDescription(detalhes.decoracao, descrição, "Decoração");
  }

  if (detalhes.obs) {
    addDescription(detalhes.obs, descrição, "Observações");
  }

  if (detalhes.quantiadePessoas) {
    addDescription(
      detalhes.quantiadePessoas,
      descrição,
      "Quantidade de pessoas"
    );
  }
};

function remove(order) {
  const pedidos = JSON.parse(sessionStorage.getItem("order"));
  let index = 0;
  for (let i = 0; i < pedidos.length; i++) {
    if (pedidos[i].name == order) {
      index = i;
      break;
    }
  }

  pedidos.splice(index, 1);
  sessionStorage.setItem("order", JSON.stringify(pedidos));
  window.location.reload();
}

function addDescription(value, element, label) {
  let item = document.createElement("div");
  item.innerHTML = `
    <div>
      <h2>${label}: ${value}</h2>
    </div>
  `;
  element.appendChild(item);
}
