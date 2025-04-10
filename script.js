function changeModel(imagePath) {
  const modelsSection = document.querySelector(".models-section");
  modelsSection.style.backgroundImage = `url(${imagePath})`;
}

const carSelect = document.querySelector(".car-select");
const carPreview = document.querySelector(".car-preview");
const carImage = document.getElementById("car-image");
const colorButtons = document.querySelectorAll(".color-button");

// Mapping: Car Model + Color → Image path
const carImages = {
  "Rolls Royce Ghost": {
    white: "media/white.jpeg",
    black: "media/black.jpeg",
    red: "media/red.jpeg",
    blue: "media/blue.jpeg",
  },
  "Porsche Carrera GT": {
    white: "media/white.jpeg",
    black: "media/black.jpeg",
    red: "media/red.jpeg",
    blue: "media/blue.jpeg",
  },
  "BMW Sedan": {
    white: "media/white.jpeg",
    black: "media/black.jpeg",
    red: "media/red.jpeg",
    blue: "media/blue.jpeg",
  },
  "Toyota Supra": {
    white: "media/white.jpeg",
    black: "media/black.jpeg",
    red: "media/red.jpeg",
    blue: "media/blue.jpeg",
  },
};

// Reset when selecting car
carSelect.addEventListener("change", () => {
  carImage.style.display = "none"; // Hide image again
});

// When clicking color button
colorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCar = carSelect.value;
    const selectedColor = button.getAttribute("data-color");

    if (selectedCar && selectedColor && carImages[selectedCar]) {
      // Set the new image source
      carImage.src = carImages[selectedCar][selectedColor];
      carImage.style.display = "block";
      carPreview.style.backgroundColor = "white"; // Set a clean background if needed
    }
  });
});
