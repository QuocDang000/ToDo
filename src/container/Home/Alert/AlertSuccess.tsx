import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export default function TransitionAlertsSuccess() {
  const [open, setOpen] = useState(true);

  return (
    <Box sx={{ width: "160px", position: "absolute", display: "inline-block", marginLeft: "100px" }}>
      <Collapse in={open}>
        <Alert
          severity="success"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Success
        </Alert>
      </Collapse>
    </Box>
  );
}
