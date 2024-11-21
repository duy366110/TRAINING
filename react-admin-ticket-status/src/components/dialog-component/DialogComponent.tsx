import { ReactNode } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField as MuiTextField,
} from "@mui/material";

interface DialogComponentProps {
  children?: ReactNode;
  open?:boolean;
  onClose?: () => void
}

const DialogComponent = (props: DialogComponentProps) => {
  return (
    <Dialog open={props.open || false} onClose={props.onClose}>
      <DialogTitle>Add New Comment</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please fill in the information below to add a new comment.
        </DialogContentText>
        {props.children}
      </DialogContent>

      <DialogActions>
        <Button onClick={props.onClose} color="secondary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogComponent;
