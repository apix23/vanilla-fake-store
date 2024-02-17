const URL = "https://fakestoreapi.com/products/";
const productsContainerEl = document.querySelector(".products-container");

const fakeData = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
];

const getAllCategories = (products) => [...new Set(products.map((product) => product.category))];

const getProductsFilterByCategory = (category, products) => {
  return products.filter((product) => product.category === category);
};

fetch(URL)
  .then((response) => response.json())
  .then((data) => {});

const createProductImage = (src) => {
  const imageEl = document.createElement("img");
  imageEl.src = src;
  return imageEl;
};

const createProductTitle = (title) => {
  const titleEl = document.createElement("h2");
  titleEl.textContent = title;
  return titleEl;
};

const createProductPrice = (price) => {
  const priceEl = document.getElementById("product-price");
  priceEl.classList.add("product-price");
  priceEl.textContent = price;
  return priceEl;
};

const createProductRating = (count) => {
  const ratingEl = document.getElementById("product-rating");

  const ratingCountEl = document.getElementById("product-rating-count");
  ratingCountEl.textContent = count;

  ratingEl.appendChild(ratingCountEl);

  ratingCountEl.insertAdjacentText("afterend", " reviews");

  return ratingEl;
};

const createProductButton = () => {
  const buttonEl = document.createElement("button");
  buttonEl.textContent = "Add to cart";
  return buttonEl;
};

const createProduct = (product) => {
  const productEl = document.createElement("div");
  productEl.classList.add("product");

  const imageEl = createProductImage(product.image);
  const titleEl = createProductTitle(product.title);
  const priceEl = createProductPrice(product.price);
  const ratingEl = createProductRating(product.rating.count);
  const buttonEl = createProductButton();

  productEl.append(imageEl, titleEl, priceEl, ratingEl, buttonEl);

  productsContainerEl.appendChild(productEl);
};

module.exports = { getAllCategories };
