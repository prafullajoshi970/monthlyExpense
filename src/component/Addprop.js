import React, { useState,useContext } from 'react';
import { AppContext } from './AppContext/AppProvider'
import {v4 as uuidv4} from 'uuid';

export const Addprop = () => {
  const [name,setName]=useState('');
  const [cost,setCost]=useState('');
  const {dispatch} = useContext(AppContext);
  function submit(event){
      event.preventDefault();
      const payload={
          id:uuidv4(),
          name:name,
          cost:parseInt(cost)
      }
      console.log('before dispatch',payload);
      dispatch({
          type:'ADD_EXPENSE',
          payload:payload
      });
  }
  return (
    <div> 
        <form  onSubmit={submit} >
            Name :<input type={'text'} className="Add"  onInput={(e)=>setName(e.target.value)}></input>
            Cost :<input type={'text'} className="Add"  onInput={(e)=>setCost(e.target.value)}></input>
            <button type={'submit'} className='submitButton'>Add</button>
        </form>
    </div>
  )
}
