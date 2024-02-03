 import React ,{useContext} from 'react'
 import { GlobalContext } from '../Context/GlobalState'
 //Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    '$ ' + (p[0].split('')[0]=== '-' ? '-' : '') +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}

export const Balance = () => {
  const { transaction } = useContext(GlobalContext);

  const amount= transaction.map(transaction => transaction.amount);

  const total = amount.reduce((acc, item) => (acc += item), 0);

  return (
    <>
      <h4>Your Balance</h4>
    <h1>{moneyFormatter(total)}</h1>
    </>
  )
}
 