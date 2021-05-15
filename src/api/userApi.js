
export const apiLogin = async (email, password) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/api/auth/login`,
    {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: { "content-type": "application/json" },
    }
  );
  const data = await response.json();
  console.log(data);
  localStorage.setItem('token', JSON.stringify(data.token))
};

export const apiRegister = async (email,name,password) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/api/auth/register`,
    {
      method: "post",
      body: JSON.stringify({ email,name,password}),
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


export const apiGetUsers = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/api/users`,
    {method: "get"}
  );
  const data = await response.json();
  return data.allUsers
};


export const apiGetUser = async (id) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/api/users/${id}`,
    {method: "get"}
  );
  const data = await response.json();
  console.log(data);
  return data
};


export const apiDelete = async (userId) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/api/users/${userId}`,
    {method: "delete"}
  );
  const data = await response.json();
  console.log(data);
};