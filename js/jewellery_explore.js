
// document.addEventListener("DOMContentLoaded", function () {
//     // Smooth Scroll for Navigation Links
//     const links = document.querySelectorAll(".nav_menue a");
//     links.forEach(link => {
//         link.addEventListener("click", function (e) {
//             e.preventDefault();
//             const sectionId = this.getAttribute("href").substring(1);
//             const section = document.getElementById(sectionId);
//             if (section) {
//                 window.scrollTo({
//                     top: section.offsetTop - 50,
//                     behavior: "smooth"
//                 });
//             }
//         });
//     });

//     // Dynamic Clothing Items for Bride Section
//     const jewelleryGrid = document.querySelector(".jewellery");

//     const jewelleryItems = [
//         // { img: "./assets/jewellery/img1.jpg", name: "Royal Bridal Lehenga", desc: "Elegant embroidered lehenga with gold work." },
//         { img: "../assets/jewellery/img1.jpg", name: "Royal Bridal Lehenga", desc: "Elegant embroidered lehenga with gold work." },
//         { img: "../assets/jewellery/img2.jpg", name: "Red Bridal Lehenga", desc: "Classic red bridal lehenga with intricate design." },
//         { img: "../assets/jewellery/img3.jpg", name: "Designer Bridal Saree", desc: "Handwoven silk saree with heavy zari work." },
//         { img: "../assets/jewellery/img4.jpg", name: "Banarasi Bridal Saree", desc: "Traditional Banarasi saree with golden patterns." },
//         { img: "../assets/jewellery/img5.jpg", name: "Lace Wedding Gown", desc: "Elegant wedding gown with lace embroidery." },
//         { img: "../assets/jewellery/img6.jpg", name: "Princess Bridal Gown", desc: "White princess gown with a modern touch." },
//         { img: "../assets/jewellery/img7.jpg", name: "Bridal Salwar Kameez", desc: "Graceful and stylish with heavy embroidery." },
//         { img: "../assets/jewellery/img8.jpg", name: "Red & Gold Salwar Suit", desc: "A perfect blend of tradition and style." },
//         { img: "../assets/jewellery/img9.jpg", name: "Golden Bridal Anarkali", desc: "Classic golden Anarkali for wedding receptions." },
//         { img: "../assets/jewellery/img10.jpg", name: "Bridal Anarkali Suit", desc: "Heavy Anarkali suit for an elegant bridal look." },
//     ];

//     jewelleryItems.forEach(item => {
//         let div = document.createElement("div");
//         div.classList.add("jewellery-item");
//         div.innerHTML = `
//             <img src="${item.img}" alt="${item.name}">
//             <h3>${item.name}</h3>
//             <p>${item.desc}</p>
//             <div class="view-details"></div> <!-- The animated line -->
//         `;
//         jewelleryGrid.appendChild(div);
//     });
// });




document.addEventListener("DOMContentLoaded", function () {
    const jewelleryGrid = document.querySelector(".jewellery");

    const jewelleryItems = [
        { id: 1, img: "../assets/jewellery/jimg1-1.jpg", name: "Royal Bridal Lehenga", desc: "Elegant embroidered lehenga with gold work.", price: 15999, images: ["jimg1-1.jpg", "jimg1-2.jpg", "jimg1-3.jpg"] },
        { id: 2, img: "../assets/jewellery/jimg2-1.jpg", name: "Red Bridal Lehenga", desc: "Classic red bridal lehenga with intricate design.", price: 17999, images: ["jimg2-1.jpg", "jimg2-2.jpg"] },
        { id: 3, img: "../assets/jewellery/jimg3-1.jpg", name: "Designer Bridal Saree", desc: "Handwoven silk saree with heavy zari work.", price: 13999, images: ["jimg3-1.jpg", "jimg3-2.jpg"] },
        { id: 4, img: "../assets/jewellery/jimg4-1.jpg", name: "Designer Bridal Saree", desc: "Handwoven silk saree with heavy zari work.", price: 13999, images: ["jimg4-1.jpg"] },
        { id: 5, img: "../assets/jewellery/jimg5-1.jpg", name: "Designer Bridal Saree", desc: "Handwoven silk saree with heavy zari work.", price: 13999, images: ["jimg5-1.jpg","jimg5-2.jpg"] },
        { id: 6, img: "../assets/jewellery/jimg6-1.jpg", name: "Designer Bridal Saree", desc: "Handwoven silk saree with heavy zari work.", price: 13999, images: ["jimg6-1.jpg"] },
        { id: 7, img: "../assets/jewellery/jimg7-1.jpg", name: "Designer Bridal Saree", desc: "Handwoven silk saree with heavy zari work.", price: 13999, images: ["jimg7-1.jpg"] },
        { id: 8, img: "../assets/jewellery/jimg8-1.jpg", name: "Designer Bridal Saree", desc: "Handwoven silk saree with heavy zari work.", price: 13999, images: ["jimg8-1.jpg","jimg8-2.jpg"] },
        { id: 9, img: "../assets/jewellery/jimg9-1.jpg", name: "Designer Bridal Saree", desc: "Handwoven silk saree with heavy zari work.", price: 13999, images: ["jimg9-1.jpg","jpg9-2.jpg"] },
        { id: 10, img: "../assets/jewellery/jimg10-1.jpg", name: "Designer Bridal Saree", desc: "Handwoven silk saree with heavy zari work.", price: 13999, images: ["jimg10-1.jpg","jimg10-2","jimg10-3"] }
    ];

    jewelleryItems.forEach(item => {
        let div = document.createElement("div");
        div.classList.add("jewellery-item");
        div.innerHTML = `
            <a href="../html/jewellery_details.html?id=${item.id}">
                <img src="${item.img}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.desc}</p>
                <div class="view-details"></div>
            </a>
        `;
        jewelleryGrid.appendChild(div);
    });
});
