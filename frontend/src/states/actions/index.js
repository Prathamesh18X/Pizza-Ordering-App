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
