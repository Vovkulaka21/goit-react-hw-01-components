import css from "./TransactionHistory.module.css"

const TransactionHistory = ({ transactions }) => {

  const table = transactions.map(transaction => (
    <tr key={transaction.id} className={css.block}>
      <td>{transaction.type}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.currency}</td>
    </tr>
  ));


  return (
    <table className={css.table}>
      <thead className={css.head}>
        <tr className={css.block}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>{table}</tbody>
    </table>
  );
};

export default TransactionHistory;
