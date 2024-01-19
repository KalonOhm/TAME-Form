document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");

  const wordCount = document.getElementById("bio");
  const displayCount = document.getElementById("word-count");
  const wordsLeft = document.getElementById("words-left");

  wordCount.addEventListener("keyup", function () {
    let words = 0;
    if (this.value.match(/\S+/g) != null) {
      words = this.value.match(/\S+/g).length;
    }

    if (words > 500) {
      let trimmed = this.value.split(/\s+/, 500).join(" ");
      this.value = trimmed + " ";
    } else {
      displayCount.textContent = words;
      wordsLeft.textContent = 500 - words;
    }
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    for (let [name, value] of formData) {
      console.log(`${name} = ${value}`);
    }
  };

  const handleImagePreview = (e) => {
    const imageUpload = e.target.files[0];

    if (!imageUpload.type.startsWith("image/")) {
      alert("Please upload an image file");
      e.target.value = "";
      return;
    }

    if (imageUpload.size > 2000000) {
      alert("Please upload an image smaller than 2MB");
      e.target.value = "";
      return;
    }

    if (imageUpload) {
      const imgSrc = URL.createObjectURL(imageUpload);

      const imagePreview = document.getElementById("preview-selected-image");

      imagePreview.src = imgSrc;

      imagePreview.style.display = "block";
    }
  };

  form.addEventListener("submit", handleFormSubmit);
  document
    .getElementById("photo")
    .addEventListener("change", handleImagePreview);
});
