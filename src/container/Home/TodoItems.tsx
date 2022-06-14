import DeleteIcon from "@mui/icons-material/Delete";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import useStyles from "./style";
import ControlledCheckbox from "./UpdateTask/CheckBox";
import React, { useState } from "react";
import { deleteTask } from "./Delete/until";

function TodoItems(props: any) {
  // const [status1, setStatus] = useState(false)
  const classes = useStyles();

  let { title, id, status } = props;
  console.log("statusssss", status);
  // console.log("ID", id);

  // const handleDelete = async () => {
  //   // console.log(index);
  //   // const newPosts = [...posts];
  //   // newPosts.splice(index, 1);
  //   // setPosts(newPosts);

  //   try {
  //     const response = await deleteTask(id);

  //     console.log("response file index", response);

  //     //   console.log('id' ,id);
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };

  return (
    <div className={classes.item}>
      {/* <DeleteIcon onClick={handleDelete} /> */}
      <ControlledCheckbox id={id} status={status} />
        <p>{title}</p>
        <br />
        <p>Status: {status ? "true" : "false"} </p>
    </div>
  );
}

export default TodoItems;
