import axios from 'axios';

const getToken = () => {
  const rawToken = localStorage.getItem("token");
  if (!rawToken) {
    return;
  }
  const token = JSON.parse(rawToken);
  return token;
};
//add new chargeOfFixes
export const apiAddChargeOfFixes = async (
  _id,
  dateOfPayment,
  amount,
  caseOf,
  payer,
  receivedBy,
  typeOfCharge,
  userId,
) => {
  const token = getToken();
  if (!token) {
    return;
  }
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/api/chargeOfFixes`,
    {
      method: "post",
      body: JSON.stringify({  
        _id,
        dateOfPayment,
        amount,
        caseOf,
        payer,
        receivedBy,
        typeOfCharge,
        userId, }),
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  console.log(data);
};

export const apiGetChargeOfFixes=async ()=>{
  const token = getToken();
  if (!token) {
    return;
  }
  const data=await axios.get(`${process.env.REACT_APP_BACKEND}/api/chargeOfFixes`,
  {headers:{
    "authorization":"bearer "+token
  }})
  return data.data;
}

export const apiUpdate = async ( 
  _id,
  dateOfPayment,
  amount,
  caseOf,
  payer,
  receivedBy,
  typeOfCharge,
  userId) => {
  const token = getToken();
  if (!token) {
    return;
  }
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/api/chargeOfFixes`, {
    method: "put",
    body: JSON.stringify({  
      _id,
      dateOfPayment,
      amount,
      caseOf,
      payer,
      receivedBy,
      typeOfCharge,
      userId }),
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${token}`,
    },
  });
  const data = await response.json();
  console.log(data);
};
