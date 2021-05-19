import React, { useState } from "react";
import { apiAddBuilding } from "../../api/buildingApi";

const AddBuilding = () => {
  const [balance, setBalance] = useState("");
  const [addressOfBuilding, setAddressOfBuilding] = useState(false);
  const [maintenanceSupplier, setMaintenanceSupplier] = useState("");
  const [costOfFix, setCostOfFix] = useState(0);
  const [userId, setUserId] = useState("");

  const onAddBuilding = (e) => {
    e.preventDefault();
    apiAddBuilding(balance, addressOfBuilding, charges, payments,users);
  };

  return (
    <div>
      <h3>ADD BUILDING</h3>
      <form onSubmit={onAddBuilding} style={{ display: "flex" }}>
        <label htmlFor="balance">BALANCE</label>
        <input
          type="number"
          id="balance"
          required
          value={balance}
          onChange={(e) => setBalance(+e.target.value)}
        />

        <label htmlFor="addressOfBuilding">ADRESS</label>
        <input
          type="text"
          id="addressOfBuilding"
          required
          value={addressOfBuilding}
          onChange={(e) => setAddressOfBuilding(+e.target.value)}
        />

        <label htmlFor="charges">CHARGE</label>
        <input
          type="number"
          id="charges"
          required
          value={charges}
          onChange={(e) => setCharges(+e.target.value)}
        />

        <label htmlFor="payments">payments</label>
        <input
          type="number"
          id="payments"
          required
          value={payments}
          onChange={(e) => setPayments(e.target.value)}
        />
        <label htmlFor="users">User</label>
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
