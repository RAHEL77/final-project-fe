import React, { useState } from "react";
import { apiAddPayment } from "../../api/paymentApi";
import TextInput from "../gui/TextInput";

const AddPayment = () => {
  const date=new Date();
  const [dateOfPayment, setDateOfPayment] = useState(date.toISOString().split("T")[0]);
  const [amount, setAmount] = useState(0);
  const [details, setDetails] = useState({startOfYear: date.getFullYear(), 
    startOfMonth:date.getMonth()+1,numOfMonths:1});
  const [payer, setPayer] = useState("");
  const [recivedBy, setRecivedBy] = useState("");

  const onSetStartYear = (startOfYear) => {
    setDetails({ ...details, startOfYear: startOfYear });
  };

  const onSetNumOfMonths = (numOfMonths) => {
    setDetails({ ...details, numOfMonths: numOfMonths });
  };

  const onSetStartOfMonth = (startOfMonth) => {
    setDetails({ ...details, startOfMonth: startOfMonth });
  };
  const onAddPayment = (e) => {
    e.preventDefault();
    apiAddPayment(dateOfPayment, +amount, details, payer, recivedBy);
  };

  return (
    <div>
      <h3>ADD PAYMENT</h3>
      <form onSubmit={onAddPayment} style={{ display: "flex" }}>
        <TextInput
          id="dateOfPayment"
          value={dateOfPayment}
          setter={setDateOfPayment}
          title="Date Of Payment"
        />

        <TextInput
          id="amount"
          value={amount}
          setter={setAmount}
          title="Amount"
        />

        <TextInput
          id="startOfYear"
          value={details.startOfYear}
          setter={onSetStartYear}
          title="Start year"
        />

        <TextInput
          id="startOfMonth"
          value={details.startOfMonth}
          setter={onSetStartOfMonth}
          title="Start mounth"
        />

        <TextInput
          id="numOfMonths"
          value={details.numOfMonths}
          setter={onSetNumOfMonths}
          title="Num Of Months"
        />

        <TextInput
          id="payer"
          value={payer}
          setter={setPayer}
          title="payer"
        />

       <TextInput
          id="recivedBy"
          value={recivedBy}
          setter={setRecivedBy}
          title="recivedBy"
        />


        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddPayment;
