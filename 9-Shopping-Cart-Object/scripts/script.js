let productsContainer = document.querySelector('#products');
let cartHeader = document.querySelector('.cart-header');
let cartContainer = document.querySelector('.cart');
let cartItems = document.querySelector('.cart-items');
let totalPriceEl = document.querySelector('.total-price');
let totalItemsEl = document.querySelector('.total-items')




function showAllProducts() {
    for (let i = 0; i < products.length; i++) {
        productsContainer.innerHTML += `<div class="product-item">
        <div class="product-image"><img src="` + products[i].imgSrc + `" alt=""></div>
        <div class="product-title">` + products[i].name + `</div>
        <div class="product-instock">تعداد موجود: ` + products[i].instock + `</div>
        <div class="product-data">
            <div class="product-price">` + commafy(products[i].price) + `</div>
            <div class="add-to-cart" onclick="addToCart(` + products[i].id + `)"><i class="fa-solid fa-cart-shopping"></i></div>
        </div>
    </div>`;
    }
}


showAllProducts();

let n = 0;
cartHeader.addEventListener('click', function () {

    if (n == 0) {
        cartContainer.style.bottom = '-10px'; // show cart
        n++; // n = 1
    } else {
        cartContainer.style.bottom = '-365px'; // hide cart
        n = 0;
    }

});


// cart array
let cart = [];

// add to cart function
function addToCart(id) {


    let itemId = cart.some(function (item) {
        return item.id == id;
    });


    if (itemId) {
        changeNumberOfUnits('plus', id);
    } else {

        let item = products.find(function (p) {
            return p.id == id;
        });

        item.numberOfUnits = 1;
        cart.push(item);
    }
    renderCartItems();
    renderTotal();
}


// render cart items
function renderCartItems() {
    cartItems.innerHTML = '';
    for (let i = 0; i < cart.length; i++) {
        cartItems.innerHTML += `<li class="cart-item">
        <div class="p-name" onclick="deleteFromCart(` + cart[i].id + `)">` + cart[i].name + `</div>
        <div class="p-price">` + commafy(cart[i].price) + `</div>
        <div class="p-unit">
            <span class="plus" onclick="changeNumberOfUnits('plus', ` + cart[i].id + `)"><i class="fa-solid fa-plus"></i></span>
            <span class="unit">` + cart[i].numberOfUnits + `</span>
            <span class="minus" onclick="changeNumberOfUnits('minus', ` + cart[i].id + `)"><i class="fa-solid fa-minus"></i></span>
        </div>
    </li>`;
    }
}


// change number of units
function changeNumberOfUnits(action, id) {

    cart = cart.map(function (item) {
        let oldNumberOfUnits = item.numberOfUnits; //1

        if (item.id == id) {

            if (action == 'plus' && oldNumberOfUnits < item.instock) {
                oldNumberOfUnits++;
            } else if (action == 'minus' && oldNumberOfUnits > 1) {
                oldNumberOfUnits--;
            }

        }

        item.numberOfUnits = oldNumberOfUnits;
        return item;
    });

    renderCartItems();
    renderTotal();

}

// render total
function renderTotal(){
    let totalPrice = 0;
    let totalItems = 0;

    for (let i = 0; i < cart.length ; i++){
        totalItems += cart[i].numberOfUnits;
        totalPrice += cart[i].price * cart[i].numberOfUnits; 
    }

    totalPriceEl.innerHTML = commafy(totalPrice);
    totalItemsEl.innerHTML = totalItems;


}

// delete from cart
function deleteFromCart(id){
    cart = cart.filter(function(item){
        return item.id != id;
    });
    renderCartItems();
    renderTotal();
}


function commafy(num) {
    var str = num.toString().split('.');
    if (str[0].length >= 5) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1.');
    }
    if (str[1] && str[1].length >= 5) {
        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
    return str.join('.');
}