import React from 'react'
import Header from './Component/Header'
import {Balance} from './Component/Balance'
import {IncomeExpense }from './Component/IncomeExpense'
import {TransactionList} from './Component/TransactionList'
import AddTransaction from './Component/AddTransaction'
import {GlobalProvider}  from './Context/GlobalState'

import './App.css'


function App() {
  return (
    <GlobalProvider>
     <Header/>
     <div className='container'>
      <Balance/>
      <IncomeExpense/>
      <TransactionList/>
      <AddTransaction/>
     </div>
    </GlobalProvider>
  );
}

export default App;
