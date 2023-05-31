import Card from "./ServicesCard";

import "./servicesStyles.css";

function Services() {
  return (
    <section className="services-section">
      <div className="services-container">
        <h2>
          OUR <span>SERVICES</span>
        </h2>

        <div className="cards-container">
          <Card
            icon="fa fa-wallet"
            title="SAVING MONEY"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Card
            icon="fas fa-tree"
            title="ENDLESS HIKING"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Card
            icon="fas fa-socks"
            title="AMAZING COMFORT"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </div>
    </section>
  );
}

export default Services;
