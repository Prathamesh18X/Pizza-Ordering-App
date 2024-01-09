const initialState = {
    cartItems: []
  }
  
  export const cartReducers = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const alreadyExist = state.cartItems.find(item => item.name === action.payload.name)
        if(alreadyExist){
          return{
            ...state,
            cartItems : state.cartItems.map(item => item.name === action.payload.name ? action.payload : item)
          }
        }else{
          return {
            ...state,
            cartItems: [...state.cartItems, action.payload],
          }
        }
        case 'REMOVE_FROM_CART':
          return{
            ...state,
            cartItems : state.cartItems.filter(item =>item.name !== action.payload.name)
          }
      default: return state;
    }
  }  