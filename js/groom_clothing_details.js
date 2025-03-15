document.addEventListener("DOMContentLoaded", function () {
    const groomClothingDetailsContainer = document.querySelector(".groom-clothing-details-container");

    const groomClothingItems = [
        { id: 1, name: "Royal Bridal Lehenga", price: 15999, images: ["gimg1-1.jpg", "gimg1-2.jpg","gimg1-3.jpg"] },
        { id: 2, name: "Red Bridal Lehenga", price: 17999, images: ["gimg2-1.jpg", "gimg2-2.jpg","gimg2-3.jpg"] },
        { id: 3, name: "Designer Bridal Saree", price: 13999, images: ["gimg3-1.jpg", "gimg3-2.jpg","gimg3-3.jpg"] },
        { id: 4, name: "Designer Bridal Saree", price: 13999, images: ["gimg4-1.jpg","gimg4-2.jpg","gimg4-3.jpg"] },
        { id: 5, name: "Designer Bridal Saree", price: 13999, images: ["gimg5-1.jpg","gimg5-2.jpg","gimg5-3.jpg"] },
        { id: 6, name: "Designer Bridal Saree", price: 13999, images: ["gimg6-1.jpg","gimg6-2.jpg","gimg6-3.jpg"] },
        { id: 7, name: "Designer Bridal Saree", price: 13999, images: ["gimg7-1.jpg","gimg7-2.jpg","gimg7-3.jpg"] },
        { id: 8, name: "Designer Bridal Saree", price: 13999, images: ["bimg8-1.jpg"] },
        { id: 9, name: "Designer Bridal Saree", price: 13999, images: ["gimg9-1.jpg","gpg9-2.jpg","gimg9-3.jpg"] },
        { id: 10, name: "Designer Bridal Saree", price: 13999, images: ["gimg10-1.jpg","gimg10-2","gimg10-3","gimg10-4.jpg"] }
    ];

    const urlParams = new URLSearchParams(window.location.search);
    const itemId = parseInt(urlParams.get('id'));

    const selectedItem = groomClothingItems.find(item => item.id === itemId);

    if (selectedItem) {
        groomClothingDetailsContainer.innerHTML = `
            <div class="groom-clothing-container">
                <div class="image-thumbnails">
                    ${selectedItem.images.map(img => `<img src="../assets/groom_clothes/${img}" alt="${selectedItem.name} Thumbnail">`).join('')}
                </div>

                <img id="main-image" class="main-image" src="../assets/groom_clothes/${selectedItem.images[0]}" alt="${selectedItem.name}">

                <div class="groom-clothing-details">
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
        groomClothingDetailsContainer.innerHTML = `<p>clothing item not found.</p>`;
    }
});
