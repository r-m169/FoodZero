
const getMealParam = (param)=>{
    const queryString = window.location.search;
    const urlParam = new URLSearchParams(queryString);
    const desiredParam = urlParam.get(param);

    return desiredParam;
}
const generateCurrentMeal = async (idMeal)=>{
    const response = await fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${idMeal}`);
    const curentMeal = await response.json();
    return curentMeal.meals;
}
const displayMealDetails = (meal = {})=>{
    document.querySelector('.meal-pic').src = meal.strMealThumb;
    document.querySelector('.card-title').textContent = meal.strMeal;
    document.querySelector('.strCategory').textContent = meal.strCategory;
    
}
const initApp = async()=>{
    const mealId = getMealParam("idMeal");
    const currentMeal = await generateCurrentMeal(mealId);
    displayMealDetails(currentMeal);
}
initApp()
