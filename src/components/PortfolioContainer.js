import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ stocks, handleClick }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {stocks.map((stock) => (<Stock stock={stock} key={stock.id} handleClick={() => handleClick(stock)}/>))}
    </div>
  );
}

export default PortfolioContainer;
