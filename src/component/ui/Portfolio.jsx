import React from "react";
import portfolio1 from "../../assets/img/portfolio/portfolio-1.jpg";
import portfolio2 from "../../assets/img/portfolio/portfolio-2.jpg";
import portfolio3 from "../../assets/img/portfolio/portfolio-3.jpg";
import portfolio4 from "../../assets/img/portfolio/portfolio-4.jpg";
import portfolio5 from "../../assets/img/portfolio/portfolio-5.jpg";
import portfolio6 from "../../assets/img/portfolio/portfolio-6.jpg";
import portfolio7 from "../../assets/img/portfolio/portfolio-7.jpg";
import portfolio8 from "../../assets/img/portfolio/portfolio-8.jpg";
import portfolio9 from "../../assets/img/portfolio/portfolio-9.jpg";

function Portfolio() {
  const images = [
    portfolio1,
    portfolio2,
    portfolio3,
    portfolio4,
    portfolio5,
    portfolio6,
    portfolio7,
    portfolio8,
    portfolio9,
  ];

  const listItems = images.map((image) => {
    return (
      <div class="col-lg-4 col-md-6 portfolio-item filter-app">
        <img src={image} class="img-fluid" alt="" />
      </div>
    );
  });

  return (
    <section id="portfolio" class="portfolio">
      <div class="container">
        <div class="row" data-aos="fade-up">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">
                All
              </li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div class="row portfolio-container" data-aos="fade-up">
          {listItems}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
