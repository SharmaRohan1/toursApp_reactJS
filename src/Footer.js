import "./footerStyles.css";

function Footer() {
  return (
    <section className="footer-section">
      <div className="footer-container">
        <div className="footer-links-container">
          <ul className="footer-navlist">
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

        <div className="footer-socials-container">
          <ul className="footer-socials-list">
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

        <div class="copyright">
          Copyright &#169; BackRoads Travel Tours Company. All rights reserved.
        </div>
      </div>
    </section>
  );
}

export default Footer;
