export default function Appreducer(state,action){
    switch(action.type){
        case 'delete_transaction':
            return {transactions:state.transactions.filter((t)=>t.id!=action.payload)}

        case 'add_transaction':
            return {transactions:[...state.transactions,action.payload]}
        default:return state;
    }
}