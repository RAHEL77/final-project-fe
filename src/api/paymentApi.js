import axios from "axios";

const getToken = () => {
  const rawToken = localStorage.getItem("token");
  if (!rawToken) {
    return;
  }
  const token = JSON.parse(rawToken);
  return token;
};
//add new payment
export const apiAddPayment = async (
  dateOfPayment,
  amount,
  details,
  payer,
  recivedBy
) => {
  const token = getToken();
  if (!token) {
    return;
  }
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/api/payments`,
    {
      method: "post",
      body: JSON.stringify({
        dateOfPayment,
        amount,
        details,
        payer,
        recivedBy,
      }),
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  console.log(data);
};

export const apiGetPayments = async () => {
  const token = getToken();
  if (!token) {
    return;
  }
  const data = await axios.get(
    `${process.env.REACT_APP_BACKEND}/api/payments`,
    {
      headers: {
        authorization: "bearer " + token,
      },
    }
  );
  return data.data;
};

export const apiUpdate = async (
  dateOfPayment,
  amount,
  details,
  payer,
  recivedBy
) => {
  const token = getToken();
  if (!token) {
    return;
  }
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/api/payments`,
    {
      method: "put",
      body: JSON.stringify({
        dateOfPayment,
        amount,
        details,
        payer,
        recivedBy,
      }),
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  console.log(data);
};
