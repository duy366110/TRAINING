import { ReactNode } from "react";
import {
  useUpdate,
  SimpleForm,
  TextInput,
  required,
  Edit,
  SaveButton,
  DeleteButton,
  useDelete,
  useNotify,
  useGetIdentity,
  useTranslate,
} from "react-admin";

interface UtilFormEdit {
  children?: ReactNode;
  id: number;
  model: string;
  closeDialog: () => void;
}

const UtilFormEdit = (props: UtilFormEdit) => {
  const { identity }: any = useGetIdentity();
  const [update] = useUpdate(props.model);
  const [deleteOne] = useDelete();
  const notify = useNotify();
  const translate = useTranslate();

  const handleSubmit = async (data: any) => {
    if (
      ["admin", "edit"].includes(identity.role) &&
      identity.permissions?.includes("edit")
    ) {
      try {
        await update(
          props.model,
          { id: props.id, data },
          {
            onSuccess: () => {
              props.closeDialog();
            },
            onFailure: (error: any) => {
              console.log(error.message);
            },
          },
        );
      } catch (e) {
        console.log("Error while saving data.");
      }
    } else {
      notify(translate("commons.notify.notPermission"), { type: "error" });
    }
  };

  const handleDelete = async () => {
    if (identity.role === "admin" && identity.permissions?.includes("delete")) {
      if (props.id) {
        deleteOne(
          props.model,
          { id: props.id },
          {
            onSuccess: () => {
              notify("Delete success!", { type: "success" });
              props.closeDialog();
            },
            onError: (error) => {
              notify("Delete unsuccess!", { type: "error" });
            },
          },
        );
      }
    } else {
      notify(translate("commons.notify.notPermission"), { type: "error" });
    }
  };

  return (
    <>
      {props.model === "priorities" && (
        <Edit id={props.id} resource={props.model}>
          <SimpleForm
            onSubmit={handleSubmit}
            toolbar={
              <div
                style={{
                  padding: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <SaveButton />
                <DeleteButton onClick={handleDelete} redirect={false} />
              </div>
            }
          >
            <TextInput label="Value" source="value" validate={required()} />
            <TextInput label="Display" source="display" validate={required()} />
            <TextInput
              label="Description"
              source="description"
              validate={required()}
            />
            <TextInput
              label="Foreground"
              source="foreground"
              validate={required()}
            />
            <TextInput
              label="Background"
              source="background"
              validate={required()}
            />
          </SimpleForm>
        </Edit>
      )}

      {props.model === "defaults" && (
        <Edit id={props.id} resource={props.model}>
          <SimpleForm
            onSubmit={handleSubmit}
            toolbar={
              <div
                style={{
                  padding: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <SaveButton />
                <DeleteButton onClick={handleDelete} redirect={false} />
              </div>
            }
          >
            <TextInput label="Value" source="value" validate={required()} />
            <TextInput label="Display" source="display" validate={required()} />
            <TextInput
              label="Description"
              source="description"
              validate={required()}
            />
            <TextInput
              label="Foreground"
              source="foreground"
              validate={required()}
            />
            <TextInput
              label="Background"
              source="background"
              validate={required()}
            />
          </SimpleForm>
        </Edit>
      )}

      {props.model === "status" && (
        <Edit id={props.id} resource={props.model}>
          <SimpleForm
            onSubmit={handleSubmit}
            toolbar={
              <div
                style={{
                  padding: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <SaveButton />
                <DeleteButton onClick={handleDelete} redirect={false} />
              </div>
            }
          >
            <TextInput label="Value" source="value" validate={required()} />
            <TextInput label="Display" source="display" validate={required()} />
            <TextInput
              label="Description"
              source="description"
              validate={required()}
            />
            <TextInput
              label="Foreground"
              source="foreground"
              validate={required()}
            />
            <TextInput
              label="Background"
              source="background"
              validate={required()}
            />
          </SimpleForm>
        </Edit>
      )}
    </>
  );
};

export default UtilFormEdit;
