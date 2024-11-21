import {
    Button,
  } from "@mui/material";

interface ActionsComponentProps {
  types?: string;
  onOpenCreate?: () => void;
}

const ActionsComponent = (props: ActionsComponentProps) => {
  return (
    <>
      {props.types === "status" && (
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={props.onOpenCreate}
          >
            + Create
          </Button>
        </div>
      )}
    </>
  );
};

export default ActionsComponent;
