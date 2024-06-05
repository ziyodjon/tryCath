import getProducts from "./helpers/getProducts.js";
import drawProduct from "./helpers/drawProduct.js";
import loadingBox from "./helpers/loadingBox.js";

const url = 'http://localhost:3000/api/products';
const loader = document.getElementById('loader');
const productList = document.getElementById('product-list');
const errorMessage = document.querySelector('.error-message');

//loadProducts();
//loader.style.display = 'block';
loadingBox('block');

try{

    const products = await getProducts(url);
    drawProduct(productList,products);

}catch(error){

    errorMessage.append(error.message);

}finally{

    loadingBox('none');

}


