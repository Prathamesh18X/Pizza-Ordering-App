
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
        variant : variant,
        prices : pizza.prices,
        quantity : quantity,
        price : pizza.prices[variant]*quantity
    }
    
    
            dispatch({type: 'ADD_TO_CART',payload : cartItem})

            const cartItems = getState().cartReducers.cartItems
            localStorage.setItem('cartItems' , JSON.stringify(cartItems))
        }