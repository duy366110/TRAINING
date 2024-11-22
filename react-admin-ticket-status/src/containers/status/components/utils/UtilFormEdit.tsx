import { ReactNode } from "react";
import { useUpdate, SimpleForm, TextInput, required, Edit } from "react-admin";

interface UtilFormEdit {
  children?: ReactNode;
  id: number;
  model: string;
  closeDialog: () => void;
}

const UtilFormEdit = (props: UtilFormEdit) => {
  const [update] = useUpdate(props.model);

  const handleSubmit = async (data: any) => {
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
  };

  return (
    <>
      {props.model === "priorities" && (
        <Edit id={props.id} resource={props.model} mutationMode="pessimistic">
          <SimpleForm onSubmit={handleSubmit}>
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
        <Edit id={props.id} resource={props.model} mutationMode="pessimistic">
          <SimpleForm onSubmit={handleSubmit}>
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
