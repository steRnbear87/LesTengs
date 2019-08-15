import * as actionTypes from './actionTypes';

export const updateCartCouner = (cartCounter) => {
    return { 
        type: actionTypes.CART_COUNTER,
        cartItemsCounter: cartCounter
    };
}

export const addToCartLocalStorage = (cartProduct) => {
    return dispatch => {
        let localCart = localStorage.getItem('addToCart');
        if (localCart!= null) {
            let localCartObject = JSON.parse(localCart);
            localCartObject.push(cartProduct);
             
            dispatch(cartCounter(localCartObject))
            
            localStorage.setItem('addToCart', JSON.stringify(localCartObject));
        }else {
            let productsInCart = [];
            productsInCart.push(cartProduct);
            
            let localCartObject = 1;
            dispatch(cartCounter(localCartObject));
            localStorage.setItem('addToCart', JSON.stringify(productsInCart));
        }
    }
}

export const cartCounter = (localCartObject) => {
    return dispatch => {
        let cartCounter = (Object.keys(localCartObject).length);
            dispatch (updateCartCouner(cartCounter))
    }
}

