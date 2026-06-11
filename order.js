let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
let totalPrice =0 ;

//membuat add button 
openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
//membuat close button
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

//menginisiasi produk 
let products = [
    {
        id: 1,
        name: 'Paket Box',
        image: 'paket box.png',
        price: 18000
    },
    {
        id: 2,
        name: 'Paket Bento',
        image: 'paket bento.png',
        price: 27000
    },
    {
        id: 3,
        name: 'Nasi Liwet',
        image: 'nasi liwet.png',
        price: 400000
    },
    {
        id: 4,
        name: 'Large Tumpeng',
        image: 'large tumpeng.png',
        price: 950000
    },
    {
        id: 5,
        name: 'Medium Tumpeng',
        image: 'medium tumpeng.png',
        price: 650000
    },
    {
        id: 6,
        name: 'Small Tumpeng',
        image: 'small tumpeng.png',
        price: 350000
    },
    {
        id: 7,
        name: 'Mini Tumpeng',
        image: 'mini tumpeng.png',
        price: 30000 
    },
    {
        id: 8,
        name: 'Ingkung Ayam Kampung',
        image: 'ingkung ayam kampung.png',
        price: 120000
    },
    {
        id: 9,
        name: 'Snack Setampah',
        image: 'snack setampah.png',
        price: 120000
    }
];

//
let listCards  = [];

//membuat card produk
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">Rp${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Tambah</button>`;
        list.appendChild(newDiv);
    })
}
initApp();

//fungsi untuk menambahkan card ke list belanja
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}

//fungsi untuk tiap card di list belanja
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})" class="minus">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})" class="plus">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = "Total Harga\n" + totalPrice.toLocaleString();
    quantity.innerText = count;
}

//mengubah jumlah produk yg di order
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

//fungsi untuklangsung ke pembayaran
function goToPayment(){
    if(totalPrice == 0 ){
        alert("tambahkan barang anda");
        return false
    }else if(totalPrice > 0){
        window.location.href = "./payment.html";
    }
}

