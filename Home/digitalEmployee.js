let lastClickedIndex = 0;

function openAskProducts(categoryIndex){
    //Open new page only if the categoryIndex is the same as the last clicked
    if(categoryIndex == lastClickedIndex){
    window.location.href = "askProducts.html?category=" + categoryIndex;
    }
    //Set the last clicked index to the current category index
    lastClickedIndex = categoryIndex;
}