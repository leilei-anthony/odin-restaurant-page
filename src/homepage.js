export function loadHomePage() {
    const content = document.getElementById("content");
    content.innerHTML = ""; // Clear previous content if any

    const title = document.createElement("h1");
    title.innerHTML = "Welcome to Rendezvous!";
    content.appendChild(title);

    const tagline = document.createElement("p");
    tagline.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
    content.appendChild(tagline);

    const image = document.createElement("img");
    image.src = "https://picsum.photos/400/200";
    image.alt = "image";
    content.appendChild(image);
}