import axios from "axios";

export const updateTask = async (id: any, status: any) => {
  // console.log("descriptionID", id);
  console.log("stt1", status);
  

  const res = await axios.put(`https://api-nodejs-todolist.herokuapp.com/task/${id}`,
    {
        "completed": status,
        // "completed": true,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjFlNWIyMmJlMzcyZTAwMTc3ZWJiNDEiLCJpYXQiOjE2NTUwOTMyOTd9._Fz0LQntFEz0brj3AV_-FCXAo_AWDbuQ9P01ZxQTFKI",
      },
    }
  );

//   console.log("completed", res.data.data.completed);
//   console.log("status", status);
  
  return res;
};
