import React,{useContext} from 'react';
import { AppContext } from './AppContext/AppProvider';

const Items=(props)=> {
  const {dispatch}=useContext(AppContext);

  function onDispatch(){
    dispatch({type:'DELETE',payload:props.id});
  }
  return (
    <div className='items'>
     
<li className='middleadddelete'>
  {props.name}

  <span> {props.cost} Rs</span>
<button className="deleteButton"  style={{color:"red"}} onClick={onDispatch}>delete</button>
 
</li>
 </div>
  
  )
}

export default Items