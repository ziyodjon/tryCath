export default async function getProducts(url){
    const response = await fetch(url);

    if(response.status === 404){
        throw new Error('Товары не найдены');
    }

    if(response.status === 500){
        throw new Error('Что-то не так с сервером');
    }

    if(response.status === 200){
        return await response.json();
    }

    
}