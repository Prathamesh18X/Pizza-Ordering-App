export const  quantityReducers = (state = 0 , action)=>{
    if(action.type === 'ADD'){
        return state + action.payload;
    }
    else if(action.type === 'MINUS'){
        const result = state - action.payload;
        return Math.max(result, 0);
    }
    else{
        return state
    }
}
