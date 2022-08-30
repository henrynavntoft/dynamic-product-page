const url = "https://kea-alt-del.dk/t7/api/brands";

fetch(url)
  .then((res) => res.json())
  .then((data) => handleBrandList(data));

// Just checking
function handleBrandList(data) {
  console.log(data);
  data.forEach(showBrand);
}

function showBrand(brand) {
  //Selecting template and cloning
  const temp = document.querySelector("template").content;
  const clone = temp.cloneNode(true);
  // Change stuff
  clone.querySelector("h2.brand").textContent = brand.brandname;
  //Selection where i want the clone
  const parent = document.querySelector("main");
  //Appending it
  parent.appendChild(clone);
}
