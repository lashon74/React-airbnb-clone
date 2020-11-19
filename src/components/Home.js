import React from "react";
import "../styles/Home.css";
import Banner from "./Banner";
import Card from "./Card";
import data from "../data.json";


function createStay(stayTerm) {
  return (
    <Card
      key={stayTerm.id}
      src={stayTerm.src}
      title={stayTerm.title}
      description={stayTerm.description}
      price={stayTerm.price}
    />
  );
}

function Home() {
  return (
    <div className="home">
      <Banner />

      <div className="home__section">
        {data.options.map(createStay)}
      </div>
      <div className="home__section">{data.stays.map(createStay)}</div>
    </div>
  );
}

export default Home;
