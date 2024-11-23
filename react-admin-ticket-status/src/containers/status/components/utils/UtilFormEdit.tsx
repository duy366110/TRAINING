import { ReactNode } from "react";
import {
  useUpdate,
  SimpleForm,
  TextInput,
  required,
  Edit,
  useDelete,
  useNotify,
  useGetIdentity,
  useTranslate,
} from "react-admin";
import ColorComponent from "@/components/color-component/ColorComponent";
import ActionsFormComponent from "@/components/actions-form-component/ActionsFormComponent";

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
            toolbar={<ActionsFormComponent actionsType="edited" onCancel={props.closeDialog} onDelete={handleDelete} redirect={false} />}
          >
            <TextInput label="Value" source="value" validate={required()} />
            <TextInput label="Display" source="display" validate={required()} />

            <TextInput
              label="Description"
              source="description"
              validate={required()}
            />

            <div className="flex gap-10">
              <ColorComponent
                label="Foreground"
                source="foreground"
                colorDemo="#ffffff"
              />
              <ColorComponent
                label="Background"
                source="background"
                colorDemo="#000000"
              />
            </div>
          </SimpleForm>
        </Edit>
      )}

      {props.model === "defaults" && (
        <Edit id={props.id} resource={props.model}>
          <SimpleForm
            onSubmit={handleSubmit}
            toolbar={<ActionsFormComponent actionsType="edited" onCancel={props.closeDialog} onDelete={handleDelete} redirect={false} />}
          >
            <TextInput label="Value" source="value" validate={required()} />
            <TextInput label="Display" source="display" validate={required()} />

            <TextInput
              label="Description"
              source="description"
              validate={required()}
            />

            <div className="flex gap-10">
              <ColorComponent
                label="Foreground"
                source="foreground"
                colorDemo="#ffffff"
              />
              <ColorComponent
                label="Background"
                source="background"
                colorDemo="#000000"
              />
            </div>
          </SimpleForm>
        </Edit>
      )}

      {props.model === "status" && (
        <Edit id={props.id} resource={props.model}>
          <SimpleForm
            onSubmit={handleSubmit}
            toolbar={<ActionsFormComponent actionsType="edited" onCancel={props.closeDialog} onDelete={handleDelete} redirect={false} />}
          >
            <TextInput label="Value" source="value" validate={required()} />
            <TextInput label="Display" source="display" validate={required()} />

            <TextInput
              label="Description"
              source="description"
              validate={required()}
            />

            <div className="flex gap-10">
              <ColorComponent
                label="Foreground"
                source="foreground"
                colorDemo="#ffffff"
              />
              <ColorComponent
                label="Background"
                source="background"
                colorDemo="#000000"
              />
            </div>
          </SimpleForm>
        </Edit>
      )}
    </>
  );
};

export default UtilFormEdit;
