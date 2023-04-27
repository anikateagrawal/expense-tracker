import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const Transaction = (props) => {
    const {deleteTransaction}=useContext(GlobalContext);
  return (
    <li >
        {props.text}<span>${props.amount}</span>
        <span onClick={()=>deleteTransaction(props.id)}>X</span>
    </li>
  )
}

export default Transaction