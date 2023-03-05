import Budget from './component/Budget'
import Remaining from './component/Remaining'
import Spent from './component/Spent'
import List from './component/List';
import  {Addprop}  from './component/Addprop';
import  {AppProvider}  from './component/AppContext/AppProvider';

function App() {
  return (
    <AppProvider>
    <div className="App">
   <div className='Header'><h1>My Budget Planner</h1></div>
   <div className="Budgets">
   <div className="displBudget"> <Budget ></Budget></div>
   <div className="displRemain"> <Remaining ></Remaining></div>
   <div className="displSpent"> <Spent></Spent></div>
   </div>
   <div className='displList'><List></List></div>
   <div className='displAdd'><Addprop></Addprop></div>
    </div>
    </AppProvider>
  );
}

export default App;
