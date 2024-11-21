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
            <TextInput label="Title" source="title" validate={required()} />
            <TextInput label="Body" source="body" validate={required()} />
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
