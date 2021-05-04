export const apiLogin = async (email, password) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/api/users/login`,
    {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: { "content-type": "application/json" },
    }
  );
  const data = await response.json();
  console.log(data);
};

export const apiRegister = async (email,name,password) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/api/users/register`,
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


