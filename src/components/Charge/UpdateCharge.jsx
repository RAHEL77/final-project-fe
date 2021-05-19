import React, { useState } from "react";
import { apiAddCharge } from "../../api/chargeApi";
  //dateOfCharge,amount,caseOf,payer,receivedBy,typeOfCharge,

const AddCharge = () => {
  const [dateOfCharge, setDateOfCharge] = useState("");
  const [amount, setAmount] = useState(false);
  const [caseOf, setCaseOf] = useState("");
  const [payer, setPayer] = useState(0);
  const [receivedBy, setReceivedBy] = useState("");
  const [typeOfCharge, setTypeOfCharged] = useState("");

  const onUpdateCharge = (e) => {
    e.preventDefault();
    apiAddCharge(dateOfCharge, amount, caseOf, payer,receivedBy,typeOfCharge);
  };

  return (
    <div>
      <h3>UPDATE CHARGE</h3>
      <form onSubmit={onUpdateCharge} style={{ display: "flex" }}>
        <label htmlFor="dateOfCharge"> dateOfCharge</label>
        <input
          type="number"
          id="dateOfCharge"
          required
          value={dateOfCharge}
          onChange={(e) => setDateOfChargen(+e.target.value)}
        />

        <label htmlFor="amount">amount</label>
        <input
          type="number"
          id="amount"
          required
          value={amount}
          onChange={(e) => setAmount(+e.target.value)}
        />

        <label htmlFor="caseOf">caseOf</label>
        <input
          type="text"
          id="caseOf"
          required
          value={caseOf}
          onChange={(e) => setCaseOf(+e.target.value)}
        />

        <label htmlFor="payer">payer</label>
        <input
          type="number"
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

export default AddApartment;
