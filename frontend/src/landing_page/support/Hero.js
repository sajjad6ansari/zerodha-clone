import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 " id="supportWrapper" >
        <h4>Support Portal</h4>
        <a href="" className="fs-5">Track Tickets</a>
      </div>
      <div className="row p-5 m-3">
        <div className="col-1"></div>
        <div className="col-6 p-3">
          <h1 className="fs-2 mb-4">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" className="mb-3"/>
          <br />
          <a href="" className="p-3">Track account opening</a>
          <a href="" className="p-3">Track segment activation</a>
          <a href="" className="p-3">Intraday margins</a>
          <a href="" className="p-3">Kite user manual</a>
        </div>
        <div className="col-1"></div>
        <div className="col-4 p-3  fs-5">
          <h1 className="fs-2 mb-3">Featured</h1>
          <ol>
            <li className="mb-4">
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li className="mb-4">
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
