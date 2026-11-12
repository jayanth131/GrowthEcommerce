import { useState } from 'react';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';

export default function DashboardShell({ children }) {
  const [navigationOpen, setNavigationOpen] = useState(false);
  return (
    <div className="shell">
      <Sidebar open={navigationOpen} onNavigate={() => setNavigationOpen(false)} />
      {navigationOpen && <button className="sidebar-backdrop" type="button" aria-label="Close navigation" onClick={() => setNavigationOpen(false)} />}
      <div className="shell__content">
        <Header expanded={navigationOpen} onToggle={() => setNavigationOpen((value) => !value)} />
        <main className="main-content" id="main-content">{children}</main>
      </div>
    </div>
  );
}
