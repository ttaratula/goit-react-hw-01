import css from './TransactionHistory.module.css' 

export default function TransactionHistory({ items }) {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr className={css.transactions}>
          <th className={css.title}>Type</th>
          <th className={css.title}>Amount</th>
          <th className={css.title}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={css.transactions}>
            <td className={css.items}>{type}</td>
            <td className={css.items}>{amount}</td>
            <td className={css.items}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
