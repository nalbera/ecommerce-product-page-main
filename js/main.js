window.addEventListener('load', () => {
    
    const btnMinus = document.querySelector('.input__minus');
    const btnPlus = document.querySelector('.input__plus');
    const btnAddToCart = document.querySelector('.details__button');
    const inputNumber = document.querySelector('.input__number');
    const imgCart = document.querySelector('.header__imgCart');
    const cartModal = document.querySelector('.cart-modal');
    const modalPrice = document.querySelector('.cart-modal__price');
    const displayModalDetail = document.querySelector('.cart-modal__details-container');
    const cartNotification = document.querySelector('.header__cart--notification');
    const btnDelete = document.querySelector('.cart-modal__icon-delete')
    const imageContiner = document.querySelector('.gallery__image-container');
    const modalGallery = document.querySelector('.modal-gallery__backgroud');
    const modalClose = document.querySelector('.modal-gallery__close');

    let viewModal = true;
    let cont = 0;
    let total = 0;
    const id = 0;
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
        if(cont>0){
            cartNotification.innerHTML= cont;
            cartNotification.style.display='block';
            total = 125 * parseInt(inputNumber.value);
            modalPrice.innerHTML=`$125.00 x ${inputNumber.value}<span> $${total}</span>`;
            displayModalDetail.style.display = 'flex';
        }
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

    btnDelete.addEventListener('click', () => {
        cont = 0;
        cartNotification.style.display='none';
        total = 0;
        displayModalDetail.style.display = 'none';
    });

    imageContiner.addEventListener('click', () => {
        modalGallery.style.display = 'grid';
    });
    modalClose.addEventListener('click', () => {
        modalGallery.style.display = 'none';
    });
});

const changeImage = (numberImg) => {
    
};