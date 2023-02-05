
window.addEventListener('load', () => {
    
    const images = [
        '../images/image-product-1.jpg',
        '../images/image-product-2jpg',
        '../images/image-product-3.jpg',
        '../images/image-product-4.jpg',
    ];
    
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
    const modalGaleryImage = document.querySelector('.modal-gallery__image-container')
    const modalClose = document.querySelector('.modal-gallery__close');
    let thumbnails = document.querySelectorAll('.gallery__thumnail');
    let thumbnailsModal = document.querySelectorAll('.modal-gallery__thumnails');

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

    //console.log(thumbnails); es un NodeList
    //convierto el nodelist en array
    thumbnails = [...thumbnails];
    thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener('click', (event) => {
            imageContiner.style.backgroundImage = `url('../images/image-product-${event.target.id}.jpg')`;
        });
    })

    thumbnailsModal = [...thumbnailsModal];
    thumbnailsModal.forEach((thumbnail) => {
        thumbnail.addEventListener('click', (event) => {
            modalGaleryImage.style.backgroundImage = `url('../images/image-product-${event.target.id.slice(-1)}.jpg')`;
        })
    })


});






const changeImage = (numberImg) => {
    
};