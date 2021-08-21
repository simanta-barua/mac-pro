
//update price 
function updatePrice(id, price) {
    document.getElementById(id).innerText = price;
    updateTotal();
}
//update total
function updateTotal() {
    //calculate total by getting id
    const calc = parseInt(document.getElementById('price').innerText) + parseInt(document.getElementById('exMemoryCost').innerText) + parseInt(document.getElementById('exStorageCost').innerText) + parseInt(document.getElementById('deliveryCost').innerText);
    totalCost.innerText = calc;
    // change grandtotal
    grandTotal.innerText = calc;
    promoUpdate()
}
//promo Update
function promoUpdate() {
    const promoCode = document.getElementById('promo').value;
    if (promoCode == 'stevekaku') {
        const promoNumber = parseFloat(grandTotal.innerText);
        const promoCalc = promoNumber - ((promoNumber * 20) / 100);
        grandTotal.innerText = promoCalc;
        const promoApply = document.getElementById("promoApply");
        promoApply.disabled = true;
        promoApply.innerText = "Applied";
        document.getElementById("promoMassage").innerText = "Success";
        document.getElementById("promoMassage").style.color = 'green';
    }
    else if (promoCode === "") {
        document.getElementById("promoMassage").innerText = " ";
    }
    else {
        document.getElementById("promoMassage").innerText = "Failed try again";
        document.getElementById("promoMassage").style.color = 'red';
    }
}

//Image update
function updateImage(imageName) {
    const img = document.getElementById('product-image');
    img.src = 'assets/image/' + imageName;
}

//event section 
//8gb RAM
document.getElementById('RAM8gb').addEventListener('click', function () {
    updatePrice('exMemoryCost', 0);
    document.getElementById('exMemoryCostTxt').innerText = "";

});
//16gb RAM
document.getElementById('RAM16gb').addEventListener('click', function () {
    updatePrice('exMemoryCost', 180);
    const addtxt = document.getElementById('exMemoryCostTxt');
});

//256 GB SSD
document.getElementById('SSD256gb').addEventListener('click', function () {
    updatePrice('exStorageCost', 0);
});

//512 GB SSD
document.getElementById('SSD512gb').addEventListener('click', function () {
    updatePrice('exStorageCost', 100);
});

// 1 TB SSD
document.getElementById('SSD1TB').addEventListener('click', function () {
    updatePrice('exStorageCost', 180);
});

//shipping
document.getElementById('freeShipping').addEventListener('click', function () {
    updatePrice('deliveryCost', 0);
});

document.getElementById('paidShipping').addEventListener('click', function () {
    updatePrice('deliveryCost', 20);
});
//promo Code apply
document.getElementById('promoApply').addEventListener('click', function () {
    promoUpdate();
});

//Slide Image 
document.getElementById('slideimage1').addEventListener('click', function () {
    updateImage('mac1.jpeg');
});
document.getElementById('slideimage2').addEventListener('click', function () {
    updateImage('mac2.jpeg')
});
document.getElementById('slideimage3').addEventListener('click', function () {
    updateImage('mac3.jpeg')
});

