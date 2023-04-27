import React,{useState,useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
  const [text,setText]=useState("");
  const [amount,setAmount]=useState(0);
  const {addTransaction}=useContext(GlobalContext);
  function add(e){
    e.preventDefault();
    const transaction={
      id:Math.floor(Math.random()*1000),
      text,amount:+amount
    }
    addTransaction(transaction);
  }
  return (
    <form onSubmit={add} className='form'>
        <h3>Add New Transaction</h3>
        <hr></hr>
        <div>
            <label htmlFor='items'>Items</label><br/>
            <input value={text} onChange={(e)=>setText(e.target.value)} type='text' id='items' placeholder='Enter Your Text'></input>
        </div>
        <div>
        <label htmlFor='amount'>Amount (Negative:Expense, Positive:Income)</label><br/>
            <input value={amount} onChange={(e)=>setAmount(e.target.value)} type='Number' id='amount' placeholder='Enter Your Amount'></input>
        </div>
        <button  id='add'>Add</button>
    </form>
  )
}

export default AddTransaction