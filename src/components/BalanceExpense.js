import React, { useContext } from 'react';
import {GlobalState} from './context/createContext';

import TransactionHistory from './TransactionHistory';
function BalanceExpense(){
    const {transactions} = useContext(GlobalState);
    const amount = transactions.map(trans => trans.amount);
    const income  = amount.filter(amm => amm>0).reduce((acc,item) => (acc += item)).toFixed(2);
    const expense  = amount.filter(amm => amm<0).reduce((acc,item) => (acc += item)*-1).toFixed(2);
    


      return(
          <div className="BalanceExpense"><div className="PositiveBalance">
          Income<br/>
          +${income}
          </div>
          <div className="NegitiveBalance">
          Expence<br/>
          -${expense}
          </div>
          </div>
      );

      }
export default BalanceExpense;