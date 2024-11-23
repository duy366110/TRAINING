import { useState } from "react";
import { SaveButton, DeleteButton, useTranslate } from "react-admin";
import { Button } from "@mui/material";

interface ActionsFormComponentProps {
  actionsType?: string;
  redirect?: boolean;
  onCancel?: () => void;
  onDelete?: () => void;
}

const ActionsFormComponent = (props: ActionsFormComponentProps) => {
    const [redirect, setRedirect]: any = useState<boolean>(props.redirect || false);
  let translate = useTranslate();

  return (
    <>
      {props.actionsType === "created" && (
        <div
          className={`p-[15px] mt-[45px]  flex justify-between w-full bg-[#f5f5f5]`}
        >
          <Button onClick={props.onCancel} variant="contained" color="error">
            {translate("commons.button.cancel")}
          </Button>

          <SaveButton />
        </div>
      )}

      {props.actionsType === "edited" && (
        <div
          className={`p-[15px] mt-[45px]  flex justify-between w-full bg-[#f5f5f5]`}
        >
          <Button onClick={props.onCancel} variant="contained" color="error">
            {translate("commons.button.cancel")}
          </Button>

          <div className="flex gap-4">
            <DeleteButton onClick={props.onDelete} redirect={redirect} />
            <SaveButton />
          </div>
        </div>
      )}
    </>
  );
};

export default ActionsFormComponent;
