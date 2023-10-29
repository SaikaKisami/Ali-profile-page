const toggleText = () => {
  // get btn
  const btn = document.getElementById("textBtn");

  // get table
  const table = document.getElementById("toShow");

  // get the span
  const spanText = document.getElementById("spanText");

  table.style.display === "none"
    ? (table.style.display = "table")
    : (table.style.display = "none");

  table.style.display === "none"
    ? // set to show more
      (spanText.innerText = "Show All")
    : (spanText.innerText = "Show Less");
};

const toggleImage = () => {
  // get the image div
  const imageDiv = document.getElementById("imageDiv");

  // get the span
  const imageSpan = document.getElementById("imageSpan");

  imageDiv.style.display === "none"
    ? (imageDiv.style.display = "block")
    : (imageDiv.style.display = "none");
};
