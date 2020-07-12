import React, { useContext } from 'react';
import {Transaction} from './Transactions';
// import GlobalState from './context/createContext';
// import desc from './context/createContext';
// import amm from './context/createContext';
import {GlobalState} from './context/createContext';
// const value=useContext(GlobalState)
// console.log(value);
function TransactionHistory(){
   const {transactions} = useContext(GlobalState);
   return(
   <div className="ThisHeading">
         <b>TransactionHistory</b>
         <ul className='tHd'>          
               
               {transactions.map(transaction => (
               <Transaction key={transaction.id} transaction={transaction} />))}
</ul>
</div>);}
export default TransactionHistory;