import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

import TourCard from "./TourCard";

import "./featuredToursStyles.css";

function FeaturedTours() {
  return (
    <section className="featured-tours-section">
      <h2 className="tours-heading">
        FEATURED <span>TOURS</span>
      </h2>
      <div className="featured-tours-container">
        <div className="tours-cards-container">
          <TourCard
            title="Tibet Adventure"
            country="China"
            date="Aug 14, 2023"
            duration="6 days"
            price="From $2100"
            image={tour1}
          />
          <TourCard
            title="Best of Java"
            country="Indonesia"
            date="Oct 19, 2023"
            duration="7 days"
            price="From $3100"
            image={tour2}
          />
          <TourCard
            title="Explore Hong Kong"
            country="Hong Kong"
            date="sep 21, 2023"
            duration="5 days"
            price="From $4100"
            image={tour3}
          />
          <TourCard
            title="Kenya Highlights"
            country="Kenya"
            date="Dec 12, 2023"
            duration="9 days"
            price="From $3000"
            image={tour4}
          />
        </div>
      </div>
    </section>
  );
}

export default FeaturedTours;
