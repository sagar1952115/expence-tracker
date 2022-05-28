import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((curr) => {
          return <Transaction key={curr.id} curr={curr} />;
        })}
      </ul>
    </>
  );
};

export default TransactionList;
