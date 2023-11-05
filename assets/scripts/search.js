const searchButton = document.getElementById('search-btn');
const mealList = document.getElementById('meal');

searchButton.addEventListener('click', getMealList);

function getMealList() {
  let searchInputTxt = document.getElementById('search-input').value.trim();
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputTxt}`)
    .then(response => response.json())
    .then(data => {
      let html = "";
      if (data.meals) {
        data.meals.forEach(meal => {
          html += `
            <div class="meal-item" data-id="${meal.idMeal}">
              <div class="meal-img">
                <img src="${meal.strMealThumb}" alt="food">
              </div>
              <div class="meal-name">
              <h3>${meal.strMeal}</h3>
              <div class="add" >
              <a href="../pages/meal.html?id=${meal.idMeal}" class="recipe-btn">VIEW DETAILS</a>
              </div>
          </div>
          
            </div>
          `;
        });
        mealList.classList.remove('notFound');
      } else {
        html = "Sorry, we didn't find any meal!";
        mealList.classList.add('notFound');
      }

      mealList.innerHTML = html;
    });
}

const cartItems = JSON.parse(localStorage.getItem("cart")) || [];


    const orderBadge = document.getElementById("order-badge");
    orderBadge.textContent = cartItems.length;



const filterButtons = document.querySelectorAll('.filter-btn');

searchButton.addEventListener('click', getMealList);
filterButtons.forEach(button => button.addEventListener('click', filterMealList));

getMealList();

function getMeals() {
  let searchInputTxt = document.getElementById('search-input').value.trim();
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputTxt}`)
    .then(response => response.json())
    .then(data => {
      filterAndDisplayMeals(data.meals);
    });
}

function filterMealList(event) {
  const area = event.target.getAttribute('data-area');
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    .then(response => response.json())
    .then(data => {
      filterAndDisplayMeals(data.meals);
    });
}

function filterAndDisplayMeals(meals) {
  let html = "";
  if (meals) {
    meals.forEach(meal => {
      html += `
        <div class="meal-item" data-id="${meal.idMeal}">
          <div class="meal-img">
            <img src="${meal.strMealThumb}" alt="food">
          </div>
          <div class="meal-name">
            <h3>${meal.strMeal}</h3>
            <a href="../pages/meal.html?id=${meal.idMeal}" class="recipe-btn">VIEW DETAILS</a>
          </div>
        </div>
      `;
    });
    mealList.classList.remove('notFound');
  } else {
    html = "Sorry, we didn't find any meal!";
    mealList.classList.add('notFound');
  }

  mealList.innerHTML = html;
}