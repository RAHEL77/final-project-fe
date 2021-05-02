export const apiLogin=async (email,password)=>{
const response= await fetch(`${process.env.REACT_APP_BACKEND}/api/users/login`,{
  method:"post", body:JSON.stringify({email,password}),headers:{"content-type":"application/json"}
})
const data=await response.json()
console.log(data);
}