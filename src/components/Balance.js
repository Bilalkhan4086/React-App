import React, { useContext } from 'react';
 import {GlobalState} from './context/createContext';

function Balance(){
 const {transactions} = useContext(GlobalState); 
 const amount = transactions.map(transacti => transacti.amount);
const TotalBalance = amount.reduce((acc,item)=> (acc +=item),0).toFixed(2);
 return(
          <div className='Balance'>Total Balance
          <div className="TBalance">${TotalBalance}

          </div>
          </div>
      );

}
export default Balance;