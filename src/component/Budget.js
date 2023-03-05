import React ,{useContext}from 'react'
import { AppContext } from './AppContext/AppProvider'

 const Budget = () => {

    const {budget}=useContext(AppContext);
  
  return (
    <div>Budget <span>  Rs.{budget} </span></div>
  )
}
export default Budget;
