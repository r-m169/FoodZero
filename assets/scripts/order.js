const displayCartItems = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    const cartList = document.getElementById("cart-items");
    let totalPrice = 0;

    if (cartItems && cartItems.length > 0) {
        cartList.innerHTML = "";

        cartItems.forEach(item => {
            const existingCard = document.getElementById(`cart-item-${item.idMeal}`);

            const cartItemDiv = document.createElement("div");
            cartItemDiv.id = `cart-item-${item.idMeal}`;
            cartItemDiv.classList.add("meals-details", "container-fluid", "d-flex", "justify-content-center", "align-items-center");
            cartItemDiv.innerHTML = `
    
            <div class="card mb-3" >
                <div class="row g-0">
                    <div class="image col-md-4">
                        <img src="${item.strMealThumb}" class="img-fluid rounded-start meal-pic" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title" id="meal-title">${item.strMeal}</h5>
                            <p class="card-text strCategory" id="meal-category">${item.strCategory}</p>
                            <p class="card-text price" id="meal-price">$${10 * item.quantity}</p>
                            <div class="quantity">
                              <button class="btn-outline-secondary" onclick="decreaseQuantity(${item.idMeal})">-</button>
                              <span id="quantity-${item.idMeal}">${item.quantity}</span>
                              <button class=" btn-outline-secondary" onclick="increaseQuantity(${item.idMeal})">+</button>
                            </div>
                            <br/>
                            <button class="delete" onclick="removeItem(${item.idMeal})">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
            cartList.appendChild(cartItemDiv);

            const itemPrice = 10 * parseInt(item.quantity);
            totalPrice += itemPrice;
        });
        //   const totalPriceElement = document.createElement("p");
        //   totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
        //   cartList.appendChild(totalPriceElement);

    } else {
        cartList.innerHTML = "Your cart is empty";
        cartList.style.display = "flex";
        cartList.style.justifyContent = "center";
        cartList.style.alignItems = "center";
        cartList.style.flexDirection = "column";

        var image = document.createElement("img");
        image.src = "../assets/images/empty_cart.png";
        image.alt = "Cart Image";
        image.width = 100; // Set the width of the image
        image.height = 100; // Set the height of the image


        cartList.appendChild(image);

    }
};
const increaseQuantity = (itemId) => {
    const quantityElement = document.getElementById(`quantity-${itemId}`);
    let quantity = parseInt(quantityElement.textContent);
    quantity++;
    quantityElement.textContent = quantity;

    const priceElement = document.getElementById(`cart-item-${itemId}`).querySelector(".price");
    const price = 10;
    const totalPrice = price * quantity;
    priceElement.textContent = `$${totalPrice}`;
};

const decreaseQuantity = (itemId) => {
    const quantityElement = document.getElementById(`quantity-${itemId}`);
    let quantity = parseInt(quantityElement.textContent);
    if (quantity >= 1) {
        quantity--;
        quantityElement.textContent = quantity;

        // const priceElement = document.getElementById(`cart-item-${itemId}`).querySelector(".price");
        // const price = 10; 
        // const totalPrice = price * quantity;
        // priceElement.textContent = `$${totalPrice}`;
    } else if (quantity == 0) {
        alert('Are you sure that you want to remove this item ?');
        removeItem(itemId)
    }
    // else {
    //     removeItem(itemId);
    // }
};

const removeItem = (itemId) => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCartItems = cartItems.filter(item => item.id !== itemId);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));

    const cartItem = document.getElementById(`cart-item-${itemId}`);
    if (cartItem) {
        cartItem.remove();
        localStorage.removeItem('cart')
    }

    const orderBadge = document.getElementById("order-badge");
    orderBadge.textContent = updatedCartItems.length;
};

displayCartItems();

const checkout = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const phone = '+96891787852';
    let message = "Your order details:\n";
    let totalPrice = 0;

    if (cartItems.length === 0) {
        swal({
            title: "Your cart is empty",
            icon: "error",
        });
        return;
    }

    cartItems.forEach(item => {
        message += `${item.strMeal}: ${item.quantity}\n`;
        const itemPrice = 10 * parseInt(item.quantity);
        totalPrice += itemPrice;
    });

    message += `\n Total price: $${totalPrice.toFixed(2)}`;

    swal({
        title: "Are you sure?",
        text: "Your order will be sent to the system",
        icon: "warning",
        buttons: true,
        dangerMode: false,
    }).then((willSubmit) => {
        if (willSubmit) {
            window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
            clearCart();
            swal("Checkout successful!", {
                icon: "success",
            });
        } else {
            swal("Checkout canceled", {
                icon: "info",
            });
        }
    });
};


const clearCart = () => {
    localStorage.removeItem("cart");

    const cartList = document.getElementById("cart-items");
    cartList.innerHTML = "Your cart is empty.";

    const orderBadge = document.getElementById("order-badge");
    orderBadge.textContent = "0";
};

const checkoutButton = document.getElementById("checkout-button");
checkoutButton.addEventListener("click", checkout);

const clearCartButton = document.getElementById("clear-cart-button");
clearCartButton.addEventListener("click", clearCart);
