export default function Header({ expanded, onToggle }) {
  return (
    <header className="topbar">
      <div className="topbar__left">
        <button type="button" className="menu-toggle" aria-label={expanded ? 'Hide navigation' : 'Show navigation'}
          aria-controls="dashboard-sidebar" aria-expanded={expanded} onClick={onToggle}>
          <span aria-hidden="true">☰</span>
        </button>
        <span className="breadcrumb">Workspace <span aria-hidden="true">/</span> <strong>Overview</strong></span>
      </div>
      <div className="topbar__right"><span className="demo-pill">Demo data</span><span className="profile-avatar" aria-hidden="true">GS</span><span className="profile-name">Administrator</span></div>
    </header>
  );
}
