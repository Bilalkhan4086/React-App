import React from 'react';
import './App.css';
import './components/Style.css';
import Header from './components/Header';
import Balance from './components/Balance';
import BalanceExpense from './components/BalanceExpense';
import TransactionHistory from './components/TransactionHistory';
import AddTransaction from './components/AddTransaction';
import GlobalProvider from './components/context/createContext';

function App()
{
return(

<GlobalProvider>
<Header/>
<div className="EntireApp">
<Balance/>
<BalanceExpense/>
<TransactionHistory/>
<AddTransaction/>
</div>
</GlobalProvider>

  );
}
export default App;//Here App is a Component name.
