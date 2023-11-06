
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
    document.querySelector(".strIngredient1").textContent=meal.strIngredient1;
    document.querySelector(".strIngredient2").textContent=meal.strIngredient2;
    document.querySelector(".strIngredient3").textContent=meal.strIngredient3;
    document.querySelector(".strIngredient4").textContent=meal.strIngredient4;
    document.querySelector(".strIngredient5").textContent=meal.strIngredient5;
    document.querySelector(".strIngredient6").textContent=meal.strIngredient6;



};

initApp()
const addToCart = async () => {
    const mealId = getMealParam("id");
    const currentMeal = await generateCurrentMeal(mealId);
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    let isFound = false;
  
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].idMeal === currentMeal.idMeal) {
        cartItems[i].quantity++;
        isFound = true;
        break;
      }
    }
  
    if (!isFound) {
      cartItems.push({...currentMeal,quantity:1});
      const orderBadge = document.getElementById("order-badge");
      orderBadge.textContent = cartItems.length;
    }
  
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

