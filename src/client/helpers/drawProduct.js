export default async function drawProduct(productList,products){
    products.forEach(product => {
        const listItem = document.createElement('li');
        listItem.classList.add('scale');
        const productImage = document.createElement('img');
        const productName = document.createElement('h4');
        const productPrice = document.createElement('p');

        productImage.src = product.image;
        productName.textContent = product.name;
        productPrice.textContent = product.price;
        listItem.append(productImage,productName,productPrice);
        
        
        productList.append(listItem);
    });
}