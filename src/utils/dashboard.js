export const STATUS_OPTIONS = ['All', 'Paid', 'Pending', 'Refunded', 'Cancelled'];

export const formatINR = (amount) => new Intl.NumberFormat('en-IN', {
  style: 'currency', currency: 'INR', minimumFractionDigits: 2, maximumFractionDigits: 2,
}).format(amount);

export function filterTransactions(records, search, status) {
  const term = search.trim().toLocaleLowerCase('en');
  return records
    .filter((item) => {
      const matchesSearch = !term || item.id.toLocaleLowerCase('en').includes(term)
        || item.customer.toLocaleLowerCase('en').includes(term);
      const matchesStatus = status === 'All' || item.status === status;
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => b.date.localeCompare(a.date) || a.id.localeCompare(b.id));
}

export function summarizeTransactions(records) {
  return records.reduce((summary, item) => {
    summary.transactions += 1;
    if (item.status === 'Paid') summary.paidRevenue += item.amount;
    if (item.status === 'Pending') summary.pending += 1;
    if (item.status === 'Refunded') summary.refundedAmount += item.amount;
    return summary;
  }, { paidRevenue: 0, transactions: 0, pending: 0, refundedAmount: 0 });
}
