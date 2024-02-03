/* eslint-disable import/no-anonymous-default-export */


export default (state, action) => {
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transaction: state.transaction.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transaction: [action.payload, ...state.transaction]
            }
        default:
            return state;
    }
}

// Define an initial state for your application
// const initialState = {
//     transactions: [],
//   };
  
//   // Create a reducer function
//   const transactionReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'DELETE_TRANSACTION':
//         return {
//           ...state,
//           transactions: state.transactions.filter(
//             (transaction) => transaction.id !== action.payload
//           ),
//         };
//       case 'ADD_TRANSACTION':
//         return {
//           ...state,
//           transactions: [action.payload, ...state.transactions],
//         };
//       default:
//         return state;
//     }
//   };
  
  // Create a Redux store and attach the reducer
//   import { createStore } from 'redux';
  
//   const store = createStore(transactionReducer);
  
//   // Dispatch actions to the store
//   store.dispatch({ type: 'ADD_TRANSACTION', payload: { id: 1, amount: 100 } });
//   store.dispatch({ type: 'ADD_TRANSACTION', payload: { id: 2, amount: -50 } });
//   store.dispatch({ type: 'DELETE_TRANSACTION', payload: 1 });
  
//   // Access the updated state
//   console.log(store.getState());
  