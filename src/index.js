const toggleText = () => {
  // get btn
  const btn = document.getElementById("textBtn");

  // get table
  const table = document.getElementById("toShow");

  const spanText = document.getElementById("spanText");

  const extraRows = document.querySelectorAll(".extraRow");

  if (
    extraRows[0].style.display === "none" ||
    extraRows[0].style.display === ""
  ) {
    extraRows.forEach((row) => (row.style.display = "table-row"));
    spanText.innerText = "Show Less";
  } else {
    extraRows.forEach((row) => (row.style.display = "none"));
    spanText.innerText = "Show All";
  }
};

// Initial setup to show only the first 10 rows
window.onload = () => {
  const extraRows = document.querySelectorAll(".extraRow");
  const extraImages = document.querySelectorAll(".extraImages");
  extraRows.forEach((row) => (row.style.display = "none"));
  extraRows.forEach((row) => (row.style.display = "none"));
};

const toggleImage = () => {
  // get the image div
  const imageDiv = document.getElementById("imageDiv");

  // get the span
  const imageSpan = document.getElementById("imageSpan");

  const extraImages = document.querySelectorAll(".extraImages")
   if (
     extraImages[0].style.display === "none" ||
     extraImages[0].style.display === ""
   ) {
     extraImages.forEach((row) => (row.style.display = "table-row"));
     imageSpan.innerText = "Show Less";
   } else {
     extraImages.forEach((row) => (row.style.display = "none"));
     imageSpan.innerText = "Show All";
   }

}
