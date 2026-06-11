//fungsi kembali ke bagian order
function backToOrder(){
    window.location.href = "./order.html";
}
//fungsi pembayaran
function goToFinish(event) {

    event.preventDefault()
    let nama = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let paymentType = document.querySelector('input[name="payment_type"]:checked').id;
    let cardName = document.getElementById("card").value;
    let creditCard = document.getElementById("credit_card").value;
    
    
    //kode untuk kondisi tiap input
    if (nama === "") {
        alert("Harap mengisi data!");
        return false;
    } else if(email === "" ){
        alert("Harap mengisi data!");
        return false;
    }else if(address === ""){
        alert("Harap mengisi data!");
        return false;
    } else if (paymentType === "credit" && (cardName === "" || creditCard === "")){
        alert("Harap mengisi data kartu kredit!");
        return false;
    }
    else {
        alert("terima kasih " + nama +" telah membeli produk kami!!");
        window.location.href = './home.html';
    }
    return true;
}
