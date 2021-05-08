const getToken = () => {
  const rawToken = localStorage.getItem('token');
  if(!rawToken){
    return;
  }
  const token = JSON.parse(rawToken)
  return token;
}

//********add new apartment
export const apiAdd = async (
  numOfApartment,
  floor,
  sizeOfApartment,
  userId
) => {
  const token = getToken();
  if(!token){
    return;
  }
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/api/apartments`,
    {
      method: "post",
      body: JSON.stringify({ numOfApartment, floor, sizeOfApartment, userId }),
      headers: {
        "content-type": "application/json",
        "authorization":
          `bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  console.log(data);
};

// get 
export const apiGetApartments=async ()=>{
  const token = getToken();
  if (!token) {
    return;
  }
  const data=await axios.get(`${process.env.REACT_APP_BACKEND}/api/apartments`,
  {headers:{
    "authorization":"bearer "+token
  }})
  return data.data;
}



//******update
export const apiUpdate = async (email, name, password) => {
  const token = getToken();
  if(!token){
    return;
  }
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/api/apartments`, {
    method: "put",
    body: JSON.stringify({ email, name, password }),
    headers: {
      "content-type": "application/json",
      "authorization": `bearer ${token}`,
    },
  });
  const data = await response.json();
  console.log(data);
};
