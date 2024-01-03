// export const  cartReducers = (state = 0 , action)=>{
//     if(action.type === 'ADD'){
//         return state + action.payload;
//     }
//     else if(action.type === 'MINUS'){
//         const result = state - action.payload;
//         return Math.max(result, 0);
//     }
//     else{
//         return state
//     }
// }

const initialState = {
    cartItem: []
  }
  
  export const cartReducers = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          cartItem: [...state.cartItem, action.payload],
        }
  
      default: return state;
    }
  }  