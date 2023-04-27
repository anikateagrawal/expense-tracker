import React ,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction';

const TransactionList = (props) => {
  const {transactions ,deleteTransaction} =useContext(GlobalContext);
  return (
    <div>
        <h3>History</h3>
        <hr/>
        <ul className='list'>
            {transactions.map((t)=><Transaction text={t.text}  amount={t.amount} id={t.id}/>)}
        </ul>
    </div>
  )
}

export default TransactionList