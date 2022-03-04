import CartActionTypes from "./cart.types";

const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN 
});

const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

const clearItem = item => ({
    type: CartActionTypes.CLEAR_ITEM,
    payload: item
});

const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})

export { toggleCartHidden, addItem, clearItem, removeItem };
