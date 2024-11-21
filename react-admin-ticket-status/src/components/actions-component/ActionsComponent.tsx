import { TopToolbar, DeleteButton } from "react-admin";
import { Button } from "@mui/material";

interface ActionsComponentProps {
  types?: string;
  onOpenCreate?: () => void;
  onOpenEdit?: () => void;
  onDelete?: () => void;
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

          <Button onClick={props.onDelete} variant="contained" color="error">
            Delete
          </Button>
        </TopToolbar>
      )}

      {props.types === "comments" && (
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

          <Button onClick={props.onDelete} variant="contained" color="error">
            Delete
          </Button>
        </TopToolbar>
      )}
    </>
  );
};

export default ActionsComponent;
