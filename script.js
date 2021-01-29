// plus handler 

const addBtn = document.getElementById('btn-plus'); 

addBtn.addEventListener( 'click', () =>{
    
    addQuantity('quantity-input', 1);
    increasePhonePrice('price-value', 1219);
    increasePhonePrice('main-price', 1219);   
    increasePhonePrice('main-price-total', 1219);   
    
} );

// minus handler 

const minusBtn = document.getElementById('btn-minus');

minusBtn.addEventListener( 'click', ()=> {

    addQuantity('quantity-input', -1);
    increasePhonePrice('price-value', -1219);

    increasePhonePrice('main-price', -1219);   
    increasePhonePrice('main-price-total', -1219);   

} );

// 2nd cart 

const addBtnCasing = document.getElementById('btn-plus-casing');

addBtnCasing.addEventListener( 'click', () => {
    addQuantity('casing-quantity', 1);
    increasePhonePrice('casing-price', 59);
    increasePhonePrice('main-price', 59);   
    increasePhonePrice('main-price-total', 59);  

} );

const minusBtnCasing = document.getElementById('btn-minus-casing');

minusBtnCasing.addEventListener( 'click', ()=> {
    addQuantity('casing-quantity', -1);
    increasePhonePrice('casing-price', -59);
    increasePhonePrice('main-price', -59);   
    increasePhonePrice('main-price-total', -59);  
} );


// main function areas 

function addQuantity(inputId, valueParam){
    const input = parseFloat(document.getElementById(inputId).value);
    const quantityResult = input + valueParam;
    document.getElementById(inputId).value = quantityResult;

}

function increasePhonePrice( priceValueId, singlePrice ){
    const priceValue = parseFloat(document.getElementById(priceValueId).innerText);
    const updatePrice = priceValue + singlePrice;
    document.getElementById(priceValueId).innerText = updatePrice;
}

