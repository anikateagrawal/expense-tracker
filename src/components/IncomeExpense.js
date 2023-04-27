import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

const IncomeExpense = () => {
  const {transactions}=useContext(GlobalContext);
  const income=transactions.reduce(getIncome,0);
  const expense=transactions.reduce(getExpense,0);
  function getIncome(total, num) {
    if(num.amount>=0)
    return total + num.amount;
    return total;
  }
  function getExpense(total,num){
    if(num.amount<0){
      return total+(-1)*num.amount;
    }
    return total;
  }
  return (
    <div className="inex">
        <div className='in'>
            <h3>Income</h3>
            <p>${income}</p>
        </div>
        <div className='ex'>
            <h3>Expense</h3>
            <p>${expense}</p>
        </div>
    </div>
  )
}

export default IncomeExpense