import MyError from "../class/MyError.js";

let count = 0;

export default async function getProducts(url){
   
        const response = await fetch(url); 
        
        if (response.status === 404) {
            throw new MyError('Продукты не найдены',response.status);
        }

        if (response.status === 500) {

            count++;

            if(count < 3){
                return await getProducts(url);
            }
            throw new MyError('Проблема со стороны сервера',response.status);
        }

        const body = await response.text();


        const products = JSON.parse(body);
        
        return products.products;

}