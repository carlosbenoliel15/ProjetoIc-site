//Class for products
class Product {
    constructor(name, price, igredients, categoryId, description,allergens,image) {
        this.name = name;
        this.price = price;
        this.igredients = igredients;
        this.description = description;
        this.image = image;
        this.calories = calories;
        this.categoryId = categoryId; //0 Prato 1 drink 2 dessert 3 entree 4 appetizer 5 Soupa 
        this.allergens=allergens;
    }
}
//Product examples

let prods=[ //each with at least 5 ingredients
    new Product("queijoburger", 10, ["bread","ketchup","mustarda","cebolas","pickles","cheddar chesse","carne"], 0, "A classic queijoburger", ["glúten,lactose"],"images/queijoburger.jpg"),
    new Product("Fries", 5, ["batataes","sal","oil",], 1, "Fries", "images/fries.jpg"),
];


