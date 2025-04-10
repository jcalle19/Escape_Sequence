const imageSources = [
  "assets/trail.jpeg",
  "assets/lakesunset.jpeg",
  "assets/cabin.jpeg",
  "assets/doe.jpeg",
  "assets/starrynight.jpeg",
];

function addThumbnail(imageSource) {
  // 1.1 Create the element
  let thumbNail = document.createElement("img");
  let TN_div = document.getElementById("thumbnail-container");
  // 1.2 Customize the element
  thumbNail.setAttribute("src", imageSource);
  thumbNail.setAttribute("class", "thumbnail");
  // 1.3 Append the element
  TN_div.appendChild(thumbNail);
  // 1.4 Add the onclick
  TN_div.addEventListener("click", (e) => {
    let element = document.getElementById("fullsize-image");
    element.setAttribute("src", e.target.getAttribute("src"));
  });
}

function addAllThumbnails() {
  // 2.1 Loop through imageSources
  for (let i = 0; i < imageSources.length; i++) {
    // 2.2 Call addThumbnail each iteration
    addThumbnail(imageSources[i]);
  }
}

// 2.3 Call addAllThumbnails
addAllThumbnails();

// LevelUp Display the first image on page load
window.addEventListener("DOMContentLoaded", () => {
  const img = document.getElementById("fullsize-image");
  img.setAttribute("src", imageSources[0]);
});
