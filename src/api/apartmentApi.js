//add new apartment
export const apiAdd = async (numOfApartment,floor,sizeOfApartment,userId) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/api/apartments`,
    {
      method: "post",
      body: JSON.stringify({ numOfApartment,floor,sizeOfApartment,userId }),
      headers: { "content-type": "application/json" },
    }
  );
  const data = await response.json();
  console.log(data);
};


export const apiUpdate = async (email,name,password) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/api/users`,
    {
      method: "put",
      body: JSON.stringify({ email,name,password}),
      headers: { "content-type": "application/json" },
    }
  );
  const data = await response.json();
  console.log(data);
};

