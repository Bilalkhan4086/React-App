export default (state,action)=>{
    switch(action.type){
        case 'Add': 
           return{
               ...state,
               transactions:[action.payload, ...state.transactions]
    }
        default:
            return state;
    }
    }
