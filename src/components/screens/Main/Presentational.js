import React from "react";
import ShopItem from "./components/ShopItem/Presentational";
import "./Styles.scss";

const Main = () => {
  const ShopData = [
    {
      code: "1",
      name: "Dress",
      amount: "1",
      amountremove: "Missing",
      amountadd: "add",
    },

    {
      code: "2",
      name: "Skirt",
      amount: "4",
      amountremove: "Missing",
      amountadd: "add",
    },
    {
      code: "3",
      name: "Shoes",
      amount: "7",
      amountremove: "Missing",
      amountadd: "add",
    },
    {
      code: "4",
      name: "Pants",
      amount: "5",
      amountremove: "Missing",
      amountadd: "add",
    },
  ];
  return (
    <div className="main-container">
      {ShopData.map((item, index) => (
        <ShopItem
          key={index}
          codeprops={item.code}
          nameprops={item.name}
          amountprops={item.amount}
          amountremoveprops={item.amountremove}
          amountaddprops={item.amountadd}
        />
      ))}
    </div>
  );
};
export default Main;
