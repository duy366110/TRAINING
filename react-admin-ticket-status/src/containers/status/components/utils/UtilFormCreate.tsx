import {
  useCreate,
  Create,
  SimpleForm,
  TextInput,
  required,
} from "react-admin";

interface UtilFormCreateProps {
  model: string;
  closeDialog: () => void;
}

const UtilFormCreate = (props: UtilFormCreateProps) => {
  const [create] = useCreate(props.model);

  const handleSubmit = async (data: any) => {
    console.log(props.model);
    console.log(data);

    try {
      await create(
        props.model,
        { data },
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
      {props.model === "status" && (
        <Create>
          <SimpleForm onSubmit={handleSubmit}>
            {/* <TextInput hidden={true} label="Value" source="id" defaultValue={110} /> */}
            <TextInput label="Value" source="value" validate={required()} />
            <TextInput label="Display" source="display" validate={required()} />
            <TextInput label="Description" source="description" validate={required()} />
            <TextInput label="Foreground" source="foreground" validate={required()} />
            <TextInput label="Background" source="background" validate={required()} />
          </SimpleForm>
        </Create>
      )}

      {props.model === "comments" && (
        <Create>
          <SimpleForm onSubmit={handleSubmit}>
            <TextInput label="Content" source="content" validate={required()} />
          </SimpleForm>
        </Create>
      )}
    </>
  );
};

export default UtilFormCreate;
