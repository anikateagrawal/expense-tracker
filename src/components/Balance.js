import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {
  const {transactions}=useContext(GlobalContext);
  const sum=transactions.reduce(getSum,0);
  function getSum(total, num) {
    return total + num.amount;
  }
  return (
    <>
        <h2>Your Balance</h2>
        <p id="balance">${sum}</p>
    </>
  )
}

export default Balance