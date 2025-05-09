export function loadMenuPage() {
    const content = document.getElementById("content");
    content.innerHTML = ""; // Clear previous content if any

    const title = document.createElement("h1");
    title.innerHTML = "Menu";
    content.appendChild(title);

    const tagline = document.createElement("p");
    tagline.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
    content.appendChild(tagline);

    const image = document.createElement("img");
    image.src = "https://picsum.photos/400/200";
    image.alt = "Delicious food";
    content.appendChild(image);

    const menuSection = document.createElement("div");
    menuSection.classList.add("menu-section");

    const menuItems = [
        { name: "Margherita Pizza", description: "Classic pizza with tomato, mozzarella, and basil.", price: "$8.99" },
        { name: "Caesar Salad", description: "Fresh romaine, parmesan, croutons, and Caesar dressing.", price: "$6.50" },
        { name: "Spaghetti Bolognese", description: "Pasta with rich meat sauce and Italian herbs.", price: "$10.00" },
        { name: "Tiramisu", description: "Traditional Italian dessert with mascarpone and coffee.", price: "$5.00" },
    ];

    menuItems.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("menu-item");

        const itemName = document.createElement("h3");
        itemName.textContent = item.name;
        itemDiv.appendChild(itemName);

        const itemDesc = document.createElement("p");
        itemDesc.textContent = item.description;
        itemDiv.appendChild(itemDesc);

        const itemPrice = document.createElement("span");
        itemPrice.textContent = item.price;
        itemDiv.appendChild(itemPrice);

        menuSection.appendChild(itemDiv);
    });

    content.appendChild(menuSection);
}
