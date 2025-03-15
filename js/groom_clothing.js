document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scroll for Navigation Links
    const links = document.querySelectorAll(".nav_menue a");
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const sectionId = this.getAttribute("href").substring(1);
            const section = document.getElementById(sectionId);
            if (section) {
                window.scrollTo({
                    top: section.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Dynamic Clothing Items for Bride Section
    
    const clothingGrid = document.querySelector(".clothing");

    const clothingItems = [
        { id: 1, img: "../assets/groom_clothes/gimg1-1.jpg", name: "Royal Bridal Lehenga", desc: "Elegant embroidered lehenga with gold work.", price: 15999, images:           ["gimg1-1.jpg","gimg1-2.jpg"] },
        { id: 3, img: "../assets/groom_clothes/gimg3-1.jpg", name: "Designer Bridal Saree", desc: "Handwoven silk saree with heavy zari work.", price: 13999, images:           ["gimg3-1.jpg","gimg3-2.jpg","gimg3-3.jpg"] },
        { id: 2, img: "../assets/groom_clothes/gimg2-1.jpg", name: "Red Bridal Lehenga", desc: "Classic red bridal lehenga with intricate design.", price: 17999, images:       ["gimg2-1.jpg","gimg2-2.jpg","gimg2-3.jpg"] },
        { id: 4, img: "../assets/groom_clothes/gimg4-1.jpg", name: "Designer Bridal Saree", desc: "Handwoven silk saree with heavy zari work.", price: 13999, images:           ["gimg4-1.jpg","gimg4-2.jpg","gimg4-3.jpg"] },
        { id: 5, img: "../assets/groom_clothes/gimg5-1.jpg", name: "Designer Bridal Saree", desc: "Handwoven silk saree with heavy zari work.", price: 13999, images:           ["gimg5-1.jpg","gimg5-2.jpg","gimg5-3.jpg"] },
        { id: 6, img: "../assets/groom_clothes/gimg6-1.jpg", name: "Designer Bridal Saree", desc: "Handwoven silk saree with heavy zari work.", price: 13999, images:           ["gimg6-1.jpg","gimg6-2.jpg","gimg6-3.jpg"] },
        { id: 7, img: "../assets/groom_clothes/gimg7-1.jpg", name: "Designer Bridal Saree", desc: "Handwoven silk saree with heavy zari work.", price: 13999, images:           ["gimg7-1.jpg","gimg7-2.jpg","gimg7-3.jpg"] },
        { id: 8, img: "../assets/groom_clothes/gimg8-1.jpg", name: "Designer Bridal Saree", desc: "Handwoven silk saree with heavy zari work.", price: 13999, images:           ["gimg8-1.jpg"] },
        { id: 9, img: "../assets/groom_clothes/gimg9-1.jpg", name: "Designer Bridal Saree", desc: "Handwoven silk saree with heavy zari work.", price: 13999, images:           ["gimg9-1.jpg","gimg9-2.jpg","gimg9-3.jpg"] },
       { id: 10, img: "../assets/groom_clothes/gimg10-1.jpg", name: "Designer Bridal Saree", desc: "Handwoven silk saree with heavy zari work.", price: 13999, images:          ["gimg10-1.jpg","gimg10-2","gimg10-3","gimg10-4.jpg"] }
    ];

    clothingItems.forEach(item => {
        let div = document.createElement("div");
        div.classList.add("clothing-item");
        div.innerHTML = `
        <a href="../html/groom_clothing_details.html?id=${item.id}">
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.desc}</p>
            <div class="view-details"></div> <!-- The animated line -->
        </a>
        `;
        clothingGrid.appendChild(div);
    });
});
