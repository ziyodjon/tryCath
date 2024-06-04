export default async function getProducts(url){
   
        const response = await fetch(url); 
        
        if (response.status === 404) {
            throw new Error('Продукты не найдены');
        }

        if (response.status === 500) {
            throw new Error('Проблема со стороны сервера');
        }

        const body = await response.text();

        if(!body){
            throw new Error('Статус 200 но данные не найдены');
        }

        const products = JSON.parse(body);
        
        return products.products;

}