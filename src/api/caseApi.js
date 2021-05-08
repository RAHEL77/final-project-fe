import axios from 'axios';

const getToken = () => {
  const rawToken = localStorage.getItem("token");
  if (!rawToken) {
    return;
  }
  const token = JSON.parse(rawToken);
  return token;
};
//add new case
export const apiAddCase = async (
  description,
  isDone,
  maintenanceSupplier,
  costOfFix
) => {
  const token = getToken();
  if (!token) {
    return;
  }
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/api/cases`,
    {
      method: "post",
      body: JSON.stringify({ description, isDone, maintenanceSupplier,costOfFix }),
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  console.log(data);
};

export const apiGetCases=async ()=>{
  const token = getToken();
  if (!token) {
    return;
  }
  const data=await axios.get(`${process.env.REACT_APP_BACKEND}/api/cases`,
  {headers:{
    "authorization":"bearer "+token
  }})
  return data.data;
}

export const apiUpdate = async (description, isDone, maintenanceSupplier,costOfFix) => {
  const token = getToken();
  if (!token) {
    return;
  }
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/api/cases`, {
    method: "put",
    body: JSON.stringify({ description, isDone, maintenanceSupplier,costOfFix,userId }),
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${token}`,
    },
  });
  const data = await response.json();
  console.log(data);
};
