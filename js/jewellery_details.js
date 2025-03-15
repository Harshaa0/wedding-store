document.addEventListener("DOMContentLoaded", function () {
    const jewelleryDetailsContainer = document.querySelector(".jewellery-details-container");

    const jewelleryItems = [
        { id: 1, name: "Royal Bridal Lehenga", price: 15999, images: ["jimg1-1.jpg", "jimg1-2.jpg", "jimg1-3.jpg"] },
        { id: 2, name: "Red Bridal Lehenga", price: 17999, images: ["jimg2-1.jpg", "jimg2-2.jpg"] },
        { id: 3, name: "Designer Bridal Saree", price: 13999, images: ["jimg3-1.jpg", "jimg3-2.jpg"] },
        { id: 4, name: "Designer Bridal Saree", price: 13999, images: ["jimg4-1.jpg"] },
        { id: 5, name: "Designer Bridal Saree", price: 13999, images: ["jimg5-1.jpg", "jimg5-2.jpg"] },
        { id: 6, name: "Designer Bridal Saree", price: 13999, images: ["jimg6-1.jpg"] },
        { id: 7, name: "Designer Bridal Saree", price: 13999, images: ["jimg7-1.jpg"] },
        { id: 8, name: "Designer Bridal Saree", price: 13999, images: ["jimg8-1.jpg", "jimg8-2.jpg"] },
        { id: 9, name: "Designer Bridal Saree", price: 13999, images: ["jimg9-1.jpg", "jimg9-2.jpg"] },
        { id: 10, name: "Designer Bridal Saree", price: 13999, images: ["jimg10-1.jpg", "jimg10-2.jpg", "jimg10-3.jpg"] }
    ];

    const urlParams = new URLSearchParams(window.location.search);
    const itemId = parseInt(urlParams.get('id'));

    const selectedItem = jewelleryItems.find(item => item.id === itemId);

    if (selectedItem) {
        jewelleryDetailsContainer.innerHTML = `
            <div class="jewellery-container">
                <div class="image-thumbnails">
                    ${selectedItem.images.map(img => `<img src="../assets/jewellery/${img}" alt="${selectedItem.name} Thumbnail">`).join('')}
                </div>

                <img id="main-image" class="main-image" src="../assets/jewellery/${selectedItem.images[0]}" alt="${selectedItem.name}">

                <div class="jewellery-details">
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
        jewelleryDetailsContainer.innerHTML = `<p>Jewellery item not found.</p>`;
    }
});
