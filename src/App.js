import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import FeaturedTours from "./FeaturedTours";
import Footer from "./Footer";

import "./appStyles.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <FeaturedTours />
      <Footer />
    </div>
  );
}

export default App;
