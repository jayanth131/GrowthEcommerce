import { STATUS_OPTIONS } from '../utils/dashboard.js';

export default function Filters({ search, status, onSearchChange, onStatusChange, onReset }) {
  return (
    <div className="filters">
      <div className="field field--search">
        <label htmlFor="transaction-search">Search transactions</label>
        <input id="transaction-search" type="search" value={search} onChange={(event) => onSearchChange(event.target.value)} placeholder="Order ID or customer name" autoComplete="off" />
      </div>
      <div className="field field--status">
        <label htmlFor="transaction-status">Payment status</label>
        <select id="transaction-status" value={status} onChange={(event) => onStatusChange(event.target.value)}>
          {STATUS_OPTIONS.map((option) => <option key={option} value={option}>{option}</option>)}
        </select>
      </div>
      <button type="button" className="reset-button" onClick={onReset}>↺ <span>Reset filters</span></button>
    </div>
  );
}
