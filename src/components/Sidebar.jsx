export default function Sidebar({ open, onNavigate }) {
  return (
    <aside id="dashboard-sidebar" className={`sidebar ${open ? 'sidebar--open' : ''}`} aria-label="Primary navigation">
      <div className="brand"><span className="brand__symbol" aria-hidden="true">G</span><span><strong>Growth Store</strong><small>Admin console</small></span></div>
      <div className="sidebar__label">WORKSPACE</div>
      <nav aria-label="Dashboard sections">
        <button type="button" className="nav-item nav-item--active" aria-current="page" onClick={onNavigate}>
          <span aria-hidden="true">▦</span> Overview
        </button>
      </nav>
      <div className="sidebar__footer"><span className="sidebar__dot" aria-hidden="true"/>Sample data workspace</div>
    </aside>
  );
}
