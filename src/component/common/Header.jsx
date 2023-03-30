import React from "react";
import "../../assets/styles/header.css";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header id="header" class="fixed-top">
      <div class="container d-flex align-items-center">
        <h1 class="logo me-auto">
          <Link to="/">Company</Link>
        </h1>

        <nav id="navbar" class="navbar order-last order-lg-0">
          <ul>
            <li>
              <NavLink to="/" class="link">
                Home
              </NavLink>
            </li>

            <li class="dropdown">
              <NavLink to="/about" className="link">
                <span>About</span> <i class="bi bi-chevron-down"></i>
              </NavLink>
              <ul>
                <li>
                  <a href="about.html" className="link">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="team.html" className="link">
                    Team
                  </a>
                </li>
                <li>
                  <a href="testimonials.html" className="link">
                    Testimonials
                  </a>
                </li>
                <li class="dropdown">
                  <a href="#" className="link">
                    <span>Deep Drop Down</span>{" "}
                    <i class="bi bi-chevron-right"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="#" className="link">
                        Deep Drop Down 1
                      </a>
                    </li>
                    <li>
                      <a href="#" className="link">
                        Deep Drop Down 2
                      </a>
                    </li>
                    <li>
                      <a href="#" className="link">
                        Deep Drop Down 3
                      </a>
                    </li>
                    <li>
                      <a href="#" className="link">
                        Deep Drop Down 4
                      </a>
                    </li>
                    <li>
                      <a href="#" className="link">
                        Deep Drop Down 5
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <a href="services.html" className="link">
                Services
              </a>
            </li>
            <li>
              <a href="portfolio.html" className="link">
                Portfolio
              </a>
            </li>
            <li>
              <a href="pricing.html" className="link">
                Pricing
              </a>
            </li>
            <li>
              <a href="blog.html" className="link">
                Blog
              </a>
            </li>
            <li>
              <a href="contact.html" className="link">
                Contact
              </a>
            </li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>

        <div class="header-social-links d-flex">
          <a href="#" class="twitter" className="link">
            <i class="bu bi-twitter"></i>
          </a>
          <a href="#" class="facebook" className="link">
            <i class="bu bi-facebook"></i>
          </a>
          <a href="#" class="instagram" className="link">
            <i class="bu bi-instagram"></i>
          </a>
          <a href="#" class="linkedin " className="link">
            <i class="bu bi-linkedin"></i>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
