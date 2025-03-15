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
        { id: 1, img: "../assets/bride_clothes/bimg1-1.jpg", name: "Royal Bridal Lehenga", desc: "Elegant embroidered lehenga with gold work.", price: 15999, images: ["bimg1-1.jpg", "bimg1-2.jpg"] },
        { id: 3, img: "../assets/bride_clothes/bimg3-1.jpg", name: "Designer Bridal Saree", desc: "Handwoven silk saree with heavy zari work.", price: 13999, images: ["bimg3-1.jpg", "bimg3-2.jpg","bimg3-3.jpg","bimg3-4.jpg"] },
        { id: 2, img: "../assets/bride_clothes/bimg2-1.jpg", name: "Red Bridal Lehenga", desc: "Classic red bridal lehenga with intricate design.", price: 17999, images: ["bimg2-1.jpg", "bimg2-2.jpg","bimg2-3.jpg","bimg2-4.jpg"] },
        { id: 4, img: "../assets/bride_clothes/bimg4-1.jpg", name: "Designer Bridal Saree", desc: "Handwoven silk saree with heavy zari work.", price: 13999, images: ["bimg4-1.jpg","bimg4-2.jpg","nimg4-3.jpg"] },
        { id: 5, img: "../assets/bride_clothes/bimg5-1.jpg", name: "Designer Bridal Saree", desc: "Handwoven silk saree with heavy zari work.", price: 13999, images: ["bimg5-1.jpg","bimg5-2.jpg","bimg5-3.jpg"] },
        { id: 6, img: "../assets/bride_clothes/bimg6-1.jpg", name: "Designer Bridal Saree", desc: "Handwoven silk saree with heavy zari work.", price: 13999, images: ["bimg6-1.jpg","bimg6-2.jpg","bimg6-3.jpg"] },
        { id: 7, img: "../assets/bride_clothes/bimg7-1.jpg", name: "Designer Bridal Saree", desc: "Handwoven silk saree with heavy zari work.", price: 13999, images: ["bimg7-1.jpg","bimg7-2.jpg","bimg7-3.jpg","bimg7-4.jpg"] },
        { id: 8, img: "../assets/bride_clothes/bimg8-1.jpg", name: "Designer Bridal Saree", desc: "Handwoven silk saree with heavy zari work.", price: 13999, images: ["bimg8-1.jpg","bimg8-2.jpg","bimg8-3.jpg"] },
        { id: 9, img: "../assets/bride_clothes/bimg9-1.jpg", name: "Designer Bridal Saree", desc: "Handwoven silk saree with heavy zari work.", price: 13999, images: ["bimg9-1.jpg","bpg9-2.jpg","nimg9-3.jpg"] },
        { id: 10, img: "../assets/bride_clothes/bimg10-1.jpg", name: "Designer Bridal Saree", desc: "Handwoven silk saree with heavy zari work.", price: 13999, images: ["bimg10-1.jpg","bimg10-2","bimg10-3","bimg10-4.jpg"] }
    ];

    clothingItems.forEach(item => {
        let div = document.createElement("div");
        div.classList.add("clothing-item");
        div.innerHTML = `
        <a href="../html/bride_clothing_details.html?id=${item.id}">
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.desc}</p>
            <div class="view-details"></div> <!-- The animated line -->
        </a>
        `;
        clothingGrid.appendChild(div);
    });
});
