document.addEventListener("DOMContentLoaded", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContainer = document.querySelector(".cart-items");
    const cartTotal = document.getElementById("cart-total");

    function updateCart() {
        cartContainer.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            let cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="item-info">
                    <h4>${item.name}</h4>
                    <p>₹${item.price}</p>
                </div>
                <div class="quantity">
                    <button class="decrease" data-index="${index}">-</button>
                    <input type="number" value="${item.quantity}" min="1" data-index="${index}">
                    <button class="increase" data-index="${index}">+</button>
                </div>
                <button class="remove-btn" data-index="${index}">Remove</button>
            `;
            cartContainer.appendChild(cartItem);
            total += item.price * item.quantity;
        });

        cartTotal.textContent = total;
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    cartContainer.addEventListener("click", (event) => {
        let index = event.target.dataset.index;

        if (event.target.classList.contains("remove-btn")) {
            cart.splice(index, 1);
        } else if (event.target.classList.contains("increase")) {
            cart[index].quantity++;
        } else if (event.target.classList.contains("decrease")) {
            if (cart[index].quantity > 1) {
                cart[index].quantity--;
            }
        }
        updateCart();
    });

    cartContainer.addEventListener("change", (event) => {
        let index = event.target.dataset.index;
        if (event.target.type === "number") {
            let value = parseInt(event.target.value);
            if (value > 0) {
                cart[index].quantity = value;
            } else {
                cart[index].quantity = 1;
            }
        }
        updateCart();
    });

    updateCart();
});
