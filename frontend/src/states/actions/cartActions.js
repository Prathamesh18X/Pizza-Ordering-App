
export const add = (amount) =>{
    return (dispatch)=>{
        dispatch({
            type : 'ADD',
            payload: amount
        })

    }
}

export const minus = (amount) =>{
    return (dispatch)=>{
        dispatch({
            type : 'MINUS',
            payload: amount
        })
    }
    
}

export const addToCart = (pizza , quantity , variant)=>(dispatch,getState)=>{

    var cartItem = {
        name : pizza.name,
        _id : pizza.id,
        image : pizza.image,
        variant : variant,
        prices : pizza.prices,
        quantity : Number(quantity),
        price : pizza.prices[variant]*quantity
    }
    
    if(quantity > 10){
        alert("You can't order more than 10 items at a time")
    }else if(quantity < 1){
       dispatch({type: 'REMOVE_FROM_CART', payload:pizza})
    }else {
    dispatch({type: 'ADD_TO_CART',payload : cartItem})
    }
    const cartItems = getState().cartReducers.cartItems
    localStorage.setItem('cartItems' , JSON.stringify(cartItems))
}

export const removeFromCart = (pizza) =>(dispatch,getState) =>{

    dispatch({type: 'REMOVE_FROM_CART', payload:pizza})

    const cartItems = getState().cartReducers.cartItems
    localStorage.setItem('cartItems' , JSON.stringify(cartItems))
}
