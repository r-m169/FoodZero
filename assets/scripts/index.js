// (function () {
//   fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
//     .then((res) => res.json())
//     .then((data) => displayMeals(data));

//   const displayMeals = (meals) => {
//     const mealsContainer = document.querySelector(".meals-container");

//     meals.meals.forEach((meal) => {
//       const mealDiv = document.createElement("div");
//       mealDiv.className = "col-12 col-sm-6 col-md-4 col-lg-3 p-2";
//       mealDiv.innerHTML = `
//         <div class="card h-100">
//           <img class="card-img-top aspect-ratio-1 object-fit-cover" src="${meal.strMealThumb}" alt="Card image cap">
//           <div class="card-body">
//             <h5 class="card-title">${meal.strMeal}</h5>
//             <p class="card-text">${meal.strIngredient1}</p>
//             <a href="./profile/?id=${meal.idMeal}" class="btn1 btn-primary">Read more</a>
//           </div>
//         </div>
//       `;

//       mealsContainer.appendChild(mealDiv);
//     });
//   };
// })();
 