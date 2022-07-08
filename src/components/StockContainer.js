import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, handleClick }) {
  const stock = stocks.map((stock) =>
    <Stock stock={stock} key={stock.id} handleClick={handleClick}/> 
  )

  return (
    <div>
      <h2>Stocks</h2>
      {stock}
    </div>
  );
}

export default StockContainer;
