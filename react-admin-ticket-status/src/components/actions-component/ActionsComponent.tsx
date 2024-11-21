import { TopToolbar } from "react-admin";
import {
    Button,
  } from "@mui/material";

interface ActionsComponentProps {
  types?: string;
  onOpenCreate?: () => void;
  onOpenEdit?: () => void;
}

const ActionsComponent = (props: ActionsComponentProps) => {
  return (
    <>
      {props.types === "status" && (
        <TopToolbar>
          <Button
            variant="contained"
            color="primary"
            onClick={props.onOpenCreate}
          >
            + Create
          </Button>

          <Button
            variant="contained"
            color="primary"
            onClick={props.onOpenEdit}
            >
              Edit
            </Button>

            <Button
            variant="contained"
            color="error"
            >
              Delete
            </Button>
        </TopToolbar>
      )}
    </>
  );
};

export default ActionsComponent;
