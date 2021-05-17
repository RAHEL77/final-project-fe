import axios from 'axios';

const getToken = () => {
  const rawToken = localStorage.getItem("token");
  if (!rawToken) {
    return;
  }
  const token = JSON.parse(rawToken);
  return token;
};
//add new building
export const apiAddBuilding = async (
  balance, addressOfBuilding, charge,payments,userId
) => {
  const token = getToken();
  if (!token) {
    return;
  }
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/api/buildings`,
    {
      method: "post",
      body: JSON.stringify({ balance, addressOfBuilding, charge,payments,userId }),
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  console.log(data);
};

export const apiGetBuildings=async ()=>{
  const token = getToken();
  if (!token) {
    return;
  }
  const data=await axios.get(`${process.env.REACT_APP_BACKEND}/api/buildings`,
  {headers:{
    "authorization":"bearer "+token
  }})
  return data.data;
}

export const apiUpdate =
 async (balance, addressOfBuilding, charge,payments,userId) => {
  const token = getToken();
  if (!token) {
    return;
  }
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/api/buildings`, {
    method: "put",
    body: JSON.stringify({ balance, addressOfBuilding, charge,payments,userId }),
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${token}`,
    },
  });
  const data = await response.json();
  console.log(data);
};
