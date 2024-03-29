const {describe, expect, test} =  require('@jest/globals')

 const {getProductsLessThan, getAllCategories, getProductsFilterByCategory, sortByMaxPrice} = require('./main.js');
const fakeData = [

    {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
    rate: 3.9,
    count: 120
    }
    },
    {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: {
    rate: 4.1,
    count: 259
    }
    },
    {
        id: 6,
        title: "Solid Gold Petite Micropave ",
        price: 168,
        description: "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        category: "jewelery",
        image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        rating: {
        rate: 3.9,
        count: 70
        }
        },]

describe('testing main behavior', () => {
  
    test('should filter categories', () => {
    expect.assertions(2)
    const allCategories = getAllCategories(fakeData)
    expect(allCategories).toEqual(["men's clothing","jewelery"]);
    expect(allCategories.length).toEqual(2);
  });
    test('should filter a products array by a category ', () => {
    expect.assertions(1)
    const category = "jewelery"
    const filteredProducts = getProductsFilterByCategory("men's clothing",fakeData)
    expect(filteredProducts.length).toEqual(2);
  });
    test('should sort the products by max price ', () => {
    expect.assertions(1) 
    const sortedProducts = sortByMaxPrice(fakeData)
    expect(sortedProducts[0].price).toEqual(168);
  });
    test('should filter products by price lower than value received ', () => {
    expect.assertions(1) 
    const filterProduct = getProductsLessThan(100,fakeData)
    expect(filterProduct.length).toEqual(1);
  });
});