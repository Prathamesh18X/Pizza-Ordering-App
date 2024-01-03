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

export const addToCart = (pizza , quantity , variant)=>{

    var cartItem = {
        name : pizza.name,
        _id : pizza.id,
        variant : variant,
        prices : pizza.prices,
        quantity : quantity,
        price : pizza.prices[variant]*quantity
    }
    
    
        return(dispatch)=>{
            dispatch({
            type: 'ADD_TO_CART',
            payload : cartItem
        })
        }
    
    }