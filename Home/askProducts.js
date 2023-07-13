//Class for products
class Product {
    constructor(name, price, igredients, categoryId, description, image, calories,quantity=1,nacional=false) {
        this.name = name;
        this.price = price;
        this.quantity = quantity
        this.igredients = igredients;
        this.description = description;
        this.categoryId = categoryId;
        this.image = image;
        this.calories = calories;
        this.nacional = nacional;
        //0 Prato 1 drink 2 dessert 3 entree 4 appetizer 5 Soupa 
    }
}


let previewsContainer = document.querySelector('.products-preview');
let previewBoxes = previewsContainer.querySelectorAll('.preview');

//name, price, igredients, categoryId, description, image, calories



allAperitivos = [
    new Product("Pernas de frango", 10.99, ["frango"], 0, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nisl nunc aliquet elit, eget aliquam nisl nunc eu nunc. Sed euismod, nunc ut aliquam aliquam, nisl nunc aliquet elit, eget aliquam nisl nunc eu nunc.", "https://hips.hearstapps.com/hmg-prod/images/classic-buffalo-wings-horizontal-279-1547506155.jpg", 500),
    new Product("Paus de queijo", 8.99, ["queijo", "sticks"], 0, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nisl nunc aliquet elit, eget aliquam nisl nunc eu nunc. Sed euismod, nunc ut aliquam aliquam, nisl nunc aliquet elit, eget aliquam nisl nunc eu nunc.", "https://www.kawalingpinoy.com/wp-content/uploads/2020/05/crispy-cheese-sticks-4.jpg", 500),
    new Product("Guacamole", 5.99, ["avocado", "sal", "cilantro"], 0, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nisl nunc aliquet elit, eget aliquam nisl nunc eu nunc. Sed euismod, nunc ut aliquam aliquam, nisl nunc aliquet elit, eget aliquam nisl nunc eu nunc.", "https://cdn.loveandlemons.com/wp-content/uploads/2019/04/easy-guacamole-recipe-580x771.jpg", 500),
    new Product("Queijo Fresco", 2.99, ["queijo"], 0, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nisl nunc aliquet elit, eget aliquam nisl nunc eu nunc. Sed euismod, nunc ut aliquam aliquam, nisl nunc aliquet elit, eget aliquam nisl nunc eu nunc.", "https://www.seriouseats.com/thmb/3aIk2kCERpho78irs2frhS5usB4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__assets_c__2014__05__20140509-fresh-cheese-mozz-thumb-610x406-400247-bdae9436f8564b6789bd754e61422d27.jpg", 500),
];
//Get Soupa images from the web 
allSoupas = [
    new Product("Canja", 10.99, ["frango"], 1, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nisl nunc aliquet elit, eget aliquam nisl nunc eu nunc. Sed euismod, nunc ut aliquam aliquam, nisl nunc aliquet elit, eget aliquam nisl nunc eu nunc.", "https://sallysbakingaddiction.com/wp-content/uploads/2015/01/light-creamy-chicken-noodle-soup-1.jpg", 500,1,true),
    new Product("Sopa de Vegetais", 8.99, ["cenoura", "batata", "brocolos", "ervilhas"], 1, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nisl nunc aliquet elit, eget aliquam nisl nunc eu nunc. Sed euismod, nunc ut aliquam aliquam, nisl nunc aliquet elit, eget aliquam nisl nunc eu nunc.", "https://www.inspiredtaste.net/wp-content/uploads/2018/10/Homemade-Vegetable-Soup-Recipe-2-1200.jpg", 500),
    new Product("Sopa de Tomate", 10.99, ["tomate"], 1, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nisl nunc aliquet elit, eget aliquam nisl nunc eu nunc. Sed euismod, nunc ut aliquam aliquam, nisl nunc aliquet elit, eget aliquam nisl nunc eu nunc.", "https://www.inspiredtaste.net/wp-content/uploads/2016/08/Tomato-Soup-Recipe-2-1200.jpg", 500),
];

allPratos = [
    new Product("Pizza de Fiambre", 10.99, ["queijo","fiambre","glúten"], 2, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nisl nunc aliquet elit, eget aliquam nisl nunc eu nunc. Sed euismod, nunc ut aliquam aliquam, nisl nunc aliquet elit, eget aliquam nisl nunc eu nunc.", "https://hips.hearstapps.com/hmg-prod/images/classic-buffalo-wings-horizontal-279-1547506155.jpg", 500),
    new Product("Cheese Burger", 10.99, ["carne", "queijo", "tomate", "alface", "cebola", "ketchup", "mustarda"], 2, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nisl nunc aliquet elit, eget aliquam nisl nunc eu nunc. Sed euismod, nunc ut aliquam aliquam, nisl nunc aliquet elit, eget aliquam nisl nunc eu nunc.", "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-cheeseburger-1:1-3-product-tile-desktop?wid=829&hei=515&dpr=off", 500),
    new Product("Tofu", 8.99, ["tofu", "sal"], 2, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nisl nunc aliquet elit, eget aliquam nisl nunc eu nunc. Sed euismod, nunc ut aliquam aliquam, nisl nunc aliquet elit, eget aliquam nisl nunc eu nunc.", "https://www.budgetbytes.com/wp-content/uploads/2021/09/Honey-Sriracha-Tofu-close.jpg", 500),
    new Product("Frango", 10.99, ["frango", "sal"], 2, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nisl nunc aliquet elit, eget aliquam nisl nunc eu nunc. Sed euismod, nunc ut aliquam aliquam, nisl nunc aliquet elit, eget aliquam nisl nunc eu nunc.", "https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/5:4/w_3165,h_2532,c_limit/Basically-Gojuchang-chicken-Recipe-Wide.jpg", 500),
    new Product("Salmão", 10.99, ["salmão", "sal"], 2, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nisl nunc aliquet elit, eget aliquam nisl nunc eu nunc. Sed euismod, nunc ut aliquam aliquam, nisl nunc aliquet elit, eget aliquam nisl nunc eu nunc.", "https://realfood.tesco.com/media/images/RFO-1400x919-salmon-1f067c83-cd14-4214-ac1d-5f6beb05282b-0-1400x919.jpg", 500,1,true),
    new Product("Salada", 8.99, ["alface", "tomate", "cebola", "pepino", "sal"], 2, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nisl nunc aliquet elit, eget aliquam nisl nunc eu nunc. Sed euismod, nunc ut aliquam aliquam, nisl nunc aliquet elit, eget aliquam nisl nunc eu nunc.", "https://images.immediate.co.uk/production/volatile/sites/30/2014/05/Epic-summer-salad-hub-2646e6e.jpg", 500),
];

allSobremesas = [   
    new Product("Gelado de baunilha", 5.99, ["leite", "açucar", "vanilla", "cream"], 3, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nisl nunc aliquet elit, eget aliquam nisl nunc eu nunc. Sed euismod, nunc ut aliquam aliquam, nisl nunc aliquet elit, eget aliquam nisl nunc eu nunc.", "https://post.healthline.com/wp-content/uploads/2020/07/509595-13-Healthy-Ice-Cream-Brands_732x549-thumbnail.jpg", 500),
    new Product("Bolo de Chocolate", 10.99, ["glúten","leite", "açucar", "chocolate", "flour"], 3, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nisl nunc aliquet elit, eget aliquam nisl nunc eu nunc. Sed euismod, nunc ut aliquam aliquam, nisl nunc aliquet elit, eget aliquam nisl nunc eu nunc.", "https://i1.wp.com/www.bakingwithdan.com/wp-content/uploads/2015/07/42164649_1699733156821564_3953317804542787584_n.jpg?resize=960%2C960", 500),
    new Product("Cheesecake", 10.99, ["leite", "açucar", "queijo", "cream", "flour"], 3, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nisl nunc aliquet elit, eget aliquam nisl nunc eu nunc. Sed euismod, nunc ut aliquam aliquam, nisl nunc aliquet elit, eget aliquam nisl nunc eu nunc.", "https://food-images.files.bbci.co.uk/food/recipes/biscoff_cheesecake_37320_16x9.jpg", 500),
    new Product("Cupcake", 5.99, ["leite", "açucar", "flour"], 3, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nisl nunc aliquet elit, eget aliquam nisl nunc eu nunc. Sed euismod, nunc ut aliquam aliquam, nisl nunc aliquet elit, eget aliquam nisl nunc eu nunc.", "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fassets.marthastewart.com%2Fstyles%2Fwmax-750%2Fd22%2Fmscupcakes_devils_food%2Fmscupcakes_devils_food_horiz_0.jpg%3Fitok%3DLgO9rlJ5", 500),

]

allBebidas = [
    new Product("Iced Tea", 2.99, ["água", "chá", "açucar"], 4, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nisl nunc aliquet elit, eget aliquam nisl nunc eu nunc. Sed euismod, nunc ut aliquam aliquam, nisl nunc aliquet elit, eget aliquam nisl nunc eu nunc.", "https://natashaskitchen.com/wp-content/uploads/2021/07/Iced-Tea-SQ-1.jpg", 500),
    new Product("Coca Cola", 2.99, ["açucar", "água", "gás"], 4, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nisl nunc aliquet elit, eget aliquam nisl nunc eu nunc. Sed euismod, nunc ut aliquam aliquam, nisl nunc aliquet elit, eget aliquam nisl nunc eu nunc.", "https://s3.minipreco.pt/medias/h1d/hf1/8953898434590.jpg", 500),
    new Product("Sprite", 2.99, ["açucar", "água", "gás"], 4, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nisl nunc aliquet elit, eget aliquam nisl nunc eu nunc. Sed euismod, nunc ut aliquam aliquam, nisl nunc aliquet elit, eget aliquam nisl nunc eu nunc.", "https://www.auchan.pt/dw/image/v2/BFRC_PRD/on/demandware.static/-/Sites-auchan-pt-master-catalog/default/dwdee499a3/images/hi-res/003206787.jpg", 500),
    new Product("Fanta", 2.99, ["laranja", "água", "gás"], 4, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nisl nunc aliquet elit, eget aliquam nisl nunc eu nunc. Sed euismod, nunc ut aliquam aliquam, nisl nunc aliquet elit, eget aliquam nisl nunc eu nunc.", "https://www.continente.pt/dw/image/v2/BDVS_PRD/on/demandware.static/-/Sites-col-master-catalog/default/dw726e3415/images/col/451/4514863-hero.jpg?sw=2000&sh=2000", 500),
    new Product("Água", 1.99, ["água"], 4, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nisl nunc aliquet elit, eget aliquam nisl nunc eu nunc. Sed euismod, nunc ut aliquam aliquam, nisl nunc aliquet elit, eget aliquam nisl nunc eu nunc.", "https://www.priorlakemn.gov/home/showpublishedimage/1078/637384528077200000", 500),
    new Product("Sumo de Laranja Nacional",1.49,["laranja"],4,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nisl nunc aliquet elit, eget aliquam nisl nunc eu nunc. Sed euismod, nunc ut aliquam aliquam, nisl nunc aliquet elit, eget aliquam nisl nunc eu nunc.","https://www.allrecipes.com/thmb/qXBaEIkAqDpDWqAVJbPZs9TxcZw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/4513616-d1b91430eaab44e49230b21d22b88ba2.jpg",500,1,true),
    new Product("Cerveja, 0.5L", 1.99, ["glúten","água", "barley"], 4, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nisl nunc aliquet elit, eget aliquam nisl nunc eu nunc. Sed euismod, nunc ut aliquam aliquam, nisl nunc aliquet elit, eget aliquam nisl nunc eu nunc.", "https://s2.glbimg.com/lL0eM0eKqqCqglxmN5e95cyBzTs=/e.glbimg.com/og/ed/f/original/2019/12/03/beer-filled-mug-on-table-1552630_1.jpg", 500),
];




let allProducts = [];
var allIngredients = [];
var filteredProducts = [];
var ingredientBlacklist = [];
var query = '';
const searchBar = document.getElementById('searchBar');


function onFilterClick() {
    //Spawn a box on the top of the page with the filters 
    //alert("test");
}

//Change corresponding product counter
function onMinusClick(idx) {
    let productCounter = document.getElementById('counterN' + idx.toString());
    let productPrice = document.getElementById('productsPriceN' + idx.toString());
   
    //lower the counter by 1 if it is above 0 
    if (productCounter.innerHTML > 0) {
        productCounter.innerHTML--;
    
    //Get cart from session storage
    let cart = JSON.parse(sessionStorage.getItem('order'));
    //If the product is in the cart, reduce the quantity by 1, if it becomes 0, remove it from the cart
    if (cart != null) {
        let product = cart.find(x => x.name == allProducts[idx].name);
        if (product != null) {  
            product.quantity--;
            if (product.quantity == 0) {
                cart.splice(cart.indexOf(product), 1);
            }
            else { //Update the price (if it's 0 it's the same price as 1)
                if (product.quantity == 1) {
                    productPrice.innerHTML = allProducts[idx].price+ '€';
                }
                else
                {productPrice.innerHTML = (productCounter.innerHTML * allProducts[idx].price).toFixed(2) + '€';}
            }
        }
        
    }
    //Update the cart in the session storage
    sessionStorage.setItem('order', JSON.stringify(cart));



}
}

function updateOrder(idx) {
    let productCounter = document.getElementById('counterN' + idx.toString());
    let close = document.getElementById('closeN' + idx.toString());
    //Get cart from session storage
    let cart = JSON.parse(sessionStorage.getItem('order'));
    //If the product is in the cart, change it's quantity to productCounter, if it becomes 0, remove it from the cart
   
    if (cart != null) {
        let product = cart.find(x => x.name == allProducts[idx].name);
        if (product != null) {
            product.quantity = productCounter.innerHTML;
            if (product.quantity == 0) {
                cart.splice(cart.indexOf(product), 1);
            }
        }
        else {
            cart.push(new Product(allProducts[idx].name, allProducts[idx].price, allProducts[idx].ingredients, productCounter.innerHTML, allProducts[idx].description, allProducts[idx].image, allProducts[idx].stock));
        }
    }
    //Close the product preview
    close.click(); 
   

}

function onPlusClick(idx) {
    let productCounter = document.getElementById('counterN' + idx.toString());
    let productPrice = document.getElementById('productsPriceN' + idx.toString());
    //raise the counter by 1
    productCounter.innerHTML++;
    //Add 1 corresponding product to the cart
    let product = allProducts[idx];
    let cart = JSON.parse(sessionStorage.getItem('order'));
    //Check if product is in cart
    console.log(cart);
    let productInCart = false;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name == product.name) {
            productInCart = true;
            //Add 1 product to cart
            cart[i].quantity++;
        }
    }
    //If product is not in cart, add it
    if (!productInCart) {
        cart.push(product);
    }

    //Update the price
    productPrice.innerHTML = (productCounter.innerHTML * product.price).toFixed(2) + " €";

    sessionStorage.setItem('order', JSON.stringify(cart));
  
}
function onMinusCartClick(idx) {
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
                    productCounter.innerHTML = product.quantity;
                    productCounter.innerHTML = " x"+product.quantity.toString()+" ";
                    
                }
        }
    }
    //Update the cart in the session storage
    sessionStorage.setItem('order', JSON.stringify(cart));

    //Update the counter

    //Update the total
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].quantity * cart[i].price;
    }
    totalElement.innerHTML = "Total: "+total.toFixed(2) + " €";
}
function onPlusCartClick(idx){
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
            productCounter.innerHTML = " x" + product.quantity.toString() + " ";
        }
    }
    //Update the cart in the session storage
    sessionStorage.setItem('order', JSON.stringify(cart));

    //Update the counter

    //Update the total
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].quantity * cart[i].price;
    }
    totalElement.innerHTML ="Total: "+ total.toFixed(2) + " €";
}

function showPedido(){
    let cart = JSON.parse(sessionStorage.getItem('order'));
    //if cart is null or empty, show a message
    if (cart == null || cart.length == 0) {
        alert("O seu carrinho está vazio!");
    }
    else {
    let total = 0;
    let menuNav2 = document.getElementById("PedidoEfetuado");
    let listItens = document.getElementById("items1");
    let totalElement = document.getElementById("total");
    if(menuNav2.style.display=="none"){
        if(document.getElementById("menu-filter").style.display!="none"){
            document.getElementById("menu-filter").style.display="none"
        }
    
        const pedidos = JSON.parse(sessionStorage.getItem("order"));
        listItens.innerHTML = "";
        for (let i = 0; i < pedidos.length; i++){
            let items = document.createElement("li");
            items.innerHTML = `
                <div class="pedidoOrder">
                <h5 id="nome"> ${pedidos[i].name}</h2>
                <div class="pai" style="width:500px">
                        <div style="float:right;     height: 30px; ">
                      <a id="removeProduct" onclick="onMinusCartClick(${i})" class="button icon-button" aria-label="Icon-only Button">
                      <svg width="64px" height="64px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--emojione-monotone" preserveAspectRatio="xMidYMid meet"><path d="M2 26h60v12H2z" fill="currentColor"></path></svg>
                      </a>
                    </div>
                    <h5 id="cartProductN${i}"> x${pedidos[i].quantity} </h2>
                    <div style="float:left; height: 30px; ">
                    <a id="addProduct" onclick="onPlusCartClick(${i})" class="button icon-button" aria-label="Icon-only Button">
                    <svg width="64px" height="64px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--emojione" preserveAspectRatio="xMidYMid meet"><path fill="white" d="M38 26V2H26v24H2v12h24v24h12V38h24V26z"></path></svg>
                    </a>

                <button onclick="remove('${pedidos[i].name}')">Remover</button>
                </div>
            `;
            total += pedidos[i].price * pedidos[i].quantity;
            listItens.appendChild(items);
        }
        totalElement.innerHTML = `Total: ${total}€`;
        menuNav2.style.display="flex"

    }else{
        
        menuNav2.style.display="none"
        listItens.innerHTML="";
        
    }
    
}
}
//Change filtered
function updateIngredients(ingredient, checked) {
    ingredient = ingredient.toLowerCase();
    if (checked) {
        ingredientBlacklist.push(ingredient);
    } else {
        //Remove from blacklist
        ingredientBlacklist = ingredientBlacklist.filter(item => item !== ingredient);
    }
    FilterProducts(searchBar.value);
}

function FilterProducts(query) {
    const productsContainer = document.getElementsByClassName('products-container')[0];
    //Text from search bar
    filteredProducts = allProducts.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
    //Remove products that contain blacklisted ingredients
    filteredProducts = filteredProducts.filter(product => {
        for (let i = 0; i < ingredientBlacklist.length; i++) {
            if (product.igredients.includes(ingredientBlacklist[i])) {
                return false;
            }
        }
        return true;
    });
    productsContainer.innerHTML = '';

    for (let i = 0; i < filteredProducts.length; i++) {
        let product = document.createElement('div');
        product.classList.add('product');
        product.setAttribute('data-name', 'p-' + i);
        product.innerHTML = `

            <img src="${filteredProducts[i].image}" alt="">
            <h3>${filteredProducts[i].name}</h3>
            <div class="price">${filteredProducts[i].price} €</div>
        `;
        productsContainer.appendChild(product);
    }


    //TODO BUILD PREVIEWS
    previewsContainer = document.getElementsByClassName('products-preview')[0];
    //Create preview of all products
    //console.log(allProducts);
    let productIngredients = '';
    //Clear previews
    previewsContainer.innerHTML = '';
    for (let i = 0; i < filteredProducts.length; i++) {
        let preview = document.createElement('div');
        preview.classList.add('preview');
        preview.setAttribute('data-target', 'p-' + i);
        preview.setAttribute('id', i);
        let product = JSON.stringify(filteredProducts[i]);

        //Extract ingredients from product
        productIngredients = product.substring(product.indexOf('[') + 1, product.indexOf(']')).replace(/['"]+/g, ''); //Só há um array no JSON
        //Remove quotes from ingredients
        preview.innerHTML = `
                        <i id="closeN${i}" class="fas fa-times"></i>
                        <img src="${filteredProducts[i].image}"  onclick="onPlusClick(${i})" alt="">
                        <h3>${filteredProducts[i].name}</h3>
                        <p>Ingredientes: ${productIngredients}</p>
                        <p>Calorias: ${filteredProducts[i].calories}</p>
                        <div id="productsPriceN${i}" class="price">${filteredProducts[i].price} €</div>
                        <div class="pai" style="width:500px">
                        <div style="float:right;     height: 30px; ">
                      <a id="removeProduct" onclick="onMinusClick(${i})" class="button icon-button" aria-label="Icon-only Button">
                      <svg width="64px" height="64px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--emojione-monotone" preserveAspectRatio="xMidYMid meet"><path d="M2 26h60v12H2z" fill="currentColor"></path></svg>
                      </a>
                    </div>
                    <a class="productCounter"  id="counterN${i}" >0</a>
                    <div style="float:left; height: 30px; ">
                    <a id="addProduct" onclick="onPlusClick(${i})" class="button icon-button" aria-label="Icon-only Button">
                    <svg width="64px" height="64px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--emojione" preserveAspectRatio="xMidYMid meet"><path fill="white" d="M38 26V2H26v24H2v12h24v24h12V38h24V26z"></path></svg>
                    </a>
                  </div>
                    </div>
                    <br>
                  <button class="button-64" id="btnUpdateCart" onclick="updateOrder(${i})" role="button" style="position:relative;left:30%;">
                  <span class="text">Atualizar 🛒</span>
                  </button>
                    
                    
                  </div>


                    </div>
                    `;
        previewsContainer.appendChild(preview);
    }

    previewBoxes.forEach(close => {
        close.querySelector('.fa-times').onclick = () => {
            close.classList.remove('active');
            previewsContainer.style.display = 'none';
        };
    });
    
    //Set every product 's onClick
    document.querySelectorAll('.products-container .product').forEach(product => {
        product.onclick = () => {
            previewsContainer.style.display = 'flex';
            let name = product.getAttribute('data-name');
            previewBoxes.forEach(preview => {
                
                let target = preview.getAttribute('data-target');
                if (name == target) {
                    //Extract number from target
                    let number = target.substring(target.indexOf('-') + 1, target.length);
                    alert("Changing preview:" +'ID:'+number);
                    preview.classList.add('active');
                    document.getElementById(number.toString()).style.display="display: inline-block;width: 40%;margin-top: 10rem;"

                }
            });
        };
    });

}

function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}
function finalizarPedido(){
    //Ask with alerts if the user is sure
    if (confirm("Tem a certeza que pretende finalizar o seu pedido?")) 
        window.location.href = '../finalizarPedido/finalizarPedido.html'
}

document.getElementById('btnNextPage').addEventListener('click', function () {
    let category = GetURLParameter('category');
    let order = JSON.parse(sessionStorage.getItem('order'));
    if(category<4){
        window.location.href = 'askProducts.html?category=' + (parseInt(category) + 1);
    }
    else { 
        if(order.length>0){
        
        window.location.href = '../finalizarPedido/finalizarPedido.html' }
        else{
            alert("No há produtos no carrinho!");
        }
        }
});


window.onload = function() {
    let menuFilter = document.getElementById('menu-filter');
    let filterButton = document.getElementById('filterButton');
    let pedidoEfetuado = document.getElementById('PedidoEfetuado');
    let pedidoButton = document.getElementById('pedidoButton');

    window.addEventListener('click', function(e){   
        if (menuFilter.contains(e.target)|| filterButton.contains(e.target) || pedidoButton.contains(e.target) || pedidoEfetuado.contains(e.target) ){ 
          // Clicked in box
            
        } else{
            document.getElementById("menu-filter").style.display="none";
            pedidoEfetuado.style.display="none";
          // Clicked outside the box
        }
      });

    //If session storage is empty, create a new cart
    if (sessionStorage.getItem('order') == null) {
        sessionStorage.setItem('order', JSON.stringify([]));
    }

    //Alert with url parameters
    //  alert(GetURLParameter('category'));
    switch (GetURLParameter('category')) {
        case "0":
            //alert("Aperitivos");
            allProducts = allAperitivos;
            break;
        case "1":
            //alert("Soupa");
            allProducts = allSoupas;
            break;
        case "2":
            allProducts = allPratos;
            //alert("Pratos");
            break;
        case "3":
            allProducts = allSobremesas;
            //alert("Deserts");
            break;
        case "4":
            allProducts = allBebidas;
            //alert("Bebidas");
            break;
        default: //If no category is specified
            //alert("Uknown Category: " + GetURLParameter('category'));
    }


    const productsContainer = document.getElementsByClassName('products-container')[0];
    /*
         <div class="product" data-name="p-1">
                        <img src="https://açucarspunrun.com/wp-content/uploads/2020/06/hamBurger-buns-recipe-2-of-11-150x150.jpg" alt="">
                        <h3>strawberries</h3>
                        <div class="price">$2.00</div>
                    </div> */
    //Create divs for each product
    for (let i = 0; i < allProducts.length; i++) {
        let product = document.createElement('div');
        product.classList.add('product');
        product.setAttribute('data-name', 'p-' + i);
     
        //Get ingredients from JSON stringified array

        product.innerHTML = `
                        <img src="${allProducts[i].image}" alt="">
                        <h3>${allProducts[i].name}</h3>
                        <div class="price">${allProducts[i].price} €</div>
                    `;
        productsContainer.appendChild(product);
    }
    previewsContainer = document.getElementsByClassName('products-preview')[0];
    //Create preview of all products
    //console.log(allProducts);
    let productIngredients = '';
    for (let i = 0; i < allProducts.length; i++) {
        let preview = document.createElement('div');
        preview.classList.add('preview');
        preview.setAttribute('data-target', 'p-' + i);
        let products = JSON.stringify(allProducts[i]);
        //Extract ingredients from product
        productIngredients = products.substring(products.indexOf('[') + 1, products.indexOf(']')).replace(/['"]+/g, ''); //Só há um array no JSON
        //Remove quotes from ingredients
        preview.innerHTML = `
                        <i id="closeN${i}" class="fas fa-times"></i>
                        <img src="${allProducts[i].image}"  onclick="onPlusClick(${i})" alt="">
                        <h3>${allProducts[i].name}</h3>
                        <p>Ingredientes: ${productIngredients}</p>
                        <p>Calorias: ${allProducts[i].calories}</p>
                        <div id="productsPriceN${i}" class="price">${allProducts[i].price} €</div>
                        <div class="pai" style="width:500px">
  
                      
                        <div style="float:right;     height: 30px; ">
                      <a id="removeProduct" onclick="onMinusClick(${i})" class="button icon-button" aria-label="Icon-only Button">
                      <svg width="64px" height="64px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--emojione-monotone" preserveAspectRatio="xMidYMid meet"><path d="M2 26h60v12H2z" fill="currentColor"></path></svg>
                      </a>
                    </div>
                    <a class="productCounter"  id="counterN${i}" >0</a>
                    <div style="float:left; height: 30px; ">
                    <a id="addProduct" onclick="onPlusClick(${i})" class="button icon-button" aria-label="Icon-only Button">
                    <svg width="64px" height="64px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--emojione" preserveAspectRatio="xMidYMid meet"><path fill="white" d="M38 26V2H26v24H2v12h24v24h12V38h24V26z"></path></svg>
                    </a>
                  </div>
                    </div>
                    <br>
                  <button class="button-64" id="btnUpdateCart" onclick="updateOrder(${i})" role="button" style="position:relative;left:30%;">
                  <span class="text">Atualizar 🛒</span>
                  </button>
                    
                    
                  </div>


                    </div>
                    `;
        previewsContainer.appendChild(preview);
    }

    previewBoxes.forEach(close => {
        close.querySelector('.fa-times').onclick = () => {
            close.classList.remove('active');
            previewsContainer.style.display = 'none';
        };
    });


    //Set every product 's onClick
    document.querySelectorAll('.products-container .product').forEach(product => {
        product.onclick = () => {
            previewsContainer.style.display = 'flex';
            let name = product.getAttribute('data-name');
            previewBoxes.forEach(preview => {
                let target = preview.getAttribute('data-target');
                if (name == target) {
                    preview.classList.add('active');
                }
            });
        };
    });

    previewBoxes = previewsContainer.querySelectorAll('.preview');
    previewBoxes.forEach(close => {
        close.querySelector('.fa-times').onclick = () => {
            close.classList.remove('active');
            previewsContainer.style.display = 'none';
        };
    });

    var checkList = document.getElementById('list1');
    checkList.getElementsByClassName('anchor')[0].onclick = function(evt) {
        if (checkList.classList.contains('visible'))
            checkList.classList.remove('visible');
        else
            checkList.classList.add('visible');
    }

    for (let product of allProducts) {
        for (let ingredient of product.igredients) {
            if (!(allIngredients.includes(ingredient))) {
                allIngredients.push(ingredient)
            }
        }
    }

    filteredProducts = allProducts;
    //create a div for each ingredient and add it to the div with the class "items" 
    // for example:
    //*<li><input type="checkbox" />Apple </li>*/
    for (let ingredient of allIngredients) {
        let item = document.createElement('li');
        item.innerHTML = `<input type="checkbox" />${ingredient}`;
        document.getElementsByClassName('items')[0].appendChild(item);
    }

    //Set checkbox onclick to updateProducts
    document.querySelectorAll('.items li input').forEach(checkbox => {
        checkbox.onclick = () => {
            updateIngredients(checkbox.parentElement.innerText, checkbox.checked);
        };
    });


}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


/*function addItem(container, temPrato) {

    let image = 'https://açucarspunrun.com/wp-content/uploads/2020/06/hamBurger-buns-recipe-2-of-11-150x150.jpg';
    let name = 'Hamburger';
    let description = `
    This is item $ { num }
    `;
    let price = _.random(1000) / 100 + "$";


    container.append(Mustache.render(temPrato, { image, name, description, price }));
}

$(() => {
    const tmpl = $('#item_temPrato').html()
    const container = $('#app');

    for (let i = 0; i < 10; i++) { addItem(container, tmpl); }

    $('#add_el').click(() => {
        addItem(container, tmpl);
    })

    container.on('click', '.del_el', (e) => {
        $(e.target).closest('.item').remove();
    });
});*/

function showFilter(){
    if(document.getElementById("menu-filter").style.display=="none"){
        if(document.getElementById("PedidoEfetuado").style.display!="none"){
            document.getElementById("PedidoEfetuado").style.display="none"
        }
        document.getElementById("menu-filter").style.display="flex"
       
    }else{
        document.getElementById("menu-filter").style.display="none"
    }
    
}