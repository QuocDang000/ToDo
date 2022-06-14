import axios from "axios";

export const deleteTask = async (id: any) => {
  const res = await axios.delete(`https://api-nodejs-todolist.herokuapp.com/task/${id}`,
  {
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjFlNWIyMmJlMzcyZTAwMTc3ZWJiNDEiLCJpYXQiOjE2NTUwOTMyOTd9._Fz0LQntFEz0brj3AV_-FCXAo_AWDbuQ9P01ZxQTFKI",
    },
  }
  );

  console.log("RES", res.data.success);
  
  return res;
}