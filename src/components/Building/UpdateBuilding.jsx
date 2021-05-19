import React, { useState } from "react";
import { apiAddBuilding } from "../../api/buildingApi";
//balance, addressOfBuilding, charges, payments,users
const AddBuilding = () => {
  const [balance, setBalance] = useState("");
  const [addressOfBuilding, setAddressOfBuilding] = useState(false);
  const [charges, setCharges] = useState("");
  const [payments, setPayments] = useState(0);
  const [users, setUsers] = useState("");

  const onUpdateBuilding = (e) => {
    e.preventDefault();
    apiAddCase(description, isDone, maintenanceSupplier, costOfFix,userId);
  };
//balance, addressOfBuilding, charges, payments,users

  return (
    <div>
      <h3>UPDATE BUILDING</h3>
      <form onSubmit={balance} style={{ display: "flex" }}>
        <label htmlFor="balance">balance </label>
        <input
          type="number"
          id="balance"
          required
          value={balance}
          onChange={(e) => setBalance(+e.target.value)}
        />

        <label htmlFor="addressOfBuilding">addressOfBuilding</label>
        <input
          type="text"
          id="addressOfBuilding"
          required
          value={addressOfBuilding}
          onChange={(e) => setAddressOfBuilding(+e.target.value)}
        />

        <label htmlFor="charges">charges</label>
        <input
          type="number"
          id="charges"
          required
          value={charges}
          onChange={(e) => setCharges(+e.target.value)}
        />

        <label htmlFor="payments">PAYMENT</label>
        <input
          type="number"
          id="payments"
          required
          value={payments}
          onChange={(e) => setPayments(e.target.value)}
        />
        <label htmlFor="users">users</label>
        <input
          type="text"
          id="users"
          required
          value={users}
          onChange={(e) => setUsers(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddApartment;
