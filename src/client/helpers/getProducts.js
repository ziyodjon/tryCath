let count = 0;

export default async function getProducts(url){
   
        const response = await fetch(url); 
        
        if (response.status === 404) {
            throw new Error('Продукты не найдены');
        }

        if (response.status === 500) {

            count++;

            if(count < 3){
                return await getProducts(url);
            }
            throw new Error('Проблема со стороны сервера');
        }

        const body = await response.text();


        const products = JSON.parse(body);
        
        return products.products;

}