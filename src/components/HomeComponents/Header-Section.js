import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const HeaderSection = () => {
  const [ClassNavbarAnimation, setClassNavbarAnimation] = useState("");
  const listenScrollEvent = () => {
    window.scrollY > 10
      ? setClassNavbarAnimation("NavbarScroll-top")
      : setClassNavbarAnimation("");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <div className="HeaderSection">
      <nav
        className={
          "navbar navbar-expand-lg navbar-dark " + ClassNavbarAnimation
        }
      >
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="logo d-lg-none m-lg-auto">Feres ZAREB</div>
          <div
            className="collapse navbar-collapse navbarBg"
            id="navbarSupportedContent"
          >
            <div className="logo d-none d-lg-block">Feres ZAREB</div>
            <ul className="navbar-nav mx-auto me-5 size-1_1em">
              <li className="nav-item">
                <Link
                  to="/"
                  className={
                    window.location.pathname.split("/")[1] === ""
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    window.location.pathname.split("/")[1] === "about"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    window.location.pathname.split("/")[1] === "team"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/team"
                >
                  Experience
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    window.location.pathname.split("/")[1] === "roadmap"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/roadmap"
                >
                  Work
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/mint">
                  Contact me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="hero-section d-flex align-items-center">
        <div className="container">
          <div className="row hero-wrap align-items-center">
            <div className="col-md-6">
              <div className="hero-content">
                <h1 className="span3 wow bounceInDown center myName">
                  Hi, I’m FERES ZAREB
                </h1>
                <p>
                  Hello, I’m a FERES ZAREB, Full stack Developer/Graphic
                  Designer based in Tunis. I have rich experience in web site
                  design &amp; building and customization.
                </p>
                <a href="#contact" className="default-btn">
                  HIRE ME
                </a>
              </div>
            </div>
            <div className="col-md-6 d-none d-lg-block d-md-block">
              <div className="color-block"></div>
              <div className="hero-content"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
