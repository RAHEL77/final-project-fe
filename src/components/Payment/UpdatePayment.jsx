import React, { useState } from "react";
import { apiAddPayment } from "../../api/paymentApi";

const AddPayment = () => {
  const [dateOfPayment, setDateOfPayment] = useState("");
  const [amount, setAmount] = useState(false);
  const [details, setDetails] = useState("");
  const [payer, setPayer] = useState(0);
  const [recivedBy, setRecivedBy] = useState("");

  const onUpdatePayment = (e) => {
    e.preventDefault();
    apiAddPayment(dateOfPayment, amount, details, payer,recivedBy);
  };

  return (
    <div>
      <h3>UPDATE PAYMENT</h3>
      <form onSubmit={onUpdatePayment} style={{ display: "flex" }}>
        <label htmlFor="dateOfPayment">Payment date  Of  Payment</label>
        <input
          type="text"
          id="dateOfPayment"
          required
          value={dateOfPayment}
          onChange={(e) => setDateOfPayment(+e.target.value)}
        />

        <label htmlFor="amount">Floor</label>
        <input
          type="Number"
          id="amount"
          required
          value={amount}
          onChange={(e) => setAmount(+e.target.value)}
        />

        <label htmlFor="details"> Payments details</label>
        <input
          type="text"
          id="details"
          required
          value={details}
          onChange={(e) => setDetails(+e.target.value)}
        />

        <label htmlFor="payer">User</label>
        <input
          type="text"
          id="payer"
          required
          value={payer}
          onChange={(e) => setPayer(e.target.value)}
        />
        <label htmlFor="recivedBy">User</label>
        <input
          type="text"
          id="recivedBy"
          required
          value={recivedBy}
          onChange={(e) => setRecivedBy(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddPayment;
