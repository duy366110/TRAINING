import { ReactNode } from "react";
import { useTranslate } from "react-admin";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

interface DialogComponentProps {
  children?: ReactNode;
  open?:boolean;
  titleType?: string;
  titleContent?: string;
  subTitle?: string;
  onClose?: () => void
}

const DialogComponent = (props: DialogComponentProps) => {
  let translate = useTranslate();

  return (
    <Dialog open={props.open || false} onClose={props.onClose}>
      <DialogTitle>{translate(`${props.titleContent}`, {type: translate(`${props.titleType}`)})}</DialogTitle>
      <DialogContent>
        <DialogContentText style={{width: "460px"}}>{translate(`${props.subTitle}`)}</DialogContentText>
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
