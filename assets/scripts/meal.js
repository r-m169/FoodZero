
const initApp = async () => {
    const mealId = getMealParam("id");
    const currentMeal = await generateCurrentMeal(mealId);
    displayMealDetails(currentMeal);
}
const getMealParam = (param) => {
    const queryString = window.location.search;
    const urlParam = new URLSearchParams(queryString);
    const desiredParam = urlParam.get(param);

    return desiredParam;
}
const generateCurrentMeal = async (id) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const curentMeal = await response.json();

    return curentMeal.meals[0];
}
const displayMealDetails = (meal = {}) => {
    document.querySelector(".meal-pic").src = meal.strMealThumb;
    document.querySelector("#meal-title").textContent = meal.strMeal;
    document.querySelector("#meal-category").textContent = meal.strCategory;
    document.querySelector(".meals-details").classList.remove("d-none");
        

};

initApp()
const addToCart = async () => {
    // Get the current meal from the page
    const mealId = getMealParam("id");
    const currentMeal = await generateCurrentMeal(mealId);

    // Get the existing cart items from local storage or initialize an empty array
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    // Add the current meal to the cart
    cartItems.push(currentMeal);

    // Update the cart items in local storage
    localStorage.setItem("cart", JSON.stringify(cartItems));

    // Update the order badge count
    const orderBadge = document.getElementById("order-badge");
    orderBadge.textContent = cartItems.length;

};

