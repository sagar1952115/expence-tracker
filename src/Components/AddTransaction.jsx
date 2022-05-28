import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const { addTransaction } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };
    setText("");
    setAmount("");
    addTransaction(newData);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            required
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            value={amount}
            required
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
          <button className="btn">Add Transaction</button>
        </div>
      </form>
    </>
  );
};

export default AddTransaction;
