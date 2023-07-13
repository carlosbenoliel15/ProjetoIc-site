function formatDate(date) {
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
}
  let totalInicio=0;
  let pedidos;
  window.onload = (event) => {
    const pedidos = JSON.parse(sessionStorage.getItem("order"));
    let list = document.getElementById("tabelaFatura");
    let sumario = document.createElement("div");
    sumario.className="summary";
  

    for (let i = 0; i < pedidos.length; i++) {
      let item = document.createElement("tr");
      let Subtotal=Number(pedidos[i].price * pedidos[i].quantity);
      item.innerHTML = `
        <td>${pedidos[i].name}</td>
        <td class="alignright">${Subtotal}</td>                                                  
      `;
      list.appendChild(item);
    }
    order= JSON.parse(sessionStorage.getItem("order"))
  for (let i = 0; i < order.length; i++) {
    const quantidade= Number(pedidos[i].quantity);
    const preco= Number(pedidos[i].price);
    totalInicio += quantidade * preco;
  }

    let item2 = document.createElement("tr");
    item2.className="total"
    item2.innerHTML = `
    <td class="alignright" width="80%">Total</td>
    <td class="alignright">${totalInicio}</td>                                                
    `;
    list.appendChild(item2);

    let restaurante=sessionStorage.getItem("restaurant");
    let morada = document.getElementById("morada");
    let item3 = document.createElement("td");
    item3.className="content-block";
    item3.innerHTML=`
        Sustanable Foody:${restaurante}                         
    `;
    morada.appendChild(item3)
    
};
  

