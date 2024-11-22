import { useTranslate } from "react-admin";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState, RootDispatch } from "@/stores";
import { close, approve } from "@/stores/slices/sliceConfirm";

const ConfirmComponent = (props: any) => {
  const confirm: any = useSelector<RootState>((state) => state.confirm);
  const dispath: any = useDispatch<RootDispatch>();
  const translate = useTranslate();

  const closeHandler = () => {
    dispath(close());
  };

  const approveHandler = () => {
    dispath(approve());
  };

  return (
    <Dialog open={confirm.isOpen || false} onClose={closeHandler}>
      <DialogTitle>{confirm.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{confirm.message || ""}</DialogContentText>
        {props.children}
      </DialogContent>

      <DialogActions>
        <Button onClick={closeHandler} color="secondary">
          Cancel
        </Button>

        {confirm.isSave && (
          <Button onClick={approveHandler} color="secondary">
            Save
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmComponent;
