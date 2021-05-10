import axios from 'axios';

const getToken = () => {
  const rawToken = localStorage.getItem("token");
  if (!rawToken) {
    return;
  }
  const token = JSON.parse(rawToken);
  return token;
};
//add new chargeOfRegular
export const apiAddChargeOfRegular = async (
  dateOfpayment, amount, typeOfRegular,payer,receivedBy,typeOfPayment
) => {
  const token = getToken();
  if (!token) {
    return;
  }
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/api/chargeOfRegular`,
    {
      method: "post",
      body: JSON.stringify({ dateOfpayment, amount, typeOfRegular,payer,receivedBy,typeOfPayment }),
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  console.log(data);
};

export const apiGetChargeOfRegulars=async ()=>{
  const token = getToken();
  if (!token) {
    return;
  }
  const data=await axios.get(`${process.env.REACT_APP_BACKEND}/api/chargeOfRegulars`,
  {headers:{
    "authorization":"bearer "+token
  }})
  return data.data;
}

export const apiUpdate = async (dateOfpayment, amount, typeOfRegular,payer,receivedBy,typeOfPayment) => {
  const token = getToken();
  if (!token) {
    return;
  }
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/api/chargeOfRegular`, {
    method: "put",
    body: JSON.stringify({dateOfpayment, amount, typeOfRegular,payer,receivedBy,typeOfPayment }),
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${token}`,
    },
  });
  const data = await response.json();
  console.log(data);
};
