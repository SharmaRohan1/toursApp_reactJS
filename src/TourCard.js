function TourCard({ title, country, date, duration, price, image }) {
  return (
    <div className="tour-card">
      <div className="top-section">
        <div className="date">{date}</div>
        <div className="image">
          <img src={image} alt={title} />
        </div>
      </div>
      <div className="bottom-section">
        <h4 className="tour-title">{title}</h4>
        <div className="info-section">
          <div className="country">
            <i class="fa-solid fa-map"></i>
            {country}
          </div>
          <div className="price-and-duration">
            <div className="duration">{duration}</div>
            <div className="price">{price}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourCard;
