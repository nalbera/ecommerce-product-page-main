window.addEventListener('load', () => {
    
    const btnMinus = document.querySelector('.input__minus');
    const btnPlus = document.querySelector('.input__plus');
    const btnAddToCart = document.querySelector('.details__button');
    const inputNumber = document.querySelector('.input__number');
    const imgCart = document.querySelector('.header__imgCart');
    const cartModal = document.querySelector('.cart-modal');
    const modalPrice = document.querySelector('.cart-modal__price');
    const modalTotal = document.querySelector('.cart-modal__price span');
    const displayModalDetail = document.querySelector('.cart-modal__details-container');
    const cartNotification = document.querySelector('.header__cart--notification');

    let viewModal = true;
    let cont = 0;
    btnMinus.addEventListener('click', () => {
        if(cont > 0){
            cont--;
            inputNumber.value = cont;
        }
    });
    
    btnPlus.addEventListener('click', () => {
            cont++;
            inputNumber.value = cont;
    });

    btnAddToCart.addEventListener('click', () => {
        cartNotification.innerHTML= cont;
        cartNotification.style.display='block';
        // let total = 125 * parseInt(inputNumber.value);
        // modalPrice.innerHTML=`$125.00 x ${inputNumber.value}`;
        // modalTotal.innerHTML = `${total}`;
        // displayModalDetail.style.display = 'flex';
    });

    imgCart.addEventListener('click', () => {
        if(viewModal){
            cartModal.style.display = 'block';
            viewModal = false;
        }else{
            cartModal.style.display = 'none';
            viewModal = true;
        }
    });
});
