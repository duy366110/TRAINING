import { TopToolbar, useTranslate } from "react-admin";
import { Button } from "@mui/material";

interface ActionsComponentProps {
  types?: string;
  onOpenCreate?: () => void;
  onOpenEdit?: () => void;
  onDelete?: () => void;
}

const ActionsComponent = (props: ActionsComponentProps) => {
  const translate = useTranslate();

  return (
    <>
      {props.types === "priorities" && (
        <TopToolbar>
          <Button
            variant="contained"
            color="primary"
            onClick={props.onOpenCreate}
          >
            + {translate("commons.button.create")}
          </Button>

          <Button
          className="!mx-2"
            variant="contained"
            color="primary"
            onClick={props.onOpenEdit}
          >
            {translate("commons.button.edit")}
          </Button>

          <Button onClick={props.onDelete} variant="contained" color="error">
            {translate("commons.button.delete")}
          </Button>
        </TopToolbar>
      )}

      {props.types === "defaults" && (
        <TopToolbar>
          <Button
            variant="contained"
            color="primary"
            onClick={props.onOpenCreate}
          >
            + {translate("commons.button.create")}
          </Button>

          <Button
            variant="contained"
            color="primary"
            onClick={props.onOpenEdit}
          >
            {translate("commons.button.edit")}
          </Button>

          <Button onClick={props.onDelete} variant="contained" color="error">
            {translate("commons.button.delete")}
          </Button>
        </TopToolbar>
      )}

      {props.types === "status" && (
        <TopToolbar>
          <Button
            variant="contained"
            color="primary"
            onClick={props.onOpenCreate}
          >
            + {translate("commons.button.create")}
          </Button>

          <Button
            variant="contained"
            color="primary"
            onClick={props.onOpenEdit}
          >
            {translate("commons.button.edit")}
          </Button>

          <Button onClick={props.onDelete} variant="contained" color="error">
            {translate("commons.button.delete")}
          </Button>
        </TopToolbar>
      )}
    </>
  );
};

export default ActionsComponent;
