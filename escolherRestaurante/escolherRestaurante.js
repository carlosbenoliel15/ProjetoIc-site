function saveRestaurant(restaurant) {
    sessionStorage.setItem("restaurant", JSON.stringify(restaurant));
    window.location.href = "../Home/digitalEmployee.html";
}