//https://kea-alt-del.dk/t7/api/products/2081

const url = "https://kea-alt-del.dk/t7/api/products/5332";

fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".productName").textContent =
    product.productdisplayname;
  document.querySelector(".ID").textContent = product.id;
  document.querySelector(".section-brand").textContent = product.fashiontype;
  document.querySelector(
    "img.productImg"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
}
