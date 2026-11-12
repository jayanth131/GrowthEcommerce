import { useEffect, useMemo, useState } from 'react';
import DashboardShell from './components/DashboardShell.jsx';
import Filters from './components/Filters.jsx';
import StatCard from './components/StatCard.jsx';
import TransactionTable from './components/TransactionTable.jsx';
import { loadTransactions } from './services/transactions.js';
import { filterTransactions, formatINR, summarizeTransactions } from './utils/dashboard.js';

export default function App() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState('');
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('All');

  useEffect(() => {
    let active = true;
    loadTransactions()
      .then((data) => { if (active) setRecords(data); })
      .catch(() => { if (active) setLoadError('Unable to load transaction records. Please refresh to try again.'); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, []);

  const visibleRecords = useMemo(() => filterTransactions(records, search, status), [records, search, status]);
  const stats = useMemo(() => summarizeTransactions(visibleRecords), [visibleRecords]);
  const resetFilters = () => { setSearch(''); setStatus('All'); };

  return (
    <DashboardShell>
      <div className="page-intro"><div><p className="page-intro__kicker">BUSINESS OVERVIEW</p><h1>Dashboard overview</h1><p className="page-intro__subtitle">Monitor your sample sales and transaction activity in one place.</p></div><span className="sample-tag">Sample records only</span></div>
      {loading ? <div className="message-panel" role="status">Loading transaction data…</div> : loadError ? <div className="message-panel message-panel--error" role="alert">{loadError}</div> : (
        <>
          <div className="section-heading"><h2>Sales snapshot</h2><p>Metrics reflect the active filters below</p></div>
          <div className="stats-grid">
            <StatCard label="Paid revenue" value={formatINR(stats.paidRevenue)} icon="₹" variant="blue" note="Completed paid transactions" />
            <StatCard label="Transactions" value={stats.transactions.toLocaleString('en-IN')} icon="▤" variant="purple" note="All matching records" />
            <StatCard label="Pending transactions" value={stats.pending.toLocaleString('en-IN')} icon="◷" variant="amber" note="Awaiting payment" />
            <StatCard label="Refunded amount" value={formatINR(stats.refundedAmount)} icon="↶" variant="rose" note="Refunds shown as positive amounts" />
          </div>
          <div className="section-heading section-heading--filters"><h2>Explore transactions</h2><p>Filter by customer, order ID, or payment status</p></div>
          <Filters search={search} status={status} onSearchChange={setSearch} onStatusChange={setStatus} onReset={resetFilters}/>
          <TransactionTable records={visibleRecords} total={records.length}/>
        </>
      )}
      <footer className="page-footer">Growth Ecommerce Store Global <span aria-hidden="true">·</span> Internal dashboard demonstration <span aria-hidden="true">·</span> Sample data only</footer>
    </DashboardShell>
  );
}
