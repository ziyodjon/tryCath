const loader = document.getElementById('loader');
    const productList = document.getElementById('product-list');
    const errorMessage = document.querySelector('.error-message');

    // Function to fetch products
    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/products'); // Replace with your API endpoint
            
            if (response.status === 404) {
                throw new Error('Продукты не найдены');
            }

            if (response.status === 500) {
                throw new Error('Проблема со стороны сервера');
            }

            const {products} = await response.json();
            return products;
        } catch (error) {
            console.error('Failed to fetch products:', error);
            errorMessage.style.display = 'block';
            errorMessage.textContent = error.message;
            return [];
        }
    };

    // Function to display products
    const displayProducts = (products) => {
        //productList.innerHTML = ''; // Clear any existing content
        
        products.forEach(product => {
            const listItem = document.createElement('li');
            const productImage = document.createElement('img');
            const productName = document.createElement('h4');
            const productPrice = document.createElement('p');
            productImage.src = product.image;
            productName.textContent = product.name;
            productPrice.textContent = product.price;
            listItem.append(productImage,productName,productPrice);
            
            
            productList.append(listItem);
        });
    };

    // Main function to fetch and display products
    const loadProducts = async () => {
        loader.style.display = 'block';
        productList.style.display = 'none';

        const products = await fetchProducts();

        loader.style.display = 'none';
        productList.style.display = 'block';

        displayProducts(products);
    };

    loadProducts();



// import getProducts from "./helpers/getProducts.js";
// //import drawProduct from "./helpers/drawProduct.js";

// const productsWrap = document.getElementById('products-wrap');
// const productCard = document.createElement('div');
// const productImage = document.createElement('img');
// const productName = document.createElement('h4');
// const productPrice = document.createElement('span');



// const displayProducts = async () => {
//     try {
//         const {products} = await getProducts("http://localhost:3000/api/products");
//         products.forEach(element => {
//             productsWrap.innerHTML += `
                
//             `;
//             // productImage.src = element.image;
//             // productName.textContent = element.name;
//             // productPrice.textContent = element.price;
//             // productCard.append(productImage, productName, productPrice);
//             // productsWrap.innerHTML += productCard;
//         });

        

        

        
//     } catch (error) {
//         console.log(error);
        
//         productsWrap.append(error.message);
//     }
    
// }

// displayProducts();