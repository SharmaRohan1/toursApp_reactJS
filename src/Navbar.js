import "./navbarStyles.css";

function Navbar() {
  return (
    <section className="navbar-section">
      <div className="navbar-container">
        <div className="logo">
          Back<span>Roads</span>
        </div>

        <div className="list-icon">
          <i class="fa-solid fa-bars"></i>
        </div>

        <div className="desktop-links">
          <div>
            <ul className="navlist">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Featured</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="socials-list">
              <li>
                <a href="#">
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
