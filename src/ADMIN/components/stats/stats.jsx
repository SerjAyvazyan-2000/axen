import "./stats.scss";

export default function Stats({ items = [] }) {
  return (
    <div className="exchange-dashboard-stats G-align-center">
      {items.map((stat, idx) => (
        <div key={idx} className="exchange-dashboard-stat">
          <p>{stat.label}</p>
          <span>{stat.value}</span>
        </div>
      ))}
    </div>
  );
}