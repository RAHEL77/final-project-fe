import axios from 'axios';

const getToken = () => {
  const rawToken = localStorage.getItem("token");
  if (!rawToken) {
    return;
  }
  const token = JSON.parse(rawToken);
  return token;
};
//add new charge
export const apiAddCharge = async (
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
    `${process.env.REACT_APP_BACKEND}/api/charge`,
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

export const apiGetCharge=async ()=>{
  const token = getToken();
  if (!token) {
    return;
  }
  const data=await axios.get(`${process.env.REACT_APP_BACKEND}/api/charge`,
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
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/api/charge`, {
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
