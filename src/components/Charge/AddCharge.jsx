import React, { useState } from "react";
import { apiAddCharge } from "../../api/chargeApi";

const AddCharge = () => {
  const [dateOfCharge, setDateOfCharge] = useState("");
  const [amount, setAmount] = useState(false);
  const [caseOf, setCaseOf] = useState("");
  const [payer, setPayer] = useState(0);
  const [receivedBy, setReceivedBy] = useState("");
  const [typeOfCharge, setTypeOfCharge] = useState("");
  //dateOfCharge,amount,caseOf,payer,receivedBy,typeOfCharge,

  const onAddCharge = (e) => {
    e.preventDefault();
    apiAddCase(dateOfCharge, amount, caseOf, payer, receivedBy, typeOfCharge);
  };

  return (
    <div>
      <h3>ADD CHARGE</h3>
      <form onSubmit={onAddCharge} style={{ display: "flex" }}>
        <label htmlFor="dateOfCharge">Case Description</label>
        <input
          type="text"
          id="dateOfCharge"
          required
          value={dateOfCharge}
          onChange={(e) => setDateOfCharge(+e.target.value)}
        />

        <label htmlFor="amount">amount</label>
        <input
          type="number"
          id="amount"
          required
          value={amount}
          onChange={(e) => setAmount(+e.target.value)}
        />

        <label htmlFor="caseOf">case Of Apartment</label>
        <input
          type="text"
          id="caseOf"
          required
          value={caseOf}
          onChange={(e) => setCaseOf(+e.target.value)}
        />

        <label htmlFor="payer">Payer</label>
        <input
          type="text"
          id="payer"
          required
          value={payer}
          onChange={(e) => setPayer(e.target.value)}
        />

        <label htmlFor="receivedBy">receivedBy</label>
        <input
          type="text"
          id="receivedBy"
          required
          value={receivedBy}
          onChange={(e) => setReceivedBy(e.target.value)}
        />

        <label htmlFor="typeOfCharge">typeOfCharge</label>
        <input
          type="text"
          id="typeOfCharge"
          required
          value={typeOfCharge}
          onChange={(e) => setTypeOfCharge(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddCharge;
