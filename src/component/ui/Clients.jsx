import React from "react";
import client1 from "../../assets/img/clients/client-1.png";
import client2 from "../../assets/img/clients/client-2.png";
import client3 from "../../assets/img/clients/client-3.png";
import client4 from "../../assets/img/clients/client-4.png";
import client5 from "../../assets/img/clients/client-5.png";
import client6 from "../../assets/img/clients/client-6.png";
import client7 from "../../assets/img/clients/client-7.png";
import client8 from "../../assets/img/clients/client-8.png";

function Clients() {
  const clients = [
    client1,
    client2,
    client3,
    client4,
    client5,
    client6,
    client7,
    client8,
  ];
  const listItem = clients.map((image) => {
    return (
      <div class="col-lg-3 col-md-4 col-6">
        <div class="client-logo">
          <img src={image} class="img-fluid" alt="" />
        </div>
      </div>
    );
  });


  return (
    <section id="clients" class="clients">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Clients</h2>
        </div>
        <div class="row no-gutters clients-wrap clearfix" data-aos="fade-up">
          {listItem}
        </div>
      </div>
    </section>
  );
}

export default Clients;
