const URL = "https://fakestoreapi.com/products/";
const productsContainerEl = document.querySelector(".products-container");
let products = []

const getProductsFilterByCategory = (category, products) => {
  return products.filter((product) => product.category === category);
};
const getAllCategories =  (products) => [...new Set(products.map(product => product.category))]


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
  const priceEl = document.createElement("p");
  priceEl.classList.add("product-price");
  priceEl.textContent = price;
  return priceEl;
};

const createProductRating = (count) => {
  const ratingEl = document.createElement("p");

  const ratingCountEl = document.createElement("span");
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


const renderProducts = (products) => {
    productsContainerEl.innerHTML = ""
    for (const product of products) {
        createProduct(product)
    }
} 
const sortByMaxPrice = (products) => {
    return products.toSorted((a,b) => {
        return b.price - a.price
    })
}

const getProductsLessThan = (price, products) => {
    return products.filter(product => product.price <= price)
}

const lessThanFilterEl = document.querySelector('#less-than')
console.log("🚀 ~ lessThanFilterEl:", lessThanFilterEl)

lessThanFilterEl.addEventListener('input', (e)=> {
    console.log('hellooo')
    const price = parseInt(e.target.value)
    const filteredProducts = getProductsLessThan(price, products)
    renderProducts(filteredProducts)
})


fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    products = data
    renderProducts(data)
});

module.exports = {getAllCategories, getProductsFilterByCategory, sortByMaxPrice, getProductsLessThan}
