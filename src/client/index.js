import getProducts from "./helpers/getProducts.js";
import drawProduct from "./helpers/drawProduct.js";
import loadProducts from "./helpers/loadProducts.js";

const url = 'http://localhost:3000/api/products';
const loader = document.getElementById('loader');
const productList = document.getElementById('product-list');
const errorMessage = document.querySelector('.error-message');

const products = getProducts(url,errorMessage);

drawProduct(productList,products);

loadProducts(loader,productList,url,errorMessage);

