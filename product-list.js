const url = "https://kea-alt-del.dk/t7/api/products?limit=100";

fetch(url)
  .then((res) => res.json())
  .then((data) => handleProductList(data));

// Just checking
function handleProductList(data) {
  console.log(data);
  data.forEach(showProduct);
}

function showProduct(product) {
  //Selecting template and cloning
  const temp = document.querySelector("template").content;
  const clone = temp.cloneNode(true);
  // Change stuff
  clone.querySelector("h2.productName").textContent =
    product.productdisplayname;
  clone.querySelector("p.brand").textContent = product.brandname;
  clone.querySelector("p.price").textContent = product.price + ",-";
  clone.querySelector(
    "img.listImg"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  //Selection where i want the clone
  const parent = document.querySelector("main");
  //Appending it
  parent.appendChild(clone);
}
