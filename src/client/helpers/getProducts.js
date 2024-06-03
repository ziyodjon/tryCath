export default async function getProducts(url,errorMessage){
    try {
        const response = await fetch(url); 
        
        if (response.status === 404) {
            throw new Error('Продукты не найдены');
        }

        if (response.status === 500) {
            throw new Error('Проблема со стороны сервера');
        }

        if(response.status === 200){
            
            const products = await response.json();
            //console.log(products.products);
            //const {products} = await response.json();
            errorMessage.style.display = 'none';
        return products.products;
        
        }
    } catch (error) {
        //console.error('Failed to fetch products:', error);
        
        errorMessage.textContent = error.message;
        errorMessage.style.display = 'block';
        return [];
    }

}