export default function StatCard({ label, value, icon, note, variant }) {
  return (
    <section className="stat-card" aria-label={label}>
      <div className="stat-card__top"><span className="stat-card__label">{label}</span><span className={`stat-card__icon stat-card__icon--${variant}`} aria-hidden="true">{icon}</span></div>
      <p className="stat-card__value">{value}</p>
      <p className="stat-card__note">{note}</p>
    </section>
  );
}
