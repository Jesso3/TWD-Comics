let url = "https://readallcomics.com/the-walking-dead-";
let proxy = "http://localhost:8080/";
let chapter = 1;
let text = "";
let images = [];
const re = /<img\s+[^>]+>/g;

// Function to fetch and display the current chapter
function loadChapter(chapter) {
  fetch(proxy + url + chapter.toString().padStart(3, "0"))
    .then((res) => res.text())
    .then((data) => {
      text = data;

      // Extract images from the fetched HTML content
      images = text.match(re);

      // Assuming you want to append these images to an element with id="image-container"
      const imageContainer = document.getElementById("image-container");

      // Clear the previous images
      imageContainer.innerHTML = "";

      if (images) {
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
      } else {
        console.log("No images found");
      }
    })
    .catch((err) => console.error(err));
}

// Load the initial chapter
loadChapter(chapter);

// Add an event listener to the "Next" button to load the next chapter
document.querySelector(".next").addEventListener("click", () => {
  chapter++; // Increment the chapter number
  loadChapter(chapter); // Load the next chapter
});

document.querySelector(".previous").addEventListener("click", () => {
  chapter--; // Increment the chapter number
  loadChapter(chapter); // Load the next chapter
});
