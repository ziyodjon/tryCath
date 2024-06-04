import getProducts from "./getProducts.js";
import drawProduct from "./drawProduct.js";

export default async function loadProducts(loader,productList,url){
        loader.style.display = 'block';
        productList.style.display = 'none';

        const products = await getProducts(url);

        loader.style.display = 'none';
        productList.style.display = 'block';

        drawProduct(productList,products);
}