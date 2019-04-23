"use strict";

const products = [
    {title: 'R2-D2', price: 100, img:'R2-D2.png' },
    {title: 'Порг', price: 50, img:'Porg.png'},
    {title: 'Darht Vader', price: 150, img:'Vader.png'},
    {title: 'Stormtrooper', price: 35, img:'stormtrooper.png'},
];

const renderProduct = (title, price, img) => {
    return `<div class="product-item" >
            <div style="background-image:url('../img/${img}')"></div>
                <h3>${title}</h3>
                <h4>${price} &#x20bd;</h4>
            </div>`;
};

const renderPage = list => {
    const productList = list.map (item => renderProduct (item.title, item.price, item.img) );
   let productListFull = productList.join('');
     console.log(productListFull) ; 
    document.querySelector('.products').innerHTML = productListFull;
}

renderPage(products);