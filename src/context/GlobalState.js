import React,{ createContext,useReducer} from "react";
import Appreducer from "./Appreducer";

const initialTransactions={
    transactions:[
        {id:1,text:"salary",amount:50000},
        {id:2,text:"credit",amount:10000},
        {id:3,text:"debit",amount:-5000}
    ]
}

export const GlobalContext=createContext(initialTransactions);
export const GlobalProvider=({children})=>{

    const [state,dispatch]=useReducer(Appreducer,initialTransactions);
    //delete transaction
    const deleteTransaction=(id)=>{
        dispatch({type:'delete_transaction',payload:id})
    }

    const addTransaction=(transaction)=>{
        dispatch({
            type:'add_transaction',
            payload:transaction
        })
    }


    return (<GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTransaction,addTransaction
    }}>
        {children}
        </GlobalContext.Provider>
        );
}