import React, { useState } from "react";
import "./Styles.scss";
import Card from "../../../../common/Card/Presentational";

const ShopItem = ({ codeprops, nameprops, amountprops, amountremoveprops }) => {
  const [itemAmount, setItemAmount] = useState(amountprops);

  const changeItemAmount = () => {
    setItemAmount("Out of stock");
  };

  return (
    <Card customClassName="shop-item">
      <div className="code-name">
        <span className="code">{codeprops}</span>
        <h2 className="name">{nameprops}</h2>
      </div>

      <div className="amount">
        {`${itemAmount} amount`}
        <div onClick={changeItemAmount} className="amountremove">
          {amountremoveprops}
        </div>{" "}
      </div>
    </Card>
  );
};
export default ShopItem;
