import React from "react";
import "../styles/SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult"
import data from "../data.json";


function createResult(resultTerm) {
    return (
      <SearchResult
        key={resultTerm.id}
        img={resultTerm.img}
        location={resultTerm.location}

        title={resultTerm.title}
        description={resultTerm.description}
star={resultTerm.star}
        price={resultTerm.price}
        total={resultTerm.total}
      />
    );
  }

function SearchPage() {
  return <div className="searchPage">

  <div className="searchPage__info">
  <p>62 stays · 26 august to 30 august · 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
  </div>
  {data.results.map(createResult)}
  
  </div>;
}

export default SearchPage;
