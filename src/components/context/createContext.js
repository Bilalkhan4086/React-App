import React,{createContext,useReducer} from 'react';
import AppReducer from './AppReducer';
const initalState = {
    transactions:[
        {id:1,amount:500,desc:'Cash'},
        {id:2,amount:-50,desc:'Tea'},
        {id:3,amount:70,desc:'Rice'}
    ]
}
export const GlobalState = createContext(initalState);

 const GlobalProvider = ({children})=>{
    const [state,dispatch] = useReducer(AppReducer,initalState)
    function addTrans(transaction){
        dispatch({
            type : 'Add',
            payload:transaction
        });
    }
    return(<GlobalState.Provider value={{
        transactions:state.transactions
    }}>
        {children}
    </GlobalState.Provider>)
};
export default GlobalProvider;