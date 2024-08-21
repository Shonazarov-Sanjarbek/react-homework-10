export const initialState = {
    son: 0,
    wishlist: [],
    cart: [],
    token: null,
  }
  
export const reducer = (state, action) => {
    switch(action.type){
      case "INC":
        return {...state, son: state.son + action.payload}
      case "ADD_TO_WISHLIST":
        return {...state, wishlist: [...state.wishlist, action.payload]}
      case "ADD_CART":
        return {...state, cart: [...state.cart, action.payload]}
      default:
        return state
    }
  }