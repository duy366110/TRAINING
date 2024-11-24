import { TopToolbar, useTranslate, useRedirect } from "react-admin";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddBoxIcon from "@mui/icons-material/AddBox";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

interface ActionsComponentProps {
  types?: string;
  onOpenCreate?: () => void;
  onOpenEdit?: () => void;
  onDelete?: () => void;
}

const ActionsComponent = (props: ActionsComponentProps) => {
  const translate = useTranslate();
  const redirect: any = useRedirect();

  const defaultHandler = () => {
    redirect("/status/default");
  }

  return (
    <>
      {props.types === "priorities" && (
        <TopToolbar>
          <div className="flex gap-2">
            <Button onClick={defaultHandler}>
            <MoreHorizIcon />
            </Button>
            <Button
              className="flex gap-2 items-center text-[14px]"
              onClick={props.onDelete}
              variant="contained"
              color="error"
            >
              <DeleteIcon fontSize="small" />
              {translate("commons.button.delete")}
            </Button>

            <Button
              className="flex gap-2 items-center text-[14px]"
              variant="contained"
              color="primary"
              onClick={props.onOpenEdit}
            >
              <BorderColorIcon className="!w-[18px]" />
              {translate("commons.button.edit")}
            </Button>

            <Button
              className="flex gap-2 items-center text-[14px]"
              variant="contained"
              color="primary"
              onClick={props.onOpenCreate}
            >
              <AddBoxIcon className="!w-[18px]" />
              {translate("commons.button.create")}
            </Button>
          </div>
        </TopToolbar>
      )}

      {props.types === "defaults" && (
        <TopToolbar>
          <div className="flex gap-2">
            <Button
              className="flex gap-2 items-center text-[14px]"
              onClick={props.onDelete}
              variant="contained"
              color="error"
            >
              <DeleteIcon className="!w-[18px]" />
              {translate("commons.button.delete")}
            </Button>

            <Button
              className="flex gap-2 items-center text-[14px]"
              variant="contained"
              color="primary"
              onClick={props.onOpenEdit}
            >
              <BorderColorIcon className="!w-[18px]" />
              {translate("commons.button.edit")}
            </Button>

            <Button
              className="flex gap-2 items-center text-[14px]"
              variant="contained"
              color="primary"
              onClick={props.onOpenCreate}
            >
              <AddBoxIcon className="!w-[18px]" />
              {translate("commons.button.create")}
            </Button>
          </div>
        </TopToolbar>
      )}

      {props.types === "status" && (
        <TopToolbar>
          <div className="flex gap-2">
            <Button
              className="flex gap-2 items-center text-[14px]"
              onClick={props.onDelete}
              variant="contained"
              color="error"
            >
              <DeleteIcon className="!w-[18px]" />
              {translate("commons.button.delete")}
            </Button>

            <Button
              className="flex gap-2 items-center text-[14px]"
              variant="contained"
              color="primary"
              onClick={props.onOpenEdit}
            >
              <BorderColorIcon className="!w-[18px]" />
              {translate("commons.button.edit")}
            </Button>

            <Button
              className="flex gap-2 items-center text-[14px]"
              variant="contained"
              color="primary"
              onClick={props.onOpenCreate}
            >
              <AddBoxIcon className="!w-[18px]" />
              {translate("commons.button.create")}
            </Button>
          </div>
        </TopToolbar>
      )}
    </>
  );
};

export default ActionsComponent;
