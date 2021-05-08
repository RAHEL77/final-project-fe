import React, { useState } from "react";
import { apiAddCase } from "../../api/caseApi";

const AddCase = () => {
  const [description, setDescription] = useState("");
  const [isDone, setIsDone] = useState(false);
  const [maintenanceSupplier, setMaintenanceSupplier] = useState("");
  const [costOfFix, setCostOfFix] = useState(0);
  const [userId, setUserId] = useState("");

  const onUpdateCase = (e) => {
    e.preventDefault();
    apiAddCase(description, isDone, maintenanceSupplier, costOfFix,userId);
  };

  return (
    <div>
      <h3>UPDATE CASE</h3>
      <form onSubmit={onUpdateCase} style={{ display: "flex" }}>
        <label htmlFor="description">Case Description</label>
        <input
          type="text"
          id="description"
          required
          value={description}
          onChange={(e) => setDescription(+e.target.value)}
        />

        <label htmlFor="isDone">Floor</label>
        <input
          type="text"
          id="isDone"
          required
          value={isDone}
          onChange={(e) => setIsDone(+e.target.value)}
        />

        <label htmlFor="maintenanceSupplier">Size Of Apartment</label>
        <input
          type="text"
          id="maintenanceSupplier"
          required
          value={maintenanceSupplier}
          onChange={(e) => setMaintenanceSupplier(+e.target.value)}
        />

        <label htmlFor="costOfFix">User</label>
        <input
          type="number"
          id="costOfFix"
          required
          value={costOfFix}
          onChange={(e) => setCostOfFix(e.target.value)}
        />
        <label htmlFor="userId">User</label>
        <input
          type="text"
          id="userId"
          required
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddApartment;
