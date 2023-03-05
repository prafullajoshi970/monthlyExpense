import Items from './Items'
import React,{useContext} from 'react';
import { AppContext } from './AppContext/AppProvider';


const Lists=()=> {
  const {expenses}=useContext(AppContext);

  return (
    <div className='Lists'>
      <div className='HeaderExpense'> <h2>Expenses</h2></div>
        <ul>
          
          {expenses.map ((expense)=>
          <Items id={expense.id} name={expense.name} cost={expense.cost}> </Items>
          )}
          
        </ul>
    </div>
  )
}

export default Lists