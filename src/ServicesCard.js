function ServicesCard({ icon, title, desc }) {
  return (
    <div className="card">
      <div className="icon">
        <i className={icon}></i>
      </div>
      <div className="about">
        <div className="title">{title}</div>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default ServicesCard;
