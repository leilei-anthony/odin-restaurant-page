export function loadAboutPage() {
    const content = document.getElementById("content");
    content.innerHTML = ""; // Clear previous content if any

    const title = document.createElement("h1");
    title.innerHTML = "About Us";
    content.appendChild(title);

    const tagline = document.createElement("p");
    tagline.innerHTML = "Passionate about food. Dedicated to quality.";
    content.appendChild(tagline);

    const image = document.createElement("img");
    image.src = "https://picsum.photos/400/200?grayscale";
    image.alt = "Restaurant interior";
    content.appendChild(image);

    const aboutText = document.createElement("div");
    aboutText.classList.add("about-text");

    const paragraph1 = document.createElement("p");
    paragraph1.textContent = "Founded in 2023, our restaurant combines traditional recipes with a modern twist. We believe in using fresh, locally-sourced ingredients to deliver delicious meals that bring people together.";

    const paragraph2 = document.createElement("p");
    paragraph2.textContent = "Our mission is to create a welcoming space for everyone—from families sharing dinner to friends catching up over dessert. Quality, passion, and hospitality are at the heart of everything we do.";

    aboutText.appendChild(paragraph1);
    aboutText.appendChild(paragraph2);
    content.appendChild(aboutText);
}
