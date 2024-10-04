let url = "https://readallcomics.com/the-walking-dead-001/";
let text = "";
let images = [];
const re = /<img\s+[^>]*>/g;

(async () => {
  text = await (await fetch(url)).text();

  // Match all the full <img> tags from the HTML
  images = text.match(re);
  console.log(images);

  // Assuming you want to append these images to an element with id="image-container"
  const imageContainer = document.getElementById("image-container");

  images.forEach((img) => {
    // Create a temporary div element to hold the image string
    let tempDiv = document.createElement("div");
    tempDiv.innerHTML = img;

    // Extract the img element from the temporary div
    let imageElement = tempDiv.querySelector("img");

    // Append the img element to the container
    if (imageElement) {
      imageContainer.appendChild(imageElement);
    }
  });
})();
