import React, { useState, useContext } from 'react';
import { GlobalState } from './context/createContext';
// import transReducer from './transReducer';


function AddTransaction(){
    let [desc,setdesc] = useState('');
    let [Amount,setAmount] = useState(null);
   const {addTransaction} = useContext(GlobalState);
const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
        id : Math.ceil(Math.random()*10000000),
    desc,Amount: +Amount
    }
    AddTransaction(newTransaction);
}
    
    // let [state,dispatch] = useReducer(transReducer);
return(<div className="AddTrans">
          <form onSubmit={onSubmit}>
          <div className="AddTDesc">
              <label htmlFor='tdesc'>Transaction Description</label><br/>
          <input type='text' id='tdesc' value={desc} onChange={(e) => setdesc(e.target.value)} placeholder='Add Description' required />
           </div><div className='AddTAm'>
           <label htmlFor='tAmo'>Transaction Amount</label><br/>
          <input type='text' id='tAmo' placeholder='$0.00' value={Amount} onChange={(e) => setAmount(e.target.value)} required/><br/>
           <button className="btn" type='submit' >Add Transaction</button>
           </div>
          </form>
          </div>
     )}
export default AddTransaction;
