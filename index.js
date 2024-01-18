document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    for (let [name, value] of formData) {
      console.log(`${name} = ${value}`);
    }
  });
});
