document.addEventListener("DOMContentLoaded", function () {
    const brideClothingDetailsContainer = document.querySelector(".bride-clothing-details-container");

    const brideClothingItems = [
        { id: 1, name: "Royal Bridal Lehenga", price: 15999, images: ["bimg1-1.jpg", "bimg1-2.jpg"] },
        { id: 2, name: "Red Bridal Lehenga", price: 17999, images: ["bimg2-1.jpg", "bimg2-2.jpg","bimg2-3.jpg","bimg2-4.jpg"] },
        { id: 3, name: "Designer Bridal Saree", price: 13999, images: ["bimg3-1.jpg", "bimg3-2.jpg","bimg3-3.jpg","bimg3-4.jpg"] },
        { id: 4, name: "Designer Bridal Saree", price: 13999, images: ["bimg4-1.jpg","bimg4-2.jpg","nimg4-3.jpg"] },
        { id: 5, name: "Designer Bridal Saree", price: 13999, images: ["bimg5-1.jpg","bimg5-2.jpg","bimg5-3.jpg"] },
        { id: 6, name: "Designer Bridal Saree", price: 13999, images: ["bimg6-1.jpg","bimg6-2.jpg","bimg6-3.jpg"] },
        { id: 7, name: "Designer Bridal Saree", price: 13999, images: ["bimg7-1.jpg","bimg7-2.jpg","bimg7-3.jpg","bimg7-4.jpg"] },
        { id: 8, name: "Designer Bridal Saree", price: 13999, images: ["bimg8-1.jpg","bimg8-2.jpg","bimg8-3.jpg"] },
        { id: 9, name: "Designer Bridal Saree", price: 13999, images: ["bimg9-1.jpg","bpg9-2.jpg","nimg9-3.jpg"] },
        { id: 10, name: "Designer Bridal Saree", price: 13999, images: ["bimg10-1.jpg","bimg10-2","bimg10-3","bimg10-4.jpg"] }
    ];

    const urlParams = new URLSearchParams(window.location.search);
    const itemId = parseInt(urlParams.get('id'));

    const selectedItem = brideClothingItems.find(item => item.id === itemId);

    if (selectedItem) {
        brideClothingDetailsContainer.innerHTML = `
            <div class="bride-clothing-container">
                <div class="image-thumbnails">
                    ${selectedItem.images.map(img => `<img src="../assets/bride_clothes/${img}" alt="${selectedItem.name} Thumbnail">`).join('')}
                </div>

                <img id="main-image" class="main-image" src="../assets/bride_clothes/${selectedItem.images[0]}" alt="${selectedItem.name}">

                <div class="bride-clothing-details">
                    <h1>${selectedItem.name}</h1>
                    <p id="price">₹${selectedItem.price}</p>
                    <p class="price-info">MRP Inclusive of all taxes</p>
                    <div class="ready-to-ship">READY TO SHIP</div>

                    <div class="delivery-method">
                        <label><input type="radio" name="delivery" checked> Home Delivery</label>
                        <label><input type="radio" name="delivery"> Store Pick-up</label>
                    </div>

                    <button class="add-to-cart">Add To Cart</button>
                </div>
            </div>
        `;

        const mainImage = document.getElementById("main-image");
        document.querySelectorAll(".image-thumbnails img").forEach(thumbnail => {
            thumbnail.addEventListener("click", function () {
                mainImage.src = this.src;
            });
        });
    } else {
        brideClothingDetailsContainer.innerHTML = `<p>clothing item not found.</p>`;
    }
});
