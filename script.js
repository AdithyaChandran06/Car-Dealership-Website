function changeModel(imagePath) {
  const modelsSection = document.querySelector(".models-section");
  modelsSection.style.backgroundImage = `url(${imagePath})`;
}

const carSelect = document.querySelector(".car-select");
const carPreview = document.querySelector(".car-preview");
const carImage = document.getElementById("car-image");
const colorButtons = document.querySelectorAll(".color-button");
let selectedCar = "";
let selectedColor = "white";

// Mapping: Car Model + Color → Image path
const carImages = {
  "Rolls Royce Ghost": {
    white: "/media/white.jpeg",
    black: "/media/black.jpeg",
    red: "/media/red.jpeg",
    blue: "/media/blue.jpeg",
  },
  "Porsche Carrera GT": {
    white: "/media/white.jpeg",
    black: "/media/black.jpeg",
    red: "/media/red.jpeg",
    blue: "/media/blue.jpeg",
  },
  "BMW Sedan": {
    white: "/media/white.jpeg",
    black: "/media/black.jpeg",
    red: "/media/red.jpeg",
    blue: "/media/blue.jpeg",
  },
  "Toyota Supra": {
    white: "/media/white.jpeg",
    black: "/media/black.jpeg",
    red: "/media/red.jpeg",
    blue: "/media/blue.jpeg",
  },
};

function renderPreview() {
  if (!selectedCar || !carImages[selectedCar]) {
    return;
  }

  carImage.src = carImages[selectedCar][selectedColor] || carImages[selectedCar].white;
  carImage.style.display = "block";
  carPreview.style.backgroundColor = "white";
}

function selectCar(carName) {
  selectedCar = carName;
  carSelect.value = carName;
  renderPreview();
}

carSelect.addEventListener("change", () => {
  selectedCar = carSelect.value;
  selectedColor = "white";
  renderPreview();
});

// When clicking color button
colorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedColor = button.getAttribute("data-color");

    renderPreview();
  });
});
