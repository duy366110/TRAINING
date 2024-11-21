import {useCreate, Create, SimpleForm, TextInput, required,} from "react-admin";

const UtilFormCreate = (props: any) => {
    const [create] = useCreate("status");

  const handleSubmit = async (data: any) => {
    try {
      await create(
        "status",
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
    <Create>
      <SimpleForm
        onSubmit={handleSubmit}
      >
        <TextInput
          label="Title"
          source="title"
          validate={required()}
        />
        <TextInput
          label="Body"
          source="body"
          validate={required()}
        />
      </SimpleForm>
    </Create>
  );
};

export default UtilFormCreate;
