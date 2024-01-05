export const addToCart = (pizza , quantity , variant)=>(dispatch,getState)=>{

    var cartprops = {
        name : pizza.name,
        _id : pizza.id,
        variant : variant,
        prices : pizza.prices,
        quantity : quantity,
        price : pizza.prices[variant]*quantity
    }
    
    
            dispatch({type: 'ADD_TO_CART',payload : cartprops})

            const cartItems = getState().cartReducers.cartprops
            console.log(cartItems);
            localStorage.setItem('cartItems' , JSON.stringify(cartItems))
        }