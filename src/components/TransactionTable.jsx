import { formatINR } from '../utils/dashboard.js';

export default function TransactionTable({ records, total }) {
  return (
    <section className="table-panel" aria-labelledby="transactions-heading">
      <div className="table-panel__header">
        <div><h2 id="transactions-heading">Transaction history</h2><p>Review orders and their payment status</p></div>
        <span className="result-counter" aria-live="polite">{records.length} of {total} records</span>
      </div>
      {records.length === 0 ? (
        <div className="empty-state" role="status"><span aria-hidden="true">⌕</span><h3>No transactions found</h3><p>Try another customer, order ID, or payment status, or reset the filters.</p></div>
      ) : (
        <div className="table-scroll" role="region" aria-label="Scrollable transactions table" tabIndex={0}>
          <table>
            <thead><tr><th scope="col">Order ID</th><th scope="col">Customer</th><th scope="col">Date</th><th scope="col">Category</th><th scope="col" className="amount-column">Amount</th><th scope="col">Status</th></tr></thead>
            <tbody>{records.map((item) => (
              <tr key={item.id}>
                <td className="order-id">{item.id}</td>
                <td className="customer-name">{item.customer}</td>
                <td>{item.date}</td>
                <td>{item.category}</td>
                <td className="amount-column amount-cell">{formatINR(item.amount)}</td>
                <td><span className={`status status--${item.status.toLowerCase()}`}><span className="status__dot" aria-hidden="true" />{item.status}</span></td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      )}
      <div className="table-panel__footer">Showing {records.length} matching {records.length === 1 ? 'transaction' : 'transactions'}</div>
    </section>
  );
}
